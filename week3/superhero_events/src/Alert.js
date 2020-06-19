import React from 'react'
import { useAlert } from 'react-alert'
// import todosData from "./todosData"
// import App from "./App"
// import TodoItem from "./TodoItem"
 
const A = (props) => {
  const alert = useAlert()
 
  return (
    <button
      onClick={() => {
        alert.show(props.item.catchPhrase)
      }}
    >
      Show Alert
    </button>
  )
}
 
export default A
