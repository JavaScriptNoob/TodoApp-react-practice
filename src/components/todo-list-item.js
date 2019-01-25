import React from 'react';
import './todo-list-item.css';
const TodoListItem = ({label, important = false}) => {
    const liStyle = {
        color:important ? 'tomato': 'green'
    };
    return ( <span style={liStyle} 
            className="todo-list-item">{label}
            </span>)
}
export default TodoListItem;