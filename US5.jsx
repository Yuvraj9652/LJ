import {useState} from 'react';

function US5(){
    const [a,setA] = useState("Show")
    const [b,setB] = useState('');

    const sh=()=>{
        if(a=="Show"){
            setA("Hide")
            setB('Note:  ');
        }
        else{
            setA("Show")
            setB(" ")
        }
    }
    return(
        <>
            <button onClick={sh}>{a}</button>{b}
        </>
    )
}
export default US5