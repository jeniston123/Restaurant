import React from 'react'
import { NavLink } from 'react-router-dom'
import './Program.css'
export default function Navbar() {
  return (
    <nav className='nav-container'>
      <ul className='nav-main'>
     <NavLink className='nav-content' to='/'>Home</NavLink>
     <NavLink className='nav-content' to='/menu'>Menu</NavLink>
     <NavLink className='nav-content'  to='/signup'>Signup</NavLink>
     <NavLink className='nav-content' to='/login'>Login</NavLink>
      </ul>
    </nav>
  )
}
