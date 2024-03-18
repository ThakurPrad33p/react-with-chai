import { useState } from "react";

import Chai from "./chai"


function App() {


let [counter,setCounter] = useState(0);
let addValue =()=>{
  if(counter!=20){
    setCounter(counter+1);
  }
}
let reduceValue =()=>{
  if(counter!=0){
    setCounter(counter-1);
  }
}


  return (
    <>
    <center>
    <h1>Live Counter</h1>
    <button onClick={addValue}>Increase counter {counter}</button>
    <br/>
    <button onClick={reduceValue}>Reduce counter{counter}</button>
    </center>
    </>
  )
}

export default App
