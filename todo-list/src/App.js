import React, { Component } from 'react';
import TodoItem from './components/TodoItem';
class App extends Component {
  constructor(){
    super();
    this.todoItems =[
      {title: 'Go to work', isComplete:true},
      {title: 'Study ReactJS'},
      {title: 'Go to school'}
    ];
  }
  render(){
    if (this.todoItems.length>0){
      return (
        <div className="App">
          {
            this.todoItems.map((item, index)=> 
            <TodoItem key={index} item={item}/>)
          }
        </div>
      );
    }else{
      return(
        <div className="App">Nothing to do</div>
      );
    }
  }
}

export default App;
