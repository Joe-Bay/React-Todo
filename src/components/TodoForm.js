import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            todoText: ''
        }
    }


handleChanges = event => {
    this.setState({
        todoText: event.target.value
    })
}

handleSubmit = event => {
    event.preventDefault()
    this.props.addItem(this.state.todoText)
    this.setState({ // this next part is to clear the text field after we submit
        todoText: ''
    })
}



render() {
    return (
        <form className="todo-form"onSubmit={this.handleSubmit}>
            <input 
            name='todo'
            placeholder='Add Todo'
            value={this.state.todoText}
            onChange={this.handleChanges}
            />
            <button>Add</button>
        </form>
    )
}
}

export default TodoForm