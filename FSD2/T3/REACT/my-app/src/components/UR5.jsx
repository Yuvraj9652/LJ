// import React, { useState, useReducer } from "react";

// function Calculator() {
//   const [num1, setNum1] = useState("");
//   const [num2, setNum2] = useState("");

    
//     const reducer = (state, action) => {
//     const { num1, num2, type } = action;

//     switch (type) {
//         case "ADD":
//         return num1 + num2;

//         case "SUB":
//         return num1 - num2;

//         case "MUL":
//         return num1 * num2;

//         case "DIV":
//         return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";

//         case "RESET":
//             setNum1("");
//             setNum2("");
//         return 0;

//         default:
//         return state;
//     }
//     };
//   const [result, dispatch] = useReducer(reducer, 0);


//   return (
//     <div>
//       <h2>Calculator using useState & useReducer</h2>

//       <input
//         type="number"
//         placeholder="Enter First Number"
//         value={num1}
//         onChange={(e) => setNum1(Number(e.target.value))}
//       />

//       <br /><br />

//       <input
//         type="number"
//         placeholder="Enter Second Number"
//         value={num2}
//         onChange={(e) => setNum2(Number(e.target.value))}
//       />

//       <br /><br />

//       <button onClick={() => dispatch({ type: "ADD", num1, num2 })}>
//         Add
//       </button>

//       <button onClick={() => dispatch({ type: "SUB", num1, num2 })}>
//         Subtract
//       </button>

//       <button onClick={() => dispatch({ type: "MUL", num1, num2 })}>
//         Multiply
//       </button>

//       <button onClick={() => dispatch({ type: "DIV", num1, num2 })}>
//         Divide
//       </button>

//       <button onClick={() => dispatch({ type: "RESET" })}>
//         Reset
//       </button>

//       <h3>Result: {result}</h3>
//     </div>
//   );
// }

// export default Calculator;


import React, { useReducer } from "react";

// Reducer function
function reducer(state, action) {
  const num1 = Number(state.num1);
  const num2 = Number(state.num2);

  switch (action.type) {
    case "SET_NUM1":
      return { ...state, num1: action.value };
    case "SET_NUM2":
      return { ...state, num2: action.value };
    case "ADD":
      return { ...state, result: num1 + num2 };
    case "SUB":
      return { ...state, result: num1 - num2 };
    case "MUL":
      return { ...state, result: num1 * num2 };
    case "DIV":
      return {
        ...state,
        result: num2 !== 0 ? num1 / num2 : "Cannot divide by zero",
      };
    default:
      return state;
  }
}

function Calculator() {
  const [state, dispatch] = useReducer(reducer, { num1: "", num2: "",result: ""});

  return (
    <div style={{ padding: "20px" }}>
      <h2>Simple Calculator (useReducer)</h2>
      <input         type="number"  placeholder="Enter number 1"       value={state.num1}
        onChange={(e) => dispatch({ type: "SET_NUM1", value: e.target.value })}    />

      <input  type="number"  placeholder="Enter number 2"    value={state.num2}
        onChange={(e) => dispatch({ type: "SET_NUM2", value: e.target.value })}   />

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => dispatch({ type: "ADD" })}>Add</button>
        <button onClick={() => dispatch({ type: "SUB" })}>Subtract</button>
        <button onClick={() => dispatch({ type: "MUL" })}>Multiply</button>
        <button onClick={() => dispatch({ type: "DIV" })}>Divide</button>
      </div>

      <h3>Result: {state.result}</h3>
    </div>
  );
}
export default Calculator;