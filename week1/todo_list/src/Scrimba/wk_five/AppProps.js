import React from "react"
import Example from "./Example"

function AppProps() {
    return (
        <div>
            <Example render={
                function(bool, number1, number2) {
                    return (
                        <div>
                            <h1>{number1}</h1>
                            <h1>{number2}</h1>
                            <h1>{bool ? "true" : "false"}</h1>
                        </div>
                    )
                }
            }/>
        </div>
    )
}

export default AppProps