import ProgressBar from "./components/ProgressBar"

import "./App.css";
import { useState,useEffect } from "react";
import CircularProgressBar from "./components/CircularProgressBar";

const App = () => {
  const [value,setValue] = useState(0);
  const [success,setSuccess] = useState(false);

  useEffect(()=>{
    const timer =  setInterval(()=>{
      setValue(val=> {
        if(val >= 100) return 100;
        return val + 1
      })
    },100)
    return ()=> clearInterval(timer);
  },[]);
 
  return (
    <div className="app">
      <span>Progress-Bar</span>
      <ProgressBar 
      value={value} 
      onComplete = {()=> setSuccess(true)}
      />
      <span>{success ? "Complete!" : "Loading..."}</span>
      <div>
        <CircularProgressBar 
          value={value} 
          onComplete = {()=> setSuccess(true)}
        />
      </div>
    </div>
  )
}

export default App