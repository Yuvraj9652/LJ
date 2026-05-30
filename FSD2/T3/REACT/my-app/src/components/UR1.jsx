import {useReducer} from "react";

function UseReducer()
{
    const reducer = (state,action)=>
    {
        if(action.type==='increment')
        {
            return state+1
        }
        if(action.type==='decrement')
        {
            return state-1
        }
        if(action.type==='reset')
        {
            return 0
        }
    }
    const[state,dispatch] = useReducer(reducer,0)
    
    return(
        <>
            <h1>{state}</h1>
            <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </>
    )
}
export default UseReducer