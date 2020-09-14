import React, { useEffect, useState } from "react";
import axios from 'axios'

export default function TodoApp({ todos, addTodo, setTodos }) {
  const [text, setText] = useState("");
  
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos').then(res=>{
      console.log(res.data)
      setTodos(res.data)
    })
  }, [setTodos])
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => addTodo(text)}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}