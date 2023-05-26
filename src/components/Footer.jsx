import React from 'react'

function Footer() {
  return (
      <div className=' max-w-[1920px] bg-[#2D2226] mx-auto '>
        <div className=' max-w-[1300px] mx-auto '>
            <div className=' flex items-start justify-between pt-[10vh] '>
               <div className=' flex flex-col items-start space-y-6 '>
                  <a href="#" className=' flex items-center justify-center gap-3 text-[32px] font-bold text-[#FD0054] '> <img src="/shtIcon.png" alt="" /> ANGEL FIT </a>
                <div>
                  <p className=' w-[300px] text-lg text-[#E2E2E2] '>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea</p>
                </div>
               </div>
               <div className=' space-y-8 '>
                  <a href="#" className=' text-[26px] font-bold text-[#FD0054] '>INFORMATION</a>
                  <div className=' space-y-4 '>
                  <ul>
                      <li>
                        <a href="#" className=' text-white text-[18px] font-bold '>ABOUT US</a>
                      </li>
                  </ul>
                  <ul>
                      <li>
                        <a href="#" className=' text-white text-[18px] font-bold '>CUSTOMERS</a>
                      </li>
                  </ul>
                  <ul>
                      <li>
                        <a href="#" className=' text-white text-[18px] font-bold '>CLIENTS</a>
                      </li>
                  </ul>
                  <ul>
                      <li>
                        <a href="#" className=' text-white text-[18px] font-bold '>PORTFOLIO</a>
                      </li>
                  </ul>
                </div>
               </div>
               <div className=' space-y-8 '>
                  <a href="#" className=' text-[26px] font-bold text-[#FD0054] '>SERVICES</a>
                  <div className='  space-y-4 '>
                    <ul>
                        <li>
                          <a href="#" className=' text-white text-[18px] font-bold '>TRAINING AT HOME</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                          <a href="#" className=' text-white text-[18px] font-bold '>FITNESS FOR KIDS</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                          <a href="#" className=' text-white text-[18px] font-bold '>ONLINE COACH</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                          <a href="#" className=' text-white text-[18px] font-bold '>CHAMPIONS</a>
                        </li>
                    </ul>
                  </div>
               </div>
               <div className='space-y-8'>
                <a href="#" className=' text-[26px] font-bold text-[#FD0054] '>SUBSCRIBE TO NEWSLETTER</a>
                  <div className=''>
                    <form action="" className=' flex flex-col items-start space-y-5 '>
                      <input type='text' placeholder='EMAIL' className=' w-[300px] h-[50px] p-4 bg-[#544C4F] text-[#ffffff] ' />
                      <button className=' w-[160px] h-[60px] bg-[#FD0054] text-white '>SUBSCRIBE</button>
                    </form>
                  </div>
               </div>
            </div>
            <hr className=' bg-[#464646] mt-[5vh] ' />
            <div className=' flex justify-between items-center mt-[5vh] pb-[5vh] '>
              <div className=' text-white space-x-5 '>
                <a href="#">Copyright @ 2020 All Rights Reserved.</a>
                <a href="#">+614 434 333.</a>
                <a href="#">info@angelclub.com</a>
                <a href="#">Sydney, Australia</a>
              </div>
              <div className=' flex gap-6 '>
                <a href="#"><img src="/gfIcon.png" alt="" /></a>
                <a href="#"><img src="/giIcon.png" alt="" /></a>
                <a href="#"><img src="/ginIcon.png" alt="" /></a>
                <a href="#"><img src="/gtIcon.png" alt="" /></a>
                <a href="#"><img src="/gyIcon.png" alt="" /></a>
              </div>
            </div>
        </div>
      </div>
  )
}

export default Footer