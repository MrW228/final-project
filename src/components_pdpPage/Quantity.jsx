import React from 'react'
import '../style_pdpPage/quantity.css'
import star from '../image/photo_2024-04-18_17-10-51.jpg'
import face from '../image/icon-1.png'
import pint from '../image/icon-2.png'
import X from '../image/icon-3.png'
import { NavLink } from 'react-router-dom'
import black from '../image/black-currant 1.png'
import earl from '../image/earl gray.png'
import pear from '../image/pear 1.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import bottle2 from '../image/product scroll section.png'


import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';


function Quantity() {
    return (
        <div className='quantity'>
            <div className="wrapp3">
                <div className="left2">
                    <div className="sectn1">
                        <h3 className='newh3'>NOn-ALCOHOLIK DRINK</h3>
                        <h2>Medium - bodied</h2>
                        <h4>Light and easy to sip</h4>
                        <img className='star' src={star} alt="" />
                        <p>Made with natural birch, Strawberry and Apricot, an earthy and fruity taste. <br />
                            <br />

                            ・100% Natural ingredients <br />
                            ・Low Calories <br />
                            ・Perfect for every occassion <br /></p>
                        <h5>Share on</h5>
                        <img className='logos logo1' src={face} alt="" />
                        <img className='logos logo2' src={pint} alt="" />
                        <img className='logos logo3' src={X} alt="" />
                        <NavLink to="/SecondPage"><a href="#!">Shop the can</a></NavLink>

                    </div>
                </div>
                <div className="center">
                    <>
                        <Swiper loop={true} pagination={true} navigation={true} modules={[Pagination, Navigation]} className="mySwiper2">
                            <SwiperSlide className='swiperrr'><img className='btl2' src={bottle2} alt="" /></SwiperSlide>
                            <SwiperSlide className='swiperrr'><img className='btl2' src={bottle2} alt="" /></SwiperSlide>
                            <SwiperSlide className='swiperrr'><img className='btl2' src={bottle2} alt="" /></SwiperSlide>

                        </Swiper>
                    </>
                </div>
                <div className="right2">
                    <div className="sectn2">
                        <h1>$35.59</h1>
                        <h5>adaptogenic Ingredients</h5>
                        <ul>
                            <li className='li1'><img src={black} alt="" />Strawberry</li>
                            <li className='li2'><img src={earl} alt="" />Birch</li>
                            <li className='li3'><img src={pear} alt="" />Apricot</li>
                        </ul>
                        <div className="vibori">
                            <h3>Quantity</h3>
                            <h4>Complimentary domestic shipping on 2+ bottles.</h4>
                            <ul className='ul2'>
                                <li className='lies lie1'>1</li>
                                <li className='lies lie2'>2</li>
                                <li className='lies lie3'>3</li>
                                <li className='lies lie4'>6</li>
                                <li className='lies lie5'>12</li>
                            </ul>

                        </div>
                        <div className="radios">
                            <input type="radio" name="1" id="" /><h3>$35.59   One time purcahse     </h3>
                            <input type="radio" name="1" id="" /><h2>$30.00   Subscription (15% off)</h2>
                        </div>
                        <div className="btndiv">
                            <h3>Free domestic shipping over $50</h3>
                            <button className='btn3'>Add to bag </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quantity
