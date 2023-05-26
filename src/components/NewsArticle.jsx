import React from 'react'

function NewsArticle() {
  return (
    <div>
        <div>
            <span className=' text-[32px] text-[#FD0054] font-bold '>- NEWS & ARTICLES</span>
            <div className=' flex items-center justify-between space-x-[400px] '>
                <p className=' text-6xl font-bold '>OUR RECENT ARTICLES</p>
                <button className=' border border-[#FD0054] text-[#FD0054] w-[190px] h-[58px] ' >MORE ARTICLES</button>
            </div>
        </div>
        <div className=' flex justify-between mt-[10vh] '>
            <div className=' w-[414px] h-[575px] '>
                <div className=' w-[414px] h-[281px] bg-[#FD0054] '></div>
                <div className=' flex flex-col p-5 border border-[#FD0054] space-y-6 '>
                    <span className=' text-[28px] font-bold '>HOW HIKING HELPS BODY!</span>
                    <p className=' text-lg font-normal text-[#909090] '>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore …</p>
                    <div className=' flex items-center justify-between '>
                        <p className=' text-[20px] text-[#909090] '>FEB 12, 2020</p>
                        <a href="" className=' flex items-center gap-4 text-[#FD0054] ' >MORE INFO <img src="/redrIcon.png" alt="" /> </a>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className=' w-[414px] h-[575px] '>
                <div className=' w-[414px] h-[281px] bg-[#FD0054] '></div>
                <div className=' flex flex-col p-5 border border-[#FD0054] space-y-6 '>
                    <span className=' text-[28px] font-bold '>HOW HIKING HELPS BODY!</span>
                    <p className=' text-lg font-normal text-[#909090] '>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore …</p>
                    <div className=' flex items-center justify-between '>
                        <p className=' text-[20px] text-[#909090] '>FEB 12, 2020</p>
                        <a href="" className=' flex items-center gap-4 text-[#FD0054] ' >MORE INFO <img src="/redrIcon.png" alt="" /> </a>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className=' w-[414px] h-[575px] '>
                <div className=' w-[414px] h-[281px] bg-[#FD0054] '></div>
                <div className=' flex flex-col p-5 border border-[#FD0054] space-y-6 '>
                    <span className=' text-[28px] font-bold '>HOW HIKING HELPS BODY!</span>
                    <p className=' text-lg font-normal text-[#909090] '>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore …</p>
                    <div className=' flex items-center justify-between '>
                        <p className=' text-[20px] text-[#909090] '>FEB 12, 2020</p>
                        <a href="" className=' flex items-center gap-4 text-[#FD0054] ' >MORE INFO <img src="/redrIcon.png" alt="" /> </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsArticle