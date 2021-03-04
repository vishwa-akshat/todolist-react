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
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input type="text" name="task" value={this.state.task} onChange={this.handleChange}/>
                        <button>Save</button>
                    </form>
                </div>
            )
        }else{
            result= (
                <div>
                    <li onClick={this.handleToggle} className={this.props.completed ? "completed": ""}>{this.props.task}</li>
                    <button onClick={this.toggleForm}>Edit</button>
                    <button onClick={this.props.remove}>X</button>
                </div>
            )
        }
        return result;
    }
}

export default Todo;