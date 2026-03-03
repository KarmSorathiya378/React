import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , letcounter] = useState(10);

  const addvalue = () => {
    console.log("Button Clicked");
     if(counter < 20){
    letcounter(counter + 1);
     }
  }
  const subvalue = () => {
    console.log("Button Clicked");
    if(counter > 0){
    letcounter(counter - 1);
    }
  }
  

  return (
    <>
      
      <h1>React With CAC</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick = {addvalue}>Add Value</button>
      <br/>
      <button onClick = {subvalue}>Subtract Value</button>


    </>
  )
}

export default App
