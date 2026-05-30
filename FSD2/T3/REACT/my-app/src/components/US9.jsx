import React,{useState} from 'react';
function US9(){
    const [data,setData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({...data,[name]:value});
    }

    return(
        <>
        <input type="text" name="fname" value={data.fname} onChange={handleChange} />
        <input type="text" name="lname" value={data.lname} onChange={handleChange} />
        <h1>Full Name: {data.fname} {data.lname}</h1>
        </>
    );
}

export default US9;