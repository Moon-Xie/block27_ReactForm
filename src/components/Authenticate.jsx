import { use, useState } from "react"

export default function Authenitcate({token}) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null)
    async function handleClick() {
        try {
            console.log(token)
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
            })
            const result = await response.json()
            setSuccessMessage(result.message)
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <>
            <h2>Authenitcate</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Authenitcate Token</button>
        </>
    )
}