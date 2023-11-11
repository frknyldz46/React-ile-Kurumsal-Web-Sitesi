import React, { Component } from 'react'
import './hizmetlerAnaSayfa.css'
import tungsten from './windows.png'
import design from './design.png'
import notes from './notes.png'
import mobildesign from './mobile-development.png'
import monitor from './monitor.png'
import webdesign from './web-design.png'
import coding from './coding.png'



import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';




// import required modules
import { Pagination, FreeMode, Autoplay } from 'swiper/modules';

export default class HizmetlerAnaSayfa extends Component {




  render() {

    return (



      <div className='containerswiper'>


        <div className='servicesbaslik'>

          <h1 style={{ color: '#64c6bb', fontWeight: 'bold' }}>Our Services</h1>
        </div>


        <Swiper
          
          speed={1000}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,


          }}

          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
          style={{ height: 'fit-content' }}


          breakpoints={{


            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1600: {
              slidesPerView: 4,
              spaceBetween: 60,
            },
          }}


        >

          <SwiperSlide >
            <div className='swipericerik'>
              <img style={{ width: 80, height: 80 }} src={coding} />
              <h3 style={{ color: '#17aa9a' }}>LOREM IPSUM</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.<br />
                Aliquam in hendrerit urna. Pellentesque sit amet sapien.</p>
              <button className='swiperbutton'>Read More</button>
            </div>
          </SwiperSlide>
          <SwiperSlide><div className='swipericerik'>
            <img style={{ width: 80, height: 80 }} src={coding} />
            <h3 style={{ color: '#17aa9a' }}>LOREM IPSUM</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.<br />
              Aliquam in hendrerit urna. Pellentesque sit amet sapien.</p>
            <button className='swiperbutton'>Read More</button>
          </div></SwiperSlide>
          <SwiperSlide><div className='swipericerik'>
            <img style={{ width: 80, height: 80 }} src={coding} />
            <h3 style={{ color: '#17aa9a' }}>LOREM IPSUM</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.<br />
              Aliquam in hendrerit urna. Pellentesque sit amet sapien.</p>
            <button className='swiperbutton'>Read More</button>
          </div></SwiperSlide>
          <SwiperSlide><div className='swipericerik'>
            <img style={{ width: 80, height: 80 }} src={coding} />
            <h3 style={{ color: '#17aa9a' }}>LOREM IPSUM</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.<br />
              Aliquam in hendrerit urna. Pellentesque sit amet sapien.</p>
            <button className='swiperbutton'>Read More</button>
          </div></SwiperSlide>

        </Swiper>


      </div >


    )
  }
}
