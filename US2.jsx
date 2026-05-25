import {useState} from 'react';

function US2() {
  const [style,setStyle] = useState("tomato");

const cc=()=>{
    if(style == 'tomato'){
        setStyle('cyan');
    }
    else {
        setStyle('tomato');
    }
}
  return (
    <>
        <h1 style={{backgroundColor:style}}>Hello</h1>
        <button onClick={cc}>Change Color</button>
    </>
  );
}

export default US2; 