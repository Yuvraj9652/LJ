import {useState} from 'react';

function US1() {
  const [count, setCount] = useState(0);
const inc = () => {
    if(count<10){
        setCount(count + 1);
    }
}
const dec = () =>{
    if(count>0){
        setCount(count-1);
    }
}
  return (
    <>
        <h1>Counter: {count}</h1>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
    </>
  );
}

export default US1; 