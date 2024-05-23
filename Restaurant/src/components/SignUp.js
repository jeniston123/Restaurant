import React, { useState } from 'react'
import axios from 'axios'
export default function Signup() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handleSubmit=(e)=>{
        // e.preventDefault()
        const formData={
            username:name,
            email:email,
            password:password
        }
        //npm i axios
        axios.post('http://localhost:3001/users/post',formData)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
  return (
    <div className='signup-container'>
        <form onSubmit={handleSubmit} className='signup-box'>
      <label>Username</label><br></br>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/><br></br>
      <label>Email</label><br></br>
      <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br></br>
      <label>Password</label><br></br>
      <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br></br>
      <button type='submit'>Signup</button>
      </form>
    </div>
  )
}
