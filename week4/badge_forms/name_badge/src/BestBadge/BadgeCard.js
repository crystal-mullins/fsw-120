import React from 'react'



const BadgeCard = ({ index, firstName, lastName, phone, email, birthPlace, favFoods, textArea, handleDelete }) => {
    return(
        <div> 
            <h1 style={{backgroundColor:"grey"}}>Badge</h1>
        <div className="wrapper">


                <p>Name: {firstName} {lastName}</p>
                
                <p>Phone: {phone}</p>
                <p>email: {email}</p>
                <p>Birth Place: {birthPlace}</p>
                <p>Favorite Foods: {favFoods}</p>
                <p>About You: {textArea}</p>
                <button onClick={ () => handleDelete(index)} 
                > Delete User</button>
               
            
            
                
            
            
        </div>
        </div>
);

}



export default BadgeCard;