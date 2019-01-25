import React from 'react';
import ReactDOM from 'react-dom';
import SearchPanel from './components/search-panel';
import Hedquart from './components/app-header';
import TodoList from './components/todo-list-js';

const App = ()=>{
    
    const todoData = [
{label:'drink cofee', important: false,id:1},
{label:'Make some noise', important: true,id:2},
{label:'Have a lunch', important: false,id:3},

    ];
    return (
    <div>
        
        <Hedquart/>
        <SearchPanel/>
       <TodoList todos={todoData}/>
    </div>)
}

ReactDOM.render(<App/>,document.getElementById('root'));
