import React,{useState} from 'react'
import './todo.css'
import { AiFillRest, AiFillEdit } from "react-icons/ai";
import { useDispatch } from 'react-redux'

import { toggleTodo,updateTodo , deleteTodo} from '../redux/actions/index1';
const Todo = ({ todo }) => {
  const [editing, setEditing]= useState(false)
  const [text, setText]= useState(todo.data)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditing(prevState => !prevState)
    
    dispatch(updateTodo(todo._id, text))
    
  }
  
  
  return (
    <li
      className="todo"
      onClick={(e) => {
        e.preventDefault();
        dispatch(toggleTodo(todo._id));
      }}
      style={{
        textDecoration: todo.done ? "line-through" : "",
        color: todo.done ? "green" : "#309",
      }}
    >
      <span style={{ display: editing ? "none" : "" }}>{todo.data}</span>
      <form style={{ display: editing ? "inline" : "none" }} onSubmit={handleSubmit}>
        <input type={"text"} value={text} onChange={ e=> setText(e.target.value)} className='edit-todo' />
      </form>

      <span className="icon" onClick={()=>dispatch(deleteTodo(todo._id))}>
        <AiFillRest />
      </span>
      <span
        className="icon"
        onClick={() => setEditing((prevState) => !prevState)}
      >
        <AiFillEdit />
      </span>
    </li>
  );
}

export default Todo
