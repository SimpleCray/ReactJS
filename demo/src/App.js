//-----CHILDREN-REF
/*
import React, { Component } from 'react';
import './App.css';
import Accordion from './components/Accordion';

class App extends Component {
  constructor(props){
    super(props);
    this.inputElement = React.createRef();
  }
  //react.createRef
  componentDidMount(){
    //debugger;
    this.inputElement.current.focus();
  }

  render(){
    return (
      <div className="App">
        <Accordion heading="Heading">
          Demo children lession
        </Accordion>
        <input type="text" ref={this.inputElement}></input>
      </div>
    );
  }
}

export default App;
*/



//-----LIFECYLES
import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showCounter: true
    }
  }

  componentDidUpdate(){
    console.log('App updated');
  }

  removeCounter(){
    this.setState({
      showCounter: false
    })
  }

  render(){
    console.log('App render');
    return (
      <div className="App">
        <br/>
        <button onClick={()=> this.removeCounter()}>Remove counter</button>
        {this.state.showCounter && <Counter/>/*Conditional rendering*/}
      </div>
    );
  }
}

export default App;
