import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import design from './design.png'
import notes from './notes.png'
import mobildesign from './mobile-development.png'
import monitor from './monitor.png'
import webdesign from './web-design.png'
import coding from './coding.png'
import './Tanitim.css'



export default class Tanitim extends Component {
  render() {
    return (
      <div className='anacontainer'>

        <div className='icerikler'>

          <Image src={design} style={{ width: 80, height: 80 }} />
          <h3 style={{ marginTop: 10, fontSize: 23, fontWeight: 'bold' }}>Web Design</h3>
        </div>
        <div className='icerikler'>
          <Image src={notes} style={{ width: 80, height: 80 }} />
          <h3 style={{ marginTop: 10, fontSize: 23, fontWeight: 'bold' }} >Web Development</h3>
        </div>
        <div className='icerikler'>
          <Image src={mobildesign} style={{ width: 80, height: 80 }} />
          <h3 style={{ marginTop: 10, fontSize: 23, fontWeight: 'bold' }}>Graphic Design</h3>
        </div>
        <div className='icerikler'>
          <Image src={monitor} style={{ width: 80, height: 80 }} />
          <h3 style={{ marginTop: 10, fontSize: 23, fontWeight: 'bold' }}>Seo Marketing</h3>
        </div>
        <div className='icerikler'>
          <Image src={webdesign} style={{ width: 80, height: 80 }} />
          <h3 style={{ marginTop: 10, fontSize: 23, fontWeight: 'bold' }}>Content Writing</h3>
        </div>
        <div className='icerikler'>
          <Image src={coding} style={{ width: 80, height: 80 }} />
          <h3 style={{ marginTop: 10, fontSize: 23, fontWeight: 'bold' }}>Coding</h3>
        </div>

      </div>
    )
  }
}
