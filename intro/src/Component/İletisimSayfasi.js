import React, { Component } from 'react'
import './İletisimSayfasi.css'
import Accordion from 'react-bootstrap/Accordion';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default class İletisimSayfasi extends Component {
    render() {
        return (
            <div>

                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11071.613852425133!2d38.42797651088648!3d38.340177234278606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4076383f2c4e3023%3A0xa79f14e675a69073!2sMalatya%20Teknokent!5e0!3m2!1str!2str!4v1697454082127!5m2!1str!2str"
                        width="100%" height="450"
                        allowfullscreen=""
                        loading="lazy" referrerpolicy="no-referrer-when-downgrade">

                    </iframe>
                </div>

                <div className='contact'>
                    <div style={{ textAlign: 'center' }}>
                        <h1 style={{ color: '#fe7a5b', fontSize: 36, fontWeight: '700' }}>Contact Us</h1>
                    </div>
                    <div className='contactboxs'>

                        <div className='boxcontact'>
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

                            <div className='boxinfo'>
                                <p> Call us Now</p>
                                <p style={{ fontWeight: 'bold' }}> +90 555 555 55 55</p>
                            </div>
                        </div>
                        <div className='boxcontact'>
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

                            <div className='boxinfo'>
                                <p> Mail us Now</p>
                                <p style={{ fontWeight: 'bold' }}>name@domain.com</p>
                            </div>
                        </div>
                        <div className='boxcontact'>
                            <div style={{ backgroundColor: 'white', width: 'fit-content', height: 'fit-content', padding: 20, borderRadius: '100%' }}>
                                <svg width="25" height="34" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_151_75)">
                                        <path d="M14.043 32.5C17.3828 28.3203 25 18.1901 25 12.5C25 5.59896 19.401 0 12.5 0C5.59896 0 0 5.59896 0 12.5C0 18.1901 7.61719 28.3203 10.957 32.5C11.7578 33.4961 13.2422 33.4961 14.043 32.5ZM12.5 8.33333C13.6051 8.33333 14.6649 8.77232 15.4463 9.55372C16.2277 10.3351 16.6667 11.3949 16.6667 12.5C16.6667 13.6051 16.2277 14.6649 15.4463 15.4463C14.6649 16.2277 13.6051 16.6667 12.5 16.6667C11.3949 16.6667 10.3351 16.2277 9.55372 15.4463C8.77232 14.6649 8.33333 13.6051 8.33333 12.5C8.33333 11.3949 8.77232 10.3351 9.55372 9.55372C10.3351 8.77232 11.3949 8.33333 12.5 8.33333Z" fill="#17AA9A" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_151_75">
                                            <rect width="25" height="33.3333" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>

                            <div className='boxinfo'>
                                <p> Come see us</p>
                                <p style={{ fontWeight: 'bold' }}>Malatya/Teknokent</p>
                            </div>
                        </div>


                    </div>

                </div>



                <div className='orsocial'>
                    <h1 style={{ color: '#fe7a5b', fontSize: 36, fontWeight: '700' }}>Or</h1>
                    <div style={{ marginTop: 35 }}>
                        <a href="#" className="me-4 text-reset ">
                            <FontAwesomeIcon style={{ color: 'black', width: 22, height: 25 }} icon={faFacebookF} />
                        </a>

                        <a href="#" className="me-4 text-reset">
                            <FontAwesomeIcon style={{ color: 'black', width: 22, height: 25 }} icon={faTwitter} />
                        </a>
                        <a href="#" className="me-4 text-reset">
                            <FontAwesomeIcon style={{ color: 'black', width: 22, height: 25 }} icon={faGoogle} />
                        </a>
                        <a href="#" className="me-4 text-reset">
                            <FontAwesomeIcon style={{ color: 'black', width: 22, height: 25 }} icon={faInstagram} />
                        </a>
                        <a href="#" className="me-4 text-reset">
                            <FontAwesomeIcon style={{ color: 'black', width: 22, height: 25 }} icon={faLinkedin} />
                        </a>
                        <a href="#" className="me-4 text-reset">
                            <FontAwesomeIcon style={{ color: 'black', width: 22, height: 25 }} icon={faGithub} />
                        </a>
                    </div>
                </div>

                <div className='accordion'>
                    <div style={{ textAlign: 'center' }}>
                        <h1 style={{ color: '#fe7a5b', fontSize: 36, fontWeight: '700', bottom: 0 }}>F.A.Q</h1>
                    </div>


                    <div style={{ top: 0 }}>

                        <Accordion defaultActiveKey="0" style={{ width: '100%' }} >
                            <Accordion.Item eventKey="0" style={{ backgroundColor: '#e8f6f4' }} >
                                <Accordion.Header >Lorem ipsum dolor sit amet, consectetur adipiscing elit</Accordion.Header>
                                <Accordion.Body style={{ backgroundColor: '#b7e5e0' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" style={{ backgroundColor: '#e8f6f4' }}>
                                <Accordion.Header>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Accordion.Header>
                                <Accordion.Body style={{ backgroundColor: '#b7e5e0' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" style={{ backgroundColor: '#e8f6f4' }}>
                                <Accordion.Header >Lorem ipsum dolor sit amet, consectetur adipiscing elit</Accordion.Header>
                                <Accordion.Body style={{ backgroundColor: '#b7e5e0' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3 " style={{ backgroundColor: '#e8f6f4' }}>
                                <Accordion.Header>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Accordion.Header>
                                <Accordion.Body style={{ backgroundColor: '#b7e5e0' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4" style={{ backgroundColor: '#e8f6f4' }}>
                                <Accordion.Header>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Accordion.Header>
                                <Accordion.Body style={{ backgroundColor: '#b7e5e0' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>


                    </div>

                </div>



            </div>
        )
    }
}
