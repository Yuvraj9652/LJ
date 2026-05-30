import React from "react";

function Props2(props){
    return(
        <>
        <ul>
            <li>Name:{props.name}</li>
            <li>Rollno:{props.rollno}</li>
            <li>Marks:{props.marks + 1}</li>
        </ul>
        </>
    )
}
export default Props2;