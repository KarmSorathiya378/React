import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './components/login'
import UsercontextProvider from './context/UsercontextProvider'
import Profile from './components/Profile'

function App() {
 

  return (
    <UsercontextProvider>
     <h1> React With ME </h1>
     <Login />
     <Profile />
    </UsercontextProvider>
  )
}

export default App
