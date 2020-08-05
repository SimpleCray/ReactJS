import React, { Component } from 'react';
import TodoItem from './components/TodoItem';
import './App.css';
import checkall from '../src/image/checkall.svg'
class App extends Component {
  constructor(){
    super();
      this.state={
        newItem:'',
        toogle: false,
        todoItems:[
        {title: 'Go to work'},
        {title: 'Study ReactJS'},
        {title: 'Go to school'}
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onCheckAllClick = this.onCheckAllClick.bind(this);
  }
  onItemClick(item){
    return(event) =>{
      //console.log(item);
      const isComplete = item.isComplete;
      const {todoItems} =  this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        //create a clone of array
        todoItems:[
          ...todoItems.slice(0,index),//item behind clicked item
          {//clicked item
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index +1)//item after clicked item
        ]
      });
      //console.log(todoItems);
    };
  }
  onCheckAllClick(event){
    // const {todoItems} =  this.state;
    // console.log('before');
    // console.log(todoItems);
    const todoItems = [...this.state.todoItems]
    let toogle = !this.state.toogle
    for(let item of todoItems){
      item.isComplete = toogle ? true : false
    }
    this.setState({
      //create a clone of array with isComplete is true
      todoItems,
      toogle
    });
    console.log('after');
    console.log(this.state.todoItems);
  }
  onKeyUp(event){
    //console.log(event.keyCode);
    //console.log(event.target.value);
    let text = event.target.value;
    if (event.keyCode === 13){//13 is a keycode of enter key
      if (!text||!(text.trim())){
        alert("Please input valid text");
        return;
      }
      this.setState({
        todoItems:[
        ...this.state.todoItems,
        {title: text, isComplete: false}
        ],
        newItem:''
      })
    }
  }
  onChange(event){
    this.setState({
      newItem: event.target.value
    })
  }
  render(){
    if (this.state.todoItems.length>0){
      return (
        <div className="App">
          <div className="Header">
            <img className='checkall' src={checkall} onClick={this.onCheckAllClick}/>
            <input 
              type="text" 
              placeholder="Add new item"
              value= {this.state.newItem}
              onChange={this.onChange}
              onKeyUp={this.onKeyUp}/>
          </div>
          {
            this.state.todoItems.map((item, index)=> //Each child in a list should have a unique "key" prop
            <TodoItem key={index} 
            item={item} 
            onClick={this.onItemClick(item)}/>)
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
