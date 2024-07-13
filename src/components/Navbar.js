import React from 'react'
import Logo from '../assets/images/Logo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div id="navbar" className='w-[100%]'>
    <div className='w-[50%] flex items-center justify-around py-10 '>
    <div>
      <Link to="/"> <img src={Logo} alt="Logo" width="58" /> </Link>

    </div>
    <div className="text-lg flex flex-row gap-10">
      <Link to="/">Home</Link>
      <a href="#exercise">Exercises</a>
    </div>
    </div>
    </div>
  )
}



export default Navbar;