import { use, useState } from "react";

export default function SignUpForm({token,setToken}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
                method: "POST",
                body: JSON.stringify(setUsername(username), setPassword(password))
            })
            const result = await response.json();
            console.log(result)
            setToken(result.token)
            setUsername("")
            setPassword("")
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <>
            <h2>Sign Up</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    Username: 
                    <input type="text" name="username" value={username} 
                        onChange={(e) => {setUsername(e.target.value)}}
                    />
                </label><br/>
                <label htmlFor="password">
                    Password:
                    <input type="text" name="password" value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                    />
                </label><br/>
                <button type="submit">Submit Form</button>
            </form>
        </>
    )

}