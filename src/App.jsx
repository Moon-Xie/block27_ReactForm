import './App.css'
import Authenticate from './components/Authenticate'
import SignUpForm from './components/SignUpForm'
import React, { useState } from 'react'

function App() {
  const [token, setToken] = useState(null)
  const [activeUser, setActiveUser] = useState('')
  return (
    <>
        <h1>React Form</h1>
        <SignUpForm setToken={setToken} setActiveUser={setActiveUser} />
        <Authenticate token={token} activeUser={activeUser} />        
    </>
  )
}

export default App
