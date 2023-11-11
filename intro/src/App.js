import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import NavigationBar from "./Component/NavigationBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Kurumsal from "./Component/Kurumsal";
import AnaSayfa from "./Component/AnaSayfa";
import Footer from "./Component/Footer";
import İletisimSayfasi from './Component/İletisimSayfasi'


function App() {

  return (

    <div style={{ backgroundColor: '#e8f6f4' }}>

      <div>


        <div style={{ height: '50px', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 25, padding: 25 }}>
          <a href="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faFacebookF} style={{ width: 22, height: 22 }} />
          </a>
          <a href="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faTwitter} style={{ width: 22, height: 22 }} />
          </a>
          <a href="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faGoogle} style={{ width: 22, height: 22 }} />
          </a>
          <a href="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faInstagram} style={{ width: 22, height: 22 }} />
          </a>
          <a href="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faLinkedin} style={{ width: 22, height: 22 }} />
          </a>
          <a href="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faGithub} style={{ width: 22, height: 22 }} />
          </a>
        </div>

      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '50%', height: '6px', backgroundColor: '#fd390c' }} />
        <div style={{ width: '50%', height: '6px', backgroundColor: '#45b5a9' }} />
      </div>

      <div>
        <NavigationBar />

      </div>

      <Router>

        <Routes>
          <Route path="/" element={<AnaSayfa />} />

          <Route path="/kurumsal" element={<Kurumsal />} />
          <Route path="/iletisim" element={<İletisimSayfasi />} />
        </Routes>
      </Router>

      <div>
        <Footer />
      </div>


    </div>


  );


}

export default App;
