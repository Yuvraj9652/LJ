import {useReducer} from "react";

function UR3(){
    const[state,dispatch] = useReducer(fun,5)
    function fun(state,action){
        return state+action
    }
    return(
        <>
            <h1>{state}</h1>
            <button onClick={()=>dispatch(5)}>Increment</button>
        </>
    )
}
export default UR3