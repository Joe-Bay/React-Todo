import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import "./components/Todo.css"


const initialTodo = [{}]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      todos: initialTodo,
    }
  }

  clearCompleted = () => {
    const newTodos = this.state.todos.filter(todo => !todo.completed)
    this.setState({ // filter to the completed ones
      todos: newTodos // setting state to become the new filtered array
    })
  }


  toggleItem = id => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          }
        }else {
          return item;
        }
      })
    })
  }
  addTodo = todoName => {
    const newTodo = {
      task: todoName,
      id: new Date(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    }) 
  }


  render() {
    return (
      <div className='App'>
        <div className="header">
          <h2>Todo List!</h2>
          <h3>Once you've added an item to the list just click the name of the item to mark it as completed and hit the Clear Complete button to clear the completed tasks</h3>
          <TodoForm addItem={this.addTodo} />
        </div>
        <TodoList toggleItem={this.toggleItem} todos={this.state.todos} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
