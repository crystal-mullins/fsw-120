import React from 'react'



const BadgeCard = ({ index, firstName, lastName, phone, email, birthPlace, favFoods, handleDelete}) => {
    return(
        <div >

            
                <h1>{firstName}</h1>
                <h1>{lastName}</h1>
                <h1>{phone}</h1>
                <h1>{email}</h1>
                <h1>{birthPlace}</h1>
                <h1>{favFoods}</h1>
                <button onClick={ () => handleDelete(index)}> Delete User</button>
               
            
            
                
            
            
        </div>

);

}



export default BadgeCard;