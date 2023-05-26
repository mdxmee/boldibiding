import React from 'react'
import Nav from './Nav'
import Center from './Center'
import Pell from './Pell'
import Ourclass from './Ourclass'
import Footer from './Footer'

function Back() {
  return (
    <div className=' max-w-[1920px] max-h-[1100px] bg-[#AB0139] mx-auto '>
        <div className=' h-20 bg-[#4B1B2B] max-w-[1300px] mx-auto flex items-center justify-around '>
            <div className=' flex items-center gap-3 '>
                <img src="/gIcon.png" alt="" />
                    <a href="#" className=' text-white text-2xl '> <span className=' opacity-50 '>Address :</span> Sydney, Australia</a>
                <img src="/pIcon.png" alt="" />
                <a href="#" className=' text-white text-2xl '> <span className=' opacity-50 '>Call :</span> +614 434 333</a>
                <img src="/mIcon.png" alt="" />
                <a href="#" className=' text-white text-2xl '> <span className=' opacity-50 '>Email :</span> info@angelclub.com</a>
            </div>
            <div className=' flex items-center gap-2 '>
                <a href="#" target=''>
                    <img src="/fIcon.png" alt="" />
                </a>
                <a href="#" target=''>
                    <img src="iIcon.png" alt="" />
                </a>
               <a href="#">
                    <img src="/inIcon.png" alt="" />
               </a>
                <a href="#" target=''>
                    <img src="/tIcon.png" alt="" />
                </a>
                <a href="#" target=''>
                    <img src="/yIcon.png" alt="" />
                </a>
            </div>
        </div>
        <Nav />
        <Center />
        <div className=' h-[100px] '></div>
        <Pell />
        <div className=' max-w-[1200px] h-[35px] bg-[#DBD9DA] mx-auto rounded-t-[100%] rounded-b-[100%] mt-10 '></div>
        <Ourclass />
        <Footer />
    </div>
  )
}

export default Back