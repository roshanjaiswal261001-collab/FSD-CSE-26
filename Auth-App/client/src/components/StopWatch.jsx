import { useState,useEffect } from "react"
const StopWatch = () => {
    const [running,setRunning]=useState(false);
    const [timer,setTimer]=useState(0);
   function handleRunning(){
    setRunning(!running)
   }
   function handleReset(){
    setRunning(false);
    setTimer(0);
   }
   useEffect(()=>{
    let interval;
    if(!running) return;
    interval=setInterval(()=>{
        setTimer((pre)=>(pre)+1)
    },10)
    return ()=>clearInterval(interval); 
       },[running])
       const ms=Math.floor(timer%1000);
    const sec=Math.floor((timer%60000)/1000);
    const min=Math.floor(timer/60000);
    return (
    <div>
        <h1>Stopwatch App</h1>
        <div className="stopwatch">
    <div id="min">{String(min).padStart(2,"0")}:</div>
    <div id="sec">{String(sec).padStart(2,"0")}:</div>
    <div id="ms">{String(ms).padStart(3,"0")}:</div>
    <button className= "btn" onClick={handleRunning}>{running?"STOP":"START"}</button>
    <button className= "btn" onClick={handleReset}>RESET</button>     
    </div> 
    </div>
  )
}

export default StopWatch