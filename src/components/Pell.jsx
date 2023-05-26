import React from 'react'

function Pell() {
  return (
    <div className='bg-[#2B2024] max-w-[1300px] h-[239px] mx-auto flex items-center justify-around '>
        <p className=' text-[48px] text-white w-[400px] '>Pellentesque turpis porttitor <span className=' text-[24px] text-[#FD0054] '>CALCULATE BMI</span></p>
       <div className=' flex flex-col  text-white'>
            <div className=' flex gap-2 '>
                <input type="radio" name='IMPERIAL' />
                <p>IMPERIAL</p>
                <input type="radio" name='IMPERIAL' />
                <p>METRIC</p>
            </div>

            <div className=' flex gap-5 mt-5 '>
                <input type="text" className=' bg-[#544C4F] w-[150px] h-[52px] p-2 text-white ' placeholder='FIT' />
                <input type="text" className=' bg-[#544C4F] w-[150px] h-[52px] p-2 text-white ' placeholder='IN'  />
                <input type="text" className=' bg-[#544C4F] w-[210px] h-[52px] p-2 text-white ' placeholder='IN'   />
                <button className=' bg-[#FD0054] flex items-center justify-center gap-2 w-[210px] h-[52px] text-white text-[24px] font-bold '>CALCULATE <img src="/metoIcon.png" alt="" /> </button>
            </div>
            <div className=' mt-5 flex max-w-[440px] justify-between '>
                <p className='text-[24px] font-bold'>HEIGHT</p>
                <p className='text-[24px] font-bold'>WEIGHT</p>
            </div>
       </div>
    </div>
  )
}

export default Pell