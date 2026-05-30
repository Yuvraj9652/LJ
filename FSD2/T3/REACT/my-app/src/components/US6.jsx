
// Add three buttons “Change Text”, “Change Color”, “Hide/Show”.


// By clicking on “Change Color” button change color of text to “blue” and vice versa. This color change should be performed while double clicking on the button.

// Initially button text should be “Hide”. While clicking on it the button text should be changed to “Show” and text “React Js Hooks” will not be shown.


import React from 'react';
import {useState} from 'react';

export default function US6() {
    const [text, setText] = useState("LJ University");
    const [style,setStyle] = useState("red");
    
    const cc=()=>{
        if(style == 'red'){
            setStyle('blue');
        }
        else {
            setStyle('red');
        }
    }
    const ct = () => {
        if(text == 'LJ University'){
            setText('Welcome students');
        }
        else {
            setText('LJ University');
        }
    }
    return (
      <>
        <h1 style={{color:style}}>{text}</h1>
        <h2 style={{color:style}}>React Js Hooks</h2>
        <button onClick={ct}>Change Text</button>
        {/* <button onClick={c}>Hide/Show</button> */}
        <button onDoubleClick={cc}>Change Color</button>
      </>
    );
  }
