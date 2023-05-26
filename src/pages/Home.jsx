import React from 'react'
import { Link } from "react-router-dom";
import Slider from '../components/Slider';

function Home() {
  return (
    <div className=' max-w-[1920px] h-[1000px] bgg mx-auto '>
         <div className=' bg-inherit max-w-[1300px] h-[138px] mx-auto flex items-center justify-between '>

        <div className=' flex flex-col items-center justify-center w-[156px] h-[138px] bg-[#FD0054] '>
            <img src="/ggIcon.png" alt="" />
            <a href="#" className=' text-white text-2xl '>ANGEL FIT</a>
        </div>

        <Link to="/Home" className=' text-white  '>HOME</Link>
        <a href="" className=' text-white '>PAGES</a>
        <a href="" className=' text-white '>PORTFOLIO</a>
        <a href="" className=' text-white '>CLASSES</a>
        <a href="" className=' text-white '>BLOG</a>
        <a href="" className=' text-white '>CONTACTS</a>

        <div className=' flex justify-center items-center '>
            <a href="#" className=' text-white  '>GET STARTED FOR FREE</a>
        </div>

        </div>
        <div className=' max-w-[1300px] max-h-[200px] mx-auto '>
            <Slider />
        </div>
        <div className=' max-w-[1300px]  mx-auto mt-[130vh] '>
            <div className=' flex space-x-24 items-center '>
                <div className=' flex flex-col space-y-8 '>
                  <span className=' text-4xl text-[#FD0054] '>- WHO WE ARE</span>
                  <p className=' uppercase text-5xl w-[480px] '>want to trust us? get know with us</p>
                  <p className=' text-gray-400 w-[480px] '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, totam? Iste voluptas, qui asperiores nobis repudiandae error accusantium ullam provident! accusantium ullam provident! </p>
                  <div>
                    <div className=' flex space-x-4 items-center '> 
                      <div className=' w-[20px] h-[20px] rounded-full  border bg-[#FD0054] '></div> 
                      <p className=' text-gray-400 '>Here goes some</p> 
                    </div> 
                    <div className=' flex space-x-4 items-center '> 
                      <div className=' w-[20px] h-[20px] rounded-full  border bg-[#FD0054] '></div> 
                      <p className=' text-gray-400 '>Here goes some</p> 
                    </div>
                  </div>
                  <div className=' flex items-center space-x-6 '>
                    <button className=' w-[140px] h-[60px] border border-[#FD0054] text-[#FD0054] uppercase ' >call us</button>
                    <button className=' w-[170px] h-[60px] border border-[#FD0054] text-[#FD0054] uppercase '>learn more</button>
                  </div>
                </div>

                <div>
                  <img src="/box.jpeg" alt="" className=' w-[635px] h-[635px] bg-cover absolute ' />
                  <div>
                  <img src="/run.jpeg" alt="" className=' w-[635px] h-[635px] bg-cover mt-10 ml-10 ' />
                  </div>
                </div>

            </div>
        </div>
        <div className=' bg-[#2D2226] h-[900px] mt-[10vh] '>
          <div className=' max-w-[1300px]  mx-auto flex flex-col justify-center items-center '>
            <span className=' uppercase text-[#FD0054] text-2xl mt-[10vh] '> - Our classes </span>
            <p className=' text-white w-[450px] text-4xl mt-[5vh] text-center uppercase '> our best fitness body  building clasess </p>
            <div className=' flex space-x-10 mt-[5vh] '>
              <div  className=' w-[300px] h-[200px] '>
                <img src="/runr.jpeg" alt=""  className=' w-[400px] h-[400px] hhh ' />
                <div className=' p-10 space-y-6 -mt-[30vh] text-white '>
                  <span>GYM</span>
                  <p className=' uppercase '>psycho traning</p>
                  <hr className=' border border-red-300 ' />
                  <div className=' flex items-center justify-between '>
                    <span className=' uppercase '>more info</span>
                    <a href="#">
                      <img src="/redrIcon.png" alt="" className='' />
                    </a>
                  </div>
                </div>
              </div>
              <div  className=' w-[300px] h-[200px] '>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLuftVtcw5vKSoQmiWPTl2p3Pr1sbbwzU6IA&usqp=CAU" alt=""  className=' w-[400px] h-[400px] hhh ' />
                <div className=' p-10 space-y-6 -mt-[30vh] text-white '>
                  <span>GYM</span>
                  <p className=' uppercase '>psycho traning</p>
                  <hr className=' border border-red-300 ' />
                  <div className=' flex items-center justify-between '>
                    <span className=' uppercase '>more info</span>
                    <a href="#">
                      <img src="/redrIcon.png" alt="" className='' />
                    </a>
                  </div>
                </div>
              </div>
              <div  className=' w-[300px] h-[200px] '>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeuJq4vwodqOlXrsDu0mwGglX99nSAoRw5Ww&usqp=CAU" alt=""  className=' w-[400px] h-[400px] hhh ' />
                <div className=' p-10 space-y-6 -mt-[30vh] text-white '>
                  <span>GYM</span>
                  <p className=' uppercase '>psycho traning</p>
                  <hr className=' border border-red-300 ' />
                  <div className=' flex items-center justify-between '>
                    <span className=' uppercase '>more info</span>
                    <a href="#">
                      <img src="/redrIcon.png" alt="" className='' />
                    </a>
                  </div>
                </div>
              </div>
              <div  className=' w-[300px] h-[200px] '>
                <img src="https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fe65ce502-de3c-11ea-982b-b376168bb3e7.jpg?crop=7753%2C5169%2C0%2C0" alt=""  className=' w-[400px] h-[400px] hhh ' />
                <div className=' p-10 space-y-6 -mt-[30vh] text-white '>
                  <span>GYM</span>
                  <p className=' uppercase '>psycho traning</p>
                  <hr className=' border border-red-300 ' />
                  <div className=' flex items-center justify-between '>
                    <span className=' uppercase '>more info</span>
                    <a href="#">
                      <img src="/redrIcon.png" alt="" className='' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=' max-w-[1300px] mx-auto '>
          <div></div>
        </div>
    </div>
  )
}

export default Home