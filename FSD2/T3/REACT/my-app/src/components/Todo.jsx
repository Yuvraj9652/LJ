import { useState } from "react";

function Todo(){
    const [task,setTask] = useState('');
    const [todoList,settodoLIST] = useState([]);
    const hs=()=>{
        if(task!=''){
            settodoLIST([...todoList,{id:Date.now(),name:task}])
            setTask('')
        }
    }
    const dt=(id)=>{
        settodoLIST(todoList.filter((task)=>task.id!==id))
    }
    return(
        <>
        <input value={task} onChange={(e)=>{setTask(e.target.value)}}/>
        <button onClick={hs}>Add</button>
        <br></br>
        {
            todoList.map((task)=>(
                <div key={task.id}>
                    <h3 style={{color:"red"}}>{task.name}<button onClick={()=>dt(task.id)}>Delete</button></h3>
                </div>
            ))
        }
        </>
    )
}
export default Todo;