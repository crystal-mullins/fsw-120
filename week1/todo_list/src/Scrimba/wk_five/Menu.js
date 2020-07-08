import React from "react"
// import {withToggler} from "./withToggler
import Toggler from "./Toggler"

function Menu(props) {
    return (
        <Toggler render={(on, toggle) => (
        <div>
            <button onClick={toggle}>{on ? "Hide" : "Show"} Menu </button>
            <nav style={{display: on ? "block" : "none"}}>
                <h6>Signed in as CoderCrystalDev</h6>
                <p><a>Your Profile</a></p>
                <p><a>Your Repositories</a></p>
                <p><a>Your Stars</a></p>
                <p><a>Your Gists</a></p>
            </nav>
        </div>
    )}/>
)

}

export default Menu