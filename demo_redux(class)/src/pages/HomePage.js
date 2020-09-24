// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addNewHobby, setActiveHobby } from '../actions/HobbyActions';
// import HobbyList from '../components/Home/HobbyList';

// HomePage.propTypes = {

// };

// const randomNumber = () => {
//     return 1000 + Math.trunc(Math.random()*9000);
// }

// function HomePage(props){
//     //useSelector is the replacement for mapStateToProps to use state in redux store (can use in functions only)
//     const hobbyList = useSelector(state => state.hobby.list);//get from root reducer
//     const activeId = useSelector(state => state.hobby.activeId);//get from root reducer

//     const dispatch = useDispatch();

//     console.log(hobbyList)
//     console.log(activeId)
//     const handleAddHobbyClick = ()=>{
//         const newId = randomNumber()
//         //Random a hobby object: id + title
//         const newHobby ={
//             id: newId,
//             title: `Hobby ${newId}`,
//         }

//         //Dispatch action to add a new state to redux store
//         const action = addNewHobby(newHobby);
//         dispatch(action);
//     }

//     const handleHobbyClick=(hobby)=>{
//         const action = setActiveHobby(hobby);
//         dispatch(action);
//     }

//     return(
//         <div className="home-page">
//             <h1>Redux Hook</h1>
//             <button onClick={handleAddHobbyClick}>Random hobby</button>
//             <HobbyList
//                 hobbyList={hobbyList}
//                 activeId={activeId}
//                 onHobbyClick={handleHobbyClick}
//             />
//         </div>
//     )
// }
// export default HomePage;

import React, { Component } from "react";
import { addNewHobby, setActiveHobby } from "../actions/HobbyActions";
import HobbyList from "../components/Home/HobbyList";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import autoBind from "react-autobind";

class HomePage extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  //   randomNumber = () => (1000 + Math.trunc(Math.random() * 9000)
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
