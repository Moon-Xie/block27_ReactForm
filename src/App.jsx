import './App.css'
import Authenitcate from './components/Authenticate'
import SignUpForm from './components/SignUpForm'
import React, { useState } from 'react'

function App() {
  const [token, setToken] = useState(null)
  return (
    <>
        <Authenitcate token={token} setToken={setToken}/>        
        <SignUpForm token={token} setToken={setToken}/>
    </>
  )
}

export default App
