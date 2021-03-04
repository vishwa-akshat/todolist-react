import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    constructor(props){
        super(props);
        this.state={isEditable:false, task: this.props.task};
        this.handleChange= this.handleChange.bind(this);
        this.toggleForm= this.toggleForm.bind(this);
        this.handleUpdate= this.handleUpdate.bind(this);
        this.handleToggle= this.handleToggle.bind(this);
    }
    handleChange(e){
        this.setState({task: e.target.value});
    }
    toggleForm(){
        this.setState({isEditable: !this.state.isEditable})
    }
    handleUpdate(e){
        e.preventDefault();
        this.props.update(this.props.id, this.state.task);
        this.setState({isEditable:false})
    }
    handleToggle(e){
        this.props.toggle(this.props.id)
    }
    render() {
        let result;
        if(this.state.isEditable){
            result= (
                <div className="Todo">
                    <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
                        <input type="text" name="task" value={this.state.task} onChange={this.handleChange}/>
                        <button>Save</button>
                    </form>
                </div>
            )
        }else{
            result= (
                <div className="Todo">
                    <li onClick={this.handleToggle} className={this.props.completed ? "completed Todo-task": "Todo-task"}>{this.props.task}</li>
                    <div className="Todo-buttons">
                        <button onClick={this.toggleForm}><i className="fas fa-pen"/></button>
                        <button onClick={this.props.remove}><i className="fas fa-trash"/></button>
                    </div>
                </div>
            )
        }
        return result;
    }
}

export default Todo;