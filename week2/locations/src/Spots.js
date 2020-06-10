import React from "react"
import PropTypes from "prop-types"

function Spot(props) {
    const styles = {
        backgroundColor: props.cardColor,
        height: 250,
        width: 400
        
        
    }
    
    // title: Spots.title,
    //     subtitle: Spots.subtitle,
    //     information: Spots.information 

    
    // Spots.propInfo = {
    //         title: Spots.title,
    //         subtitle: Spots.subtitle,
    //         information: Spots.information 
    // }

    Spot.defaultProps = {
        cardColor: "blue",
       
    }
        return (
            <div style={styles}>
                <h1>{ props.place } </h1>
                <h1>{ props.price } </h1>
                <h1>{ props.timeToGo }</h1>

            </div>
        

    )
    
}
Spot.propTypes = {
    cardColor: PropTypes.oneOf(["red", "blue", "pink", "green"]),
    height: PropTypes.number,
    width: PropTypes.number
}


export default Spot
