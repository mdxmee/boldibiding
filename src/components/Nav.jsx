import React from 'react'
import { Link } from "react-router-dom";
import Home from '../pages/Home';

function Nav() {
  return (
    <div className='bg-[#2B2024] max-w-[1300px] h-[138px] mx-auto flex items-center justify-between '>

        <div className=' flex flex-col items-center justify-center w-[156px] h-[138px] bg-[#FD0054] '>
            <img src="/ggIcon.png" alt="" />
            <a href="#" className=' text-white text-2xl '>ANGEL FIT</a>
        </div>

        <Link to="/Home" className=' text-white '>HOME</Link>
        <a href="" className=' text-white '>PAGES</a>
        <a href="" className=' text-white '>PORTFOLIO</a>
        <a href="" className=' text-white '>CLASSES</a>
        <a href="" className=' text-white '>BLOG</a>
        <a href="" className=' text-white '>CONTACTS</a>

        <div className=' flex justify-center items-center h-[138px] bg-[#FD0054] w-[347px] '>
            <a href="#" className=' text-white text-2xl '>GET STARTED FOR FREE</a>
        </div>

    </div>
  )
}

export default Nav