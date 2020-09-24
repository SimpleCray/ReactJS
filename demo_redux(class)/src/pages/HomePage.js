import React, { Component } from "react";
import { addNewHobby, setActiveHobby } from "../actions/HobbyActions";
import HobbyList from "../components/Home/HobbyList";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class HomePage extends Component {
  handleAddHobbyClick = () => {
    const newId = 1000 + Math.trunc(Math.random() * 9000);
    //Random a hobby object: id + title
    const newHobby = {
      id: newId,
      title: `Hobby ${newId}`,
    };
    this.props.handleAddHobbyClickAction(newHobby);
  };
  handleHobbyClick = (hobby) => {
    this.props.handleHobbyClickAction(hobby);
  };
  render() {
    const { hobbyList, activeId } = this.props;
    return (
      <div className="home-page">
        <h1>Redux Hook</h1>
        <button onClick={this.handleAddHobbyClick}>Random hobby</button>
        <HobbyList
          hobbyList={hobbyList}
          activeId={activeId}
          onHobbyClick={this.handleHobbyClick}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    hobbyList: state.hobby.list,
    activeId: state.hobby.activeId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleAddHobbyClickAction: bindActionCreators(addNewHobby, dispatch),
    handleHobbyClickAction: bindActionCreators(setActiveHobby, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
