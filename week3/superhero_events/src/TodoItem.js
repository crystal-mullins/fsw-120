import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
            <p>{props.item.name}</p>
            <p>{props.item.show}</p>
            <p>{props.item.catchPhrase}</p>
            <img src={props.item.imageName}></img>
        </div>
    )
}

export default TodoItem