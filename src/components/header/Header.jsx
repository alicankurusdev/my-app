import "./Header.css"
import React from 'react'

const Header = () => {
    const imgStyle ={
        fontSize:"2rem",
        textAlign:"center",
        width:"fit-content",
        margin:"2rem auto"
    }
  return (
   
    <div>
        <h1 style={imgStyle}>Header</h1>
    </div>
  )
}

export default Header