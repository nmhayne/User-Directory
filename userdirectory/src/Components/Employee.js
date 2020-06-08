import React from 'react';


function Employee(props) { 
    return(
        <div>
            <img src={props.image} alt="employee photo"/>
            <h1>{props.name}</h1>
            <h1>{props.email}</h1>
            <h1>{props.phone}</h1>    
            <h1>{props.birth}</h1>
        
        </div>
        )
    }
    
    export default Employee;
    