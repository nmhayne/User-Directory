import React from 'react';


function Employee(props) { 
    return(
        <div>
            {/* TABLE ROW */}
            {/* <tr> */}
                {/* TABLE DATA */}
                {/* <td>
                    <img src={props.image} alt="employee photo"/>
                </td>

                <td>
                    <h1>{props.name}</h1>
                </td>

                <td>
                    <h1>{props.email}</h1>
                </td>

                <td>
                    <h1>{props.phone}</h1>
                </td>

                <td>
                    <h1>{props.birth}</h1>
                </td>

            </tr> */}


                    <h1>{props.name}</h1>


        </div>
    )
}

export default Employee;
