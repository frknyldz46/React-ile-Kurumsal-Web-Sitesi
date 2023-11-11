import React, { Component } from 'react'
import './Hakkında.css'
import imgabout from './img/about.us.1.jpg'
import { Col, Image, Row } from 'react-bootstrap'

export default class Hakkında extends Component {
  render() {
    return (
      <div className='containerAbout'>

        

        <div className='yazilarabout'>
          <h1 style={{color:'#fd613d',fontWeight:'bold',wordWrap:'break-word'}}>About Us</h1>
          <div className='yazilarabouticerik'>
          <p style={{fontSize:20,marginTop:10}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed aliquam auctor sapien, at sagittis elit auctor nec.
            Maecenas eu luctus tellus. Integer ullamcorper tristique lectus,
            id tincidunt metus tristique in.</p>
            </div>
          <button className='buttonabout'>Read More</button>
        </div>

        <div>
          <img className='imgAbout' src={imgabout} />
        </div>


      </div >
    )
  }
}
