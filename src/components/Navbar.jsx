import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='flex flex-col sticky z-10 sm:flex-row justify-between content-center items-center  text-center bg-gradient-to-r from-[#8294C4] via-[#DBDFEA] to-[#D5B4B4]'>
        <div className='font-bold text-4xl p-3 text-[#E1FFB1] uppercase '>
            <span className='text-[#F7F5EB]'>Sukham</span> Resort
        </div>

        <div className='flex font-semibold font-serif'>
            
            <div className='m-3 text-xl '>
                <Link to={'/'}>
                Home
                </Link>
            </div>
            <div className='m-3 text-xl'>
                About Us
            </div>
            <div className='m-3 text-xl'>
                NearBY
            </div>
            <div className='m-3 text-xl'>
                <Link to="/Career">Career</Link>
            </div>
            <div className='m-3 text-xl'>
            <Link to="/Contact">Contact</Link>

            </div>
        </div>
    </div>
  )
}

export default Navbar