import React , {useState, useContext} from "react";
import Usercontext from "../context/Usercontext";
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(Usercontext);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }
    return (
        <>
        <h2>Login</h2>
        <input type = "text"
         placeholder = "username"
         value = {username}
         onChange={(e) => setUsername(e.target.value)}  />
         {"  "}
        <input type = "password"
         value = {password}
         onChange={(e) => setPassword(e.target.value)}
         placeholder = "password" />
        <button onClick={handleSubmit}>Login</button>
        </>     
    )
}
  
export default Login;