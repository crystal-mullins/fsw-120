import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"
// import { useAlert } from 'react-alert'
import A from "./Alert"






class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prevState => {


            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id){
                  return {
                    ...todo,
                    A
                    
                    
                  }
                  
                }
                {
                    todo.completed = !todo.completed //maybe the change you need is here. For what you mentioned before i think what you need here is a ternary statement. 
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}

export default App
