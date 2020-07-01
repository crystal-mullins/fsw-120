import React from 'react'



const BadgeCard = ({ index, firstName, lastName, phone, email, birthPlace, favFoods, handleDelete}) => {

    return(
    <div className="user_list">

            <ol>
                <li>{firstName}</li>
                <li>{lastName}</li>
                <li>{phone}</li>
                <li>{email}</li>
                
                <button onClick={ () => handleDelete(index)}> Delete User</button>

            </ol>
    </div>

);

}



export default BadgeCard;