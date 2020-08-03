// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'






const TodoList = props => {

    return (
        <div className='list-and-complete-button'>
            {props.todos.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </div>
    )
}
export default TodoList