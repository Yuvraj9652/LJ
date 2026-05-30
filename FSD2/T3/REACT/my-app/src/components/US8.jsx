import React, { useState } from 'react'


function US8() {
    const [fname,setFname] = useState('');
    const [lname,setLname] = useState('');
    const handleFnameChange = (e) => {
        setFname(e.target.value);
    }
    const handleLnameChange = (e) => {
        setLname(e.target.value);
    }
    return (
        <>
        <input type="text" name="fname" value={fname} onChange={handleFnameChange} />
        <input type="text" name="lname" value={lname} onChange={handleLnameChange} />
        <h1>Full Name: {fname} {lname}</h1>
        </>
    );
}

export default US8;