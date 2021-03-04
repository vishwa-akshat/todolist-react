import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component {
    render() {
        return (
            <div>
                TodoList
                <Todo/>
                <NewTodoForm/>
            </div>
        )
    }
}

export default TodoList;