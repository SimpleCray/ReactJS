import React from 'react';
import { connect } from 'react-redux';
import '../style/SearchBar.css'
import { bindActionCreators } from "redux";
import { fetchUserAction } from '../action/fetchUser';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
    // Can use arrow function instead of bind
    // this._onChange = this._onChange.bind(this);
    // this._onSubmit = this._onSubmit.bind(this);
  }

  _onChange = (event) => {
    const value = event.target.value;
    this.setState({
      username: value
    })
  }

  _onSubmit = (event) => {
    event.preventDefault();
    this.props.fetchUserAction(this.state.username)
  }

  render() {
    return (
      <div className="form-wrapper">
        <h1>Enter github username</h1>
        <form onSubmit={this._onSubmit}>
          <input className="input" type="text" placeholder="User name" onChange={this._onChange} disabled={this.props.loading} required />
          <input className="button" type="submit" value={this.props.loading ? "Searching..." : "Search"} disabled={this.props.loading} />
        </form>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    // Important: must get state from reducer declared in rootReducer
    loading: state.fetchUser.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUserAction: bindActionCreators(fetchUserAction, dispatch),
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);