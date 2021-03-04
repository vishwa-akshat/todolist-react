import React, { Component } from 'react'
import {v4 as uuidv4} from 'uuid';

import './NewTodoForm.css';

class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.state={todo:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.addItem({...this.state, id:uuidv4(), completed: false});
        this.setState({todo:''});
    }
    handleChange(e){
        this.setState({todo: e.target.value});
    }
    render() {
        return (
            <div>
                <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="todo">New Todo</label>
                    <input id="todo" type="text" value={this.state.todo} name="todo" onChange={this.handleChange}/>
                    <button>Add Item</button>
                </form>
            </div>
        )
    }
}

export default NewTodoForm;