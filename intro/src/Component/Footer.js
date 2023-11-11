import React from 'react';
import './Footer.css'
import phone from './img/phone-call.png'
import mail from './img/email.png'
import location from './img/pin.png'
import arrow from './img/right-arrow.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (

    <footer className="text-center text-lg-start text-muted" style={{ backgroundColor: '#64c6bb'}}>


      {/* Section: Links  */}

      <div className="container text-center text-md-start mt-5" style={{ backgroundColor: '#64c6bb', padding: 30,width:'90%'  }} >
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}



          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

            <div className='adrescontainer'>

              <h6 className="text-uppercase fw-bold mb-4" style={{ color: '#121415' }}>
                <i className="fas fa-gem me-3"></i>Address
              </h6>

              <div className='icerik1'>
                <img src={location} style={{ width: 20, height: 20 }} />
                <p style={{ color: '#121415', marginLeft: 10 }}>
                  Malatya Teknokent
                </p>
              </div>

              <div className='icerik1'>
                <img src={phone} style={{ width: 20, height: 20 }} />
                <p style={{ color: '#121415', marginLeft: 10 }}>
                  +90 555 555 55 55
                </p>
              </div>

              <div className='icerik1'>
                <img src={mail} style={{ width: 20, height: 20 }} />
                <p style={{ color: '#121415', marginLeft: 10 }}>
                  name@domain.com
                </p>
              </div>
            </div>
          </div>



          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

            <h6 className="text-uppercase fw-bold mb-4" style={{ color: '#121415' }}>
              Services
            </h6>

            <div className='icerik1'>
              <img src={arrow} style={{ width: 20, height: 20 }} />
              <p style={{ color: '#121415', marginLeft: 10 }}>
                Web Design
              </p>
            </div>

            <div className='icerik1'>
              <img src={arrow} style={{ width: 20, height: 20 }} />
              <p style={{ color: '#121415', marginLeft: 10 }}>
                Web Design
              </p>
            </div>

            <div className='icerik1'>
              <img src={arrow} style={{ width: 20, height: 20 }} />
              <p style={{ color: '#121415', marginLeft: 10 }}>
                Web Design
              </p>
            </div>


          </div>




          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

            <h6 className="text-uppercase fw-bold mb-4" style={{ color: '#121415' }}>
              Useful links
            </h6>

            <div className='icerik1'>
              <img src={arrow} style={{ width: 20, height: 20 }} />
              <p style={{ color: '#121415', marginLeft: 10 }}>
                <a href='#' className='ahref'>  Our Services </a>
              </p>
            </div>

            <div className='icerik1'>
              <img src={arrow} style={{ width: 20, height: 20 }} />
              <p style={{ color: '#121415', marginLeft: 10 }}>
                <a href='#' className='ahref'> About Us</a>
              </p>
            </div>

            <div className='icerik1'>
              <img src={arrow} style={{ width: 20, height: 20 }} />
              <p style={{ color: '#121415', marginLeft: 10 }}>
                <a href='#' className='ahref'>  Take Offer</a>
              </p>
            </div>

            <div className='icerik1'>
              <img src={arrow} style={{ width: 20, height: 20 }} />
              <p style={{ color: '#121415', marginLeft: 10 }}>
                <a href='#' className='ahref'>   Roadmap</a>
              </p>
            </div>

            <div className='icerik1'>
              <img src={arrow} style={{ width: 20, height: 20 }} />
              <p style={{ color: '#121415', marginLeft: 10 }}>
                <a href='#'className='ahref' > Team</a>
              </p>
            </div>

            <div className='icerik1'>
              <img src={arrow} style={{ width: 20, height: 20 }} />
              <p style={{ color: '#121415', marginLeft: 10 }}>
                <a href='#' className='ahref'>   Contact Us</a>
              </p>
            </div>

          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">



            <h6 className="text-uppercase fw-bold mb-4" style={{ color: '#121415' }}>Social Medias</h6>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div >
                <a href="#" className="me-4 text-reset ">
                  <FontAwesomeIcon style={{ color: 'black', width: 17, height: 17 }} icon={faFacebookF} />
                </a>

                <a href="#" className="me-4 text-reset">
                  <FontAwesomeIcon style={{ color: 'black', width: 17, height: 17 }} icon={faTwitter} />
                </a>
                <a href="#" className="me-4 text-reset">
                  <FontAwesomeIcon style={{ color: 'black', width: 17, height: 17 }} icon={faGoogle} />
                </a>
                <a href="#" className="me-4 text-reset">
                  <FontAwesomeIcon style={{ color: 'black', width: 17, height: 17 }} icon={faInstagram} />
                </a>
              </div>

              <div style={{ marginLeft: 35 }} >
                <a href="#" className="me-4 text-reset">
                  <FontAwesomeIcon style={{ color: 'black', width: 17, height: 17, marginLeft: 10, marginTop: 10 }} icon={faLinkedin} />
                </a>
                <a href="#" className="me-4 text-reset">
                  <FontAwesomeIcon style={{ color: 'black', width: 17, height: 17 }} icon={faGithub} />
                </a>

              </div>

            </div>


          </div>

        </div>

      




      <div className="text-center p-4 footer-text">
        <div style={{ width: '100%', height: '2px', backgroundColor: '#707476'}} />
        © Equinox.All Right Reserved

      </div>
      </div>
    </footer >
  );
}

export default Footer;
