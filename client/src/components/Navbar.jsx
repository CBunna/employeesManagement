import React from 'react';
import {
    Link
  } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='max-w-5xl mx-auto text-center py-2 border-b'>
        <div className='flex justify-between items-center'>
             <span className='font-bold text-3xl'>Dr.JONH</span>
             <div className='flex gap-4'>
                <Link to={'/'}><span>Our Doctor</span></Link> 
                <Link to={'/admin'}><span>Admin</span></Link> 
             </div>
        </div>
    </div>
  )
}

export default Navbar