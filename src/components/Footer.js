import React from 'react';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <div>
      <div className='mt-56 bg-[#fdd9e0] p-4 w-100'>
        <a href="#navbar"><img src={Logo} alt="logo" className='m-auto' /></a> 
      </div>
    </div>
  )
}

export default Footer
