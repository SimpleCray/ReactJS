import React,{Component} from 'react';
import TrafficLight from './components/TrafficLight';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <TrafficLight/>
      </div>
    );
  }
}
export default App;
