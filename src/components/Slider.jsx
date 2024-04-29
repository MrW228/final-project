import React from 'react'
import '../style/slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import gg from '../image/gg.svg'
import forbes from '../image/press logo.png'
import twologo from '../image/press logo (1).png'
import threelogo from '../image/press logo (2).png'

function Slider() {
  return ( 
    <div className='slider'>
      <Swiper slidesPerView={3} loop={true} spaceBetween={30} pagination={true} modules={[Pagination]} className="mySwiper" >
        <SwiperSlide>
          <img className='gg1' src={gg} alt="" />
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <img className='gg2' src={gg} alt="" />
          <img className='logo' src={forbes} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='gg1' src={gg} alt="" />
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <img className='gg2' src={gg} alt="" />
          <img className='logo' src={twologo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='gg1' src={gg} alt="" />
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <img className='gg2' src={gg} alt="" />
          <img className='logo' src={threelogo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='gg1' src={gg} alt="" />
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <img className='gg2' src={gg} alt="" />
          <img className='logo' src={twologo} alt="" />
        </SwiperSlide>



      </Swiper>
    </div>
  )
}

export default Slider

