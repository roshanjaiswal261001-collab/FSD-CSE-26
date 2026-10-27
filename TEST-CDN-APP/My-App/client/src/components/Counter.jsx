import { useState } from "react";
import "./Counter.css"

const Counter = () => {
  const [count,setCount]=useState(0);


    function increment(){
      setCount(count+1)
      console.log("count=",count)
      
    }
    function decrement(){
      setCount(count-1)
      console.log("dec",count)
        
    }
  return (
    <div>
      <h1>Counter App</h1>
      <button className="btn" onClick={decrement}>-</button>
      <div className="id1">{count}</div>
      <button className="btn" onClick={increment}>+</button>
    </div>
  )
}

export default Counter
