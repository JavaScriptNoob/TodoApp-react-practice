import React from 'react'
import TodoListItem from './todo-list-item'
import './todo-list-js.css';
const TodoList = ({ todos }) => {
    // const items = ['Learn React ', 'Build Awesome App'];
    const elements = todos.map((item) =>  {
        return (
            <li key= {item.id} className="list-group-item">
            <TodoListItem label ={item.label}
            important ={item.important}/>
            </li>
         );
    });
    
    
    
    return (
        <ul className = "list-group todo-list">
        
       { elements }
        </ul>   
    );
    }
export default TodoList;