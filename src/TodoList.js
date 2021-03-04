import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state={tasks:[]};
        this.addItem=this.addItem.bind(this);
        this.update=this.update.bind(this);
        this.toggleCompletion=this.toggleCompletion.bind(this);
    }
    addItem(item){
        this.setState({tasks: [...this.state.tasks, item]});
    }
    removeItem(id){
        this.setState({tasks: this.state.tasks.filter(task=> task.id!==id)});
    }
    update(id, updatedTask){
        const updatedTodos = this.state.tasks.map(task=> {
            if(task.id===id){
                return {...task, todo:updatedTask}
            }
            return task;
        }) 
        this.setState({tasks: updatedTodos});

    }
    toggleCompletion(id){
        const updatedTodos = this.state.tasks.map(task=> {
            if(task.id===id){
                return {...task, completed:!task.completed}
            }
            return task;
        })
        this.setState({tasks: updatedTodos});
    }
    render() {
        return (
            <div>
                <h1>Todo List!</h1>
                <ul>
                {this.state.tasks.map(task=>(
                    <Todo 
                        id={task.id} 
                        key={task.id} 
                        completed={task.completed}
                        task={task.todo} 
                        remove={()=>this.removeItem(task.id)} 
                        update={this.update}
                        toggle={this.toggleCompletion}
                        />
                    )
                    )}
                </ul>
                <NewTodoForm addItem={this.addItem}/>
            </div>
        )
    }
}

export default TodoList;