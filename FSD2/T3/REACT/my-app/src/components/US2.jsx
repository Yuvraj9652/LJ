import {useState} from 'react';

function US2() {
  const [style,setStyle] = useState("tomato");
  const [tc,settc] = useState('blue')

const cc=()=>{
    if(style == 'tomato'){
        setStyle('cyan');
    }
    else {
        setStyle('tomato');
    }
}
const cl = () => {

  if(tc == 'blue'){
      settc("red")
    }
    else {
      settc("blue")
    }
}
  return (
    <>
        <h1 style={{backgroundColor:style}}>Hello</h1>
        <button onClick={cc}>Change Color</button>
        <h1 style={{ backgroundColor: style,color:tc }}>Hi</h1>
        <button onClick={cl}>click me</button>
    </>
  );
}

export default US2; 