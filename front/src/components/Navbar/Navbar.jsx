import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink to={"/"} className="nav-title" ><button >OnlyNotes</button></NavLink>
      <div className='nav-buttons'>
        <NavLink to={"/create-note"} className="nav-btn">Create note</NavLink>
        <NavLink to={"/archiveds"} className="nav-btn"><button  >Archived</button></NavLink> 
      </div>
    </div>
  )
}
