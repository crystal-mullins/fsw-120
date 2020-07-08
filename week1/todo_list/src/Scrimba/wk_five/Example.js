import React from "react"

function Example(props) {
    return (
        <div>
            {props.render(true, 42, 10)}
        </div>
    )
}

export default Example