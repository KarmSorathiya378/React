import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  
 let obj = {
    Name:"karm",
    IsB: true
  }
  return (

    <>
      <h1 className = 'bg-green-400 text-black rounded-xl p-4'>Hello EveryONe</h1>
      <Card username= "karm" btntext= "Visit Us" />
      <Card username= "ISBY" btntext= "Visit Us" /> 
    </>
  )
}

export default App
