import React, { useState } from 'react'
import './Navbar.css'

function Navbar(props) {

  return (
    <nav>
      <h1 className='Title' style={{color: props.theme ? 'black' : 'whitesmoke'}}>Quizz App</h1>
      
      {/* To toggle between dark theme and lgiht theme */}
      <input type="checkbox" class="theme-checkbox" onClick={props.onThemeChange}></input>
    </nav>
  )
}

export default Navbar


