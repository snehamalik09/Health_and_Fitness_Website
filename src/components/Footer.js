import React from 'react';
import Logo from '../assets/images/logo.jpg';

const Footer = () => {
  return (
    <div>
      <div className='mt-32 lg:mt-56 bg-[#fdd9e0] p-4 w-100'>
        <a href="#navbar"><img src={Logo} alt="logo" className='m-auto w-16 h-16 bg-[#fdd9e0] ' /></a> 
      </div>
    </div>
  )
}

export default Footer
