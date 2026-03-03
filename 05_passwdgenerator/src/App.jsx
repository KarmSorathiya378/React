import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length,setlength] = useState(8)
  const [numallowed, setnumallowed] = useState(true)
  const [charallowed, setcharallowed] = useState(true)
  const [password, setpassword] = useState("")

  // useRef Hook
  const passwordref = useRef(null)

  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numallowed) str += "0123456789"
    if(charallowed) str += "~!@#$%^&*()_+`"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setpassword(pass)
    console.log(pass)

  } , [length, numallowed, charallowed,setpassword])

  const copypasstoclipboard = useCallback(() => {
    passwordref.current?.select()
    passwordref.current?.setSelectionRange(0,28 )
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordgenerator()
  },[length, numallowed,charallowed])
  return (
    <>
      <div className="w-full max-w-2xl mx-auto shadow-xl rounded-2xl px-8 py-10 my-16 text-white bg-gray-700">
        <h1 className="text-white text-center text-4xl font-bold mb-6">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-4 px-5 bg-white text-lg text-black'
          placeholder='password' 
          readOnly
          ref={passwordref}
          />
          <button 
          onClick={copypasstoclipboard}
          className='outline-none bg-blue-700 hover:bg-blue-800 active:scale-95 text-white px-3 py-0.5 rounded transition"
'>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2 text-white">
          <div className="flex items-center gap-x-1 ">
            <input 
            type="range"
            min={8}
            max={36}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setlength(e.target.value)}}
             />
            <label>Length :{length}</label> 
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked = {numallowed}
            id='numberinput'
            onChange={() => {
              setnumallowed((prev) => !prev); 
            }} />
            <label htmlFor='numberinput'> Numbers  </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked = {charallowed}
            id='characterinput'
            onChange={() => {
              setcharallowed((prev) => !prev); 
            }} /> 
            <label htmlFor='characterinput'> Characters </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
