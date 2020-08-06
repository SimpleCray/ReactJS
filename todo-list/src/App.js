import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoItem from './components/TodoItem';
import './App.css';
import checkall from '../src/image/checkall.svg';
import uncheckall from '../src/image/uncheckall.png';


class App extends Component {
  constructor(){
    super();
      this.state={
        newItem:'',
        toggle: false,
        todoItems:[
        {title: 'Go to work', isComplete: false},
        {title: 'Study ReactJS', isComplete: false},
        {title: 'Go to school', isComplete: false}
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onCheckAllClick = this.onCheckAllClick.bind(this);
    this.onCompletedClick = this.onCompletedClick.bind(this);
    this.onIncompletedClick = this.onIncompletedClick.bind(this);
    this.onClearAllClick = this.onClearAllClick.bind(this);
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
    const {todoItems} = this.state;
    let toggle = !this.state.toggle
    for(let item of todoItems){
      item.isComplete = toggle ? true : false//if toggle is true then item.isComplete is true or opposite
    }
    this.setState({
      //create a clone of array with isComplete is true
      todoItems,
      toggle
    });
    //console.log('after');
    //console.log(this.state.todoItems);
  }
  onCompletedClick(event){
    const {todoItems} = this.state;
    let arr = [];
    for(let item of todoItems){
      if(item.isComplete === true){
        arr.push(item);
      }else{
        arr.push();
      }
      console.log(arr)
    }
    this.setState({
      todoItems: arr
    });
  }
  onIncompletedClick(event){
    const {todoItems} = this.state;
    let arr = [];
    for(let item of todoItems){
      if(item.isComplete === false){
        arr.push(item);
      }else{
        arr.push();
      }
      console.log(arr)
    }
    this.setState({
      todoItems: arr
    });
  }
  onClearAllClick(event){
    let arr = [];
    this.setState({
      todoItems: arr
    });
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
    const {todoItems} = this.state;
    let url = uncheckall;
    let count = 0;
    for (let item of todoItems){
      count = item.isComplete ? count+1 : count;
      url = count==3 ? checkall : uncheckall;
    }
    return (
      <div className="App">
        <div className="Header">
          <img className='checkall' src={url} onClick={this.onCheckAllClick}/>
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
        <div className="Footer">
          <button onClick={this.onCompletedClick}>Completed</button>
          <button onClick={this.onIncompletedClick}>Incompleted</button>
          <button onClick={this.onClearAllClick}>ClearAll</button>
        </div>
      </div>
    );
  }
}

TodoItem.propTypes={
  item: PropTypes.shape({
    isComplete: PropTypes.bool,
    title: PropTypes.string
  }),
  onClick: PropTypes.func
}

export default App;
