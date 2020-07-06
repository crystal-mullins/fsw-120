import React from "react"
import {Link} from "react-router-dom"
import redtunnle from "./pawel-czerwinski-W3Jf1SNC8rA-unsplash.jpg"
function Header() {
    return (
        <header>
            <img src={redtunnle} width="100%"  alt=" "/>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </header>
    )
}

export default Header