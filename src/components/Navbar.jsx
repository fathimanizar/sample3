import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <header style={{backgroundColor:"blue"}}>
            <Link to={'/'} style={{color:"white",paddingRight:"10px"}}>HOME</Link>
            <Link to={'/map1'} style={{color:"white",paddingRight:"10px"}}>MAP1</Link>
            <Link to={'/map2'} style={{color:"white"}}>MAP2</Link>
       </header>
    </div>
  )
}

export default Navbar