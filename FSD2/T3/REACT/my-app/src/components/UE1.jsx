import { useState, useEffect } from "react";

function UE1() {
  const [stateA, setStateA] = useState(0);
  const [stateB, setStateB] = useState(0);
  const [stateC, setStateC] = useState(0);
  const SA=() =>{
    setStateA(stateA + 1);
  }
    const SB=() =>{
    setStateB(stateB + 1);
  }
  const SC=() =>{
    setStateC(stateC + 1);
  }

  useEffect(() => {
    alert("State has changed!");
    },[stateA, stateB]);

  return (
    <>
      <button onClick={SA}>
        Button A {stateA}
      </button>
      <button onClick={SB}>
        Button B {stateB}
      </button>
      <button onClick={SC}>
        Button C {stateC}
    </button>
    </>
  );
}

export default UE1;