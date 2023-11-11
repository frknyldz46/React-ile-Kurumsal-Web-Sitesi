import React, { Component } from 'react'
import img1 from './img/carousel.1.jpg'
import img2 from './img/carousel.2.jpg'
import './CarouselSlider.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';

export default class CarouselSlider extends Component {
    render() {
        return (
            <div style={{ height: '600px' }}>
                <Swiper
                    direction={'vertical'}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper  myslider"
                >
                    <SwiperSlide className='swipercontainer1'>
                        <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>

                            <div className='slidericerik'>
                                <h2 style={{ fontWeight: '700', fontSize: 47 }}>We provide best</h2>
                                <h1 style={{ fontWeight: '700', fontSize: 48 }}>Web Development</h1>
                                <p style={{ fontWeight: '500', fontSize: 16, marginTop: 23 }}>Lorem ipsum dolor sit amet consectetur sit amet consectetur</p>
                                <button className='sliderbutton'>Lorem</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide  className='swipercontainer2'>
                        <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>

                            <div className='slidericerik'>
                                <h2 style={{ fontWeight: '700', fontSize: 47 }}>We provide best</h2>
                                <h1 style={{ fontWeight: '700', fontSize: 48 }}>Web Development</h1>
                                <p style={{ fontWeight: '500', fontSize: 16, marginTop: 23 }}>Lorem ipsum dolor sit amet consectetur sit amet consectetur</p>
                                <button className='sliderbutton'>Lorem</button>
                            </div>
                        </div></SwiperSlide>

                </Swiper>
            </div>
        )
    }
}