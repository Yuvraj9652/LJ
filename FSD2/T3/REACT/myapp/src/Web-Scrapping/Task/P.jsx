import React from "react";

function P(props) {
    return(
        <>
        {
        props.info.map((pr) => {
            return(
                <div key={pr.id}>
                    <h2>Name:{pr.name}</h2>
                    <h2>Price:{pr.price}</h2>
                    <h2>Rating:{pr.rating}</h2>
                    <img src={pr.image} alt={pr.title} />
                </div>
            )
        })
        }
        </>
    )
}

export default P;