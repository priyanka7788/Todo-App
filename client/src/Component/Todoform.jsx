import { useState } from "react";
 import {useDispatch} from "react-redux"
import { addNewTodo } from "../redux/actions/index1"
import "./header.css"
import React from "react";
const Todoform = () => {
  const [text, setState] = useState("");
  
  const dispatch = useDispatch();

  const onFormSubmit = (e) => { 
    e.preventDefault();
    dispatch(addNewTodo(text));
    
  };
  
  const onInputChange = (e) => {

    setState(e.target.value);

  };
  return (
    <form className="form" onSubmit={onFormSubmit} >
      <input
        placeholder="Enter your todo..."
        className="input"
        onChange={onInputChange}
      />
    </form>
  );
};

export default Todoform;
