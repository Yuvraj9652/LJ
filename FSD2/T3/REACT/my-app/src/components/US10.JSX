import React, { useState } from 'react';

function US10() {

    const [data, setData] = useState({
        fname: '',
        lname: ''
    });

    const [submittedData, setSubmittedData] = useState({
        fname: '',
        lname: ''
    });

    const hc = (e) => {
        e.preventDefault();

        setSubmittedData(data);

        alert(`Full Name: ${data.fname} ${data.lname}`);
    };

    return (
        <>
            <form onSubmit={hc}>

                <input type="text" name="fname" placeholder="First Name" value={data.fname}
                    onChange={(e) =>
                        setData({ ...data, fname: e.target.value })
                    }/>

                <input type="text"
                    name="lname"
                    placeholder="Last Name"
                    value={data.lname}
                    onChange={(e) =>
                        setData({ ...data, lname: e.target.value })
                    }
                />

                <input type="submit" value="Submit" />

            </form>

            <h1>
                Full Name: {submittedData.fname} {submittedData.lname}
            </h1>
        </>
    );
}

export default US10;