import React, { Component } from 'react'
import {v4 as uuidv4} from 'uuid';

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
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.todo} name="todo" onChange={this.handleChange}/>
                    <button>Add Item</button>
                </form>
            </div>
        )
    }
}

export default NewTodoForm;