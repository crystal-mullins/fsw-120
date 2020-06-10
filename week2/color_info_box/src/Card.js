import React from "react"
import PropTypes from "prop-types"

function ContactCard(props) {
    const styles = {
        backgroundColor: props.cardColor,
        height: 250,
        width: 400
        
        
    }
    
    // title: ContactCard.title,
    //     subtitle: ContactCard.subtitle,
    //     information: ContactCard.information 

    
    // ContactCard.propInfo = {
    //         title: ContactCard.title,
    //         subtitle: ContactCard.subtitle,
    //         information: ContactCard.information 
    // }

    ContactCard.defaultProps = {
        cardColor: "blue",
       
    }
        return (
            <div style={styles}>
                <h1>{ props.title } </h1>
                <h1>{ props.subtitle } </h1>
                <h1>{ props.description }</h1>

            </div>
        

    )
    
}
ContactCard.propTypes = {
    cardColor: PropTypes.oneOf(["red", "blue", "pink", "green"]).isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number
}


export default ContactCard
