// import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement = React.createElement(
  'a',
  { href:'https://google.com', target: '_blank'},
  "Don't Ignore Me"
)
createRoot(document.getElementById('root')).render(
   
  <App />
 
)
