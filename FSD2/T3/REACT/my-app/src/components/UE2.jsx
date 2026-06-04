import {useState, useEffect} from "react";

function UE2(){
    const [stateA, setStateA] = useState(new Date());

    setInterval(() => {
        setStateA(new Date());
    }, 1000);

    useEffect(() => {
        alert("State has changed!");
    },[]);

    return(
        <>
        <h1>Time: {stateA.toLocaleTimeString()}</h1>
        <h2>Hours : {stateA.getHours()}</h2>
        <h2>Minutes : {stateA.getMinutes()}</h2>
        <h2>Seconds : {stateA.getSeconds()}</h2>
        </>
    );
}

export default UE2;