import React from 'react'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function CardSwiper() {
  return (
    <>
        <Swiper className=' w-[1300px] '
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
        <SwiperSlide className=' space-y-6 '><div className=' w-[430px] h-[625px] bg-[#FD0054] '></div>
            <span className=' text-3xl font-bold '>JESIE PINKMAN</span>
            <p className=' text-[16px] font-normal text-[#909090] w-[270px] '>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</p>
        </SwiperSlide>
        <SwiperSlide><div className=' w-[430px] h-[625px] bg-[#fd0054e0] '></div><span className=' text-3xl font-bold '>JESIE PINKMAN</span>
            <p className=' text-[16px] font-normal text-[#909090] w-[270px] '>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</p></SwiperSlide>
        <SwiperSlide><div className=' w-[430px] h-[625px] bg-[#fd00d3] '></div><span className=' text-3xl font-bold '>JESIE PINKMAN</span>
            <p className=' text-[16px] font-normal text-[#909090] w-[270px] '>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</p></SwiperSlide>
        <SwiperSlide><div className=' w-[430px] h-[625px] bg-[#ba00fd] '></div><span className=' text-3xl font-bold '>JESIE PINKMAN</span>
            <p className=' text-[16px] font-normal text-[#909090] w-[270px] '>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</p></SwiperSlide>
    </Swiper>
    </>
  )
}

export default CardSwiper