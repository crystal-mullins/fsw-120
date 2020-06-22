import React from "react"

function TodoItem(props) {
    const handelChange= () => {
        alert(props.item.catchPhrase)
    }
    
    return (
        <div className="todo-item">
            {/* <input 
                // type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            /> */}
        
            <div onClick={handelChange}>

            <p>{props.item.name}</p>
            <p>{props.item.show}</p>
            
            <img src={props.item.imageName} alt=""></img>
            </div>
        </div>
    )
}

export default TodoItem