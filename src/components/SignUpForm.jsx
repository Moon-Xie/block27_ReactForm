import { useState } from "react";
import '/Users/moon/Documents/Coursework/block27/Block27_ReactForm/src/App.css'

export default function SignUpForm({setToken, setActiveUser}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault();
        if(username.length > 8 && password.length > 8){
            try {
                const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
                    method: "POST",
                    body: JSON.stringify({username, password})
                })
                const result = await response.json();
                console.log(result)
                setToken(result.token)
                setActiveUser(username)
                setUsername("")
                setPassword("")
            } catch (error) {
                setError(error.message)
            }
        } else {
            alert("Username and password need to be more than 8 characters!")
        }
    }

    return (
        <>
            <h2>Sign Up</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="username" >
                    Username: 
                    <input type="text" name="username" value={username} 
                        onChange={(e) => {setUsername(e.target.value)}}
                    />
                </label><br/>
                <label htmlFor="password" >
                    Password:
                    <input type="password" name="password" value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                    />
                </label><br/>
                <button type="submit">Submit Form</button>
            </form>
        </>
    )

}