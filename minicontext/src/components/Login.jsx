
import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
            e.preventDefault()
            setUser({username, password})

    }
    return (
        <div className="p-5 m-5">
            <h2 className="text-center p-2 m-2 bg-red-700">Login</h2>
        <input className="px-2 mx-2" type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)} 
         placeholder="username" />
         {"     "}

        <input type="text"
        className="px-2 mx-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)} placeholder="password" />
        <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}


export default Login;