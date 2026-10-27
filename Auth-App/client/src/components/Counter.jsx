import { useState, useEffect } from "react";
import "./Counter.css"
const Counter = () => {
    const [count,setCount]=useState(0);
    const [message,setMessage]=useState("")

    useEffect(()=>{
    
        setMessage("Updated count =$(count)")
    },[])

    function increment(){
        setCount(count+1)
        console.log("count=",count+1)
        
    }
     function decrement(){
        setCount(count-1)
         console.log("count=",count-1)
        
    }

  return (
    <div  >
      <h1>Counter App</h1>
      <button className="btn" onClick={decrement}>-</button>
      <div className="id1">{count}</div>
      <button className="btn" onClick={increment}>+</button>
   <h2>{message}</h2>
   

    </div>
   
  

   
  )
}

export default Counter