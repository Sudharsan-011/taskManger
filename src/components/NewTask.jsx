import { useState } from "react";

export default  function NewTask({onAdd}){
    const[enteredTask,setEnteredTask]=useState("");
    const [error,setError]=useState("");
    
    function handleChange(event){
setEnteredTask(event.target.value);
setError("");
    }
          function handleClick (){
            if(!enteredTask.trim()){
                setError("Task Cannot Be Empty");
                return
            }
    
            onAdd(enteredTask);
        setEnteredTask("");

      }
    return(
        <div className="flex flex-col items-center gap-4">
            <input onChange={handleChange} type="text" className="w-66 px-2 py-1 rounded-md bg-stone-200"  required value={enteredTask}/>
            {error&&<p className="  text-red-500">{error}</p>}
            <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add task</button>
        </div>
    );
}