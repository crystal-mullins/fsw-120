// import React from 'react';

// import './App.css';

// function App() {
//   return (
//     <div>
//       <input class="box1" type="checkbox" />
//     <p class="item1">Remodel house</p>

//     <input class="box2" type="checkbox" />
//     <p class="item2">Weed the garden</p>

//     <input class="box3" type="checkbox" />
//     <p class="item3">Build tiny home</p>

//     <input class="box4" type="checkbox" />
//     <p class="item4">Dig a pond</p>
    
  
  
  
//     </div>
//   )
// }

// export default App;

import React from "react"
import TodoItem from "./TodoItem"

function App() {
    return (
        <div className="todo-list">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}

export default App