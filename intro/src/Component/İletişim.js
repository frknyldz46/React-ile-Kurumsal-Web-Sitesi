import React, { Component } from 'react'
import './İletişim.css'
import { Col, Image, Row } from 'react-bootstrap'
import phone from './img/telephone.png'



export default class İletişim extends Component {
  render() {
    return (
      <div className='iletisimcontainer'>
        <Row>
          <Col>
            <div className='yazilarIletisim'>
              <h2 style={{ fontWeight: '600',wordWrap:'break-word' }}>Make an Appointment<br />
                to Visit Our Service
              </h2>
              <p style={{ marginTop: 20, fontSize: 18 ,wordWrap:'break-word'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                Sed aliquam auctor sapien, at sagittis elit auctor nec.<br />
                Maecenas eu luctus tellus.<br />Integer ullamcorper tristique lectus,
                id tincidunt metus tristique in
              </p>
              <div className='iletisimkutusu'>
                <div style={{ backgroundColor: 'white', width: 'fit-content', height: 'fit-content', padding: 20, borderRadius: '100%' }}>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_31_9)">
                      <path d="M8.05176 1.2013C7.67578 0.293093 6.68457 -0.190305 5.7373 0.0684838L1.44043 1.24036C0.59082 1.47473 0 2.24622 0 3.12512C0 15.2052 9.79492 25.0001 21.875 25.0001C22.7539 25.0001 23.5254 24.4093 23.7598 23.5597L24.9316 19.2628C25.1904 18.3156 24.707 17.3243 23.7988 16.9484L19.1113 14.9952C18.3154 14.6632 17.3926 14.8927 16.8506 15.5616L14.8779 17.9689C11.4404 16.3429 8.65723 13.5597 7.03125 10.1222L9.43848 8.15442C10.1074 7.60755 10.3369 6.68958 10.0049 5.89368L8.05176 1.20618V1.2013Z" fill="#17AA9A" />
                    </g>
                    <defs>
                      <clipPath id="clip0_31_9">
                        <rect width="25" height="25" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className='iletisimbilgileri'>
                  <p> Call us Now</p>
                  <p style={{ fontWeight: 'bold' }}> +90 555 555 55 55</p>
                </div>
              </div>


              <div className='iletisimkutusu'>
                <div style={{ backgroundColor: 'white', width: 'fit-content', height: 'fit-content', padding: 20, borderRadius: '100%' }}>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_31_24)">
                      <path d="M3.125 10.1611L12.5 3.21777L21.875 10.1611V12.4756L14.1357 18.2129C13.6621 18.5645 13.0908 18.75 12.5 18.75C11.9092 18.75 11.3379 18.5596 10.8643 18.2129L3.125 12.4756V10.1611ZM12.5 0C11.9092 0 11.3379 0.19043 10.8643 0.537109L1.26465 7.65137C0.46875 8.24219 0 9.16992 0 10.1611V21.875C0 23.5986 1.40137 25 3.125 25H21.875C23.5986 25 25 23.5986 25 21.875V10.1611C25 9.16992 24.5312 8.2373 23.7354 7.65137L14.1357 0.537109C13.6621 0.19043 13.0908 0 12.5 0Z" fill="#17AA9A" />
                    </g>
                    <defs>
                      <clipPath id="clip0_31_24">
                        <rect width="25" height="25" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <div className='iletisimbilgileri'>
                  <p> Mail us Now</p>
                  <p style={{ fontWeight: 'bold' }}>name@domain.com</p>
                </div>
              </div>
            </div>


          </Col>
          <Col>
            <div className='form'>
              
                <div class="input-wrapper">
                  <input type="text" placeholder="Name" name="text" class="input" />
                </div>

                <div class="input-wrapper">
                  <input type="text" placeholder="Email" name="text" class="input" />
                </div>

                <div class="input-wrapper">
                  <input type="text" placeholder="Phone Number" name="text" class="input" />
                </div>

                <div class="input-wrappermessage">
                  <input type="text" placeholder="Message" name="text" class="input" />
                </div>

                <div>
                  <button className='formbutton'>Send</button>
                </div>
              

            </div>


          </Col>
        </Row>
      </div>
    )
  }
}
