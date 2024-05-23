import React, { useState } from 'react'
import axios from 'axios'
import {auth} from 'react'
export default function Login() {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[message,setMessage]=useState('')
    const handleLogin=(e)=>{
        e.preventDefault()
        axios.get(`http://localhost:3001/users/get/${email}`)
        .then(res=>{
            console.log(res)
            if(res.data[0]?.email){
             if(res.data[0]?.password === password){
                setMessage('')
                  alert('Login successfull')
                  auth.login(res.data[0]?.username)
             }
             else{
                setMessage("Incorrect password")
             }
            }
            else{
                setMessage('Email not found')
            }

        })
        .catch(err=>console.log(err))
    }
  return (
    <div className='login-container'>
     
      <form onSubmit={handleLogin} className='login-box'>
        <label>Email</label><br></br>
        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br></br>
        <label>Password</label><br></br>
        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br></br>
        <button type='submit'>Login</button>
      </form>
      {message}
    </div>
  )
}
