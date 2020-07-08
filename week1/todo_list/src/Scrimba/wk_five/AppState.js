import React, { useState } from "react"

function AppState() {
    const [answer] = useState("Yes")
    
    
    return (
        <div>
<h1>Is state important to know? {answer}</h1>
        </div>
    )
}

export default AppState
