// import React, {Component} from "react"

// // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// // https://swapi.co/
// // https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

// class Fetch extends Component {
//     constructor() {
//         super()
//         this.state = {
//             character: {}
//         }
//     }
    
//     componentDidMount() {
//         fetch("https://swapi.co/api/people/1")
//             .then(response => response.json())
//             .then(data => {
//                 this.setState({
//                     character: data
//                 })
//             })
//     }
    
//     render() {
//         return (
//             <div>
//                 {this.state.character.name}
//             </div>
//         )
//     }
// }

// export default Fetch