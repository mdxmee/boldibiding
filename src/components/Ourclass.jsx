import React from 'react'
import Calendar from './Calendar'
import CardSwiper from './CardSwiper'
import NewsArticle from './NewsArticle'

function Ourclass() {
  return (
    <div className=' max-w-[1300px] mx-auto flex flex-col items-center mt-[10vh] space-y-6 '>
        <p className=' text-4xl text-[#FD0054] font-bold '>- OUR CLASSES</p>
        <p className=' text-[60px] font-bold w-[700px] uppercase text-center '>Sed fringilla, quam consectetur ultrices </p>
        <div className=' flex space-x-10 '>
            <div className=' flex flex-col w-[300px] h-[444px] border p-8  '>
                <div>
                    <img src="/runIcon.png" alt="" />
                </div>
                <div className=' flex flex-col mt-[16vh] '>
                    <span className=' text-[#928D8F] text-xl font-bold'>GYM</span>
                    <p className=' text-[#2B2024] text-[28px] font-bold uppercase '>Morbi sodales</p>
                    <hr className=' mt-5 ' />
                </div>
                <div className=' flex items-center justify-between mt-10 '>
                    <span className=' text-xl font-bold text-[#2B2024] '>MORE INFO</span>
                    <a href="">
                        <img src="/rIcon.png" alt="" />
                    </a>
                </div>
            </div>
            {/*  */}
            <div className=' flex flex-col w-[300px] h-[444px] border p-8  '>
                <div>
                    <img src="/runIcon.png" alt="" />
                </div>
                <div className=' flex flex-col mt-[16vh] '>
                    <span className=' text-[#928D8F] text-xl font-bold'>GYM</span>
                    <p className=' text-[#2B2024] text-[28px] font-bold uppercase '>Morbi sodales</p>
                    <hr className=' mt-5 ' />
                </div>
                <div className=' flex items-center justify-between mt-10 '>
                    <span className=' text-xl font-bold text-[#2B2024] '>MORE INFO</span>
                    <a href="">
                        <img src="/rIcon.png" alt="" />
                    </a>
                </div>
            </div>
            {/*  */}
            <div className=' flex flex-col w-[300px] h-[444px] border p-8  '>
                <div>
                    <img src="/runIcon.png" alt="" />
                </div>
                <div className=' flex flex-col mt-[16vh] '>
                    <span className=' text-[#928D8F] text-xl font-bold'>GYM</span>
                    <p className=' text-[#2B2024] text-[28px] font-bold uppercase '>Morbi sodales</p>
                    <hr className=' mt-5 ' />
                </div>
                <div className=' flex items-center justify-between mt-10 '>
                    <span className=' text-xl font-bold text-[#2B2024] '>MORE INFO</span>
                    <a href="">
                        <img src="/rIcon.png" alt="" />
                    </a>
                </div>
            </div>
            {/*  */}
            <div className=' flex flex-col w-[300px] h-[444px] border p-8  '>
                <div>
                    <img src="/runIcon.png" alt="" />
                </div>
                <div className=' flex flex-col mt-[16vh] '>
                    <span className=' text-[#928D8F] text-xl font-bold'>GYM</span>
                    <p className=' text-[#2B2024] text-[28px] font-bold uppercase '>Morbi sodales</p>
                    <hr className=' mt-5 ' />
                </div>
                <div className=' flex items-center justify-between mt-10 '>
                    <span className=' text-xl font-bold text-[#2B2024] '>MORE INFO</span>
                    <a href="">
                        <img src="/rIcon.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
        <p className=' text-4xl text-[#FD0054] font-bold '>- TIME TABLE</p>
        <p className=' text-[60px] font-bold uppercase text-center '>PROFESSIONAL WEEKLY SCHEDULE</p>
        <Calendar />
        <p className=' text-4xl text-[#FD0054] font-bold '>- COACHES</p>
        <p className=' text-[60px] w-[800px] font-bold uppercase text-center '>BUILD YOUR BODY WITH OUR BEST TRAINERS</p>
        <p className=' text-2xl text-[#909090] w-[701px] font-normal text-center '>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
        <CardSwiper />
        <div className=' flex items-center justify-center space-x-20 '>
            <div className=' flex flex-col items-center space-y-5 justify-center '>
                <img src="/smileIcon.png" alt="" />
                <span className=' text-6xl font-bold w-[96px] '>437</span>
            </div>
            <div className=' flex flex-col items-center justify-center space-y-5 '>
                <img src="/rrIcon.png" alt="" />
                <span className=' text-6xl font-bold w-[96px] '>235</span>
            </div>
            <div className=' flex flex-col items-center justify-center space-y-5 '>
                <img src="/personIcon.png" alt="" />
                <span className=' text-6xl font-bold w-[96px] '>44</span>
            </div>
            <div className=' flex flex-col items-center justify-center space-y-5 '>
                <img src="/shIcon.png" alt="" />
                <span className=' text-6xl font-bold w-[96px] '>745</span>
            </div>
        </div>
        <NewsArticle />
    </div>
  )
}

export default Ourclass