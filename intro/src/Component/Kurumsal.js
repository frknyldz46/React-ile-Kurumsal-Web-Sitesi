import React, { Component } from 'react'
import aboutimg2 from './img/about.us.2.jpg'
import './kurumsal.css'
import EkipCard from './Ekibimiz'

export default class Kurumsal extends Component {
  render() {
    return (
      <div>
        <img src={aboutimg2} className='aboutimg' />
        <div className='kurumsaltext'>
          <div className='kurumsalheader'>
            <h1 style={{fontWeight:700,fontSize:36}}>About Us</h1>
          </div>

          <div className='kurumsalbody'>
            <p style={{fontWeight:400,fontSize:20}}>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
              Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
              mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
              Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
              Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
              Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.
              Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit. Proin tempus,.  </p><br/>
            <p style={{fontWeight:400,fontSize:20}}>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
              Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
              mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
              Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
              Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
              Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.
              Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit. Proin tempus,.  </p>
          </div>

          <div className='kurumsalekipcard'>
            <EkipCard/>

          </div>
        </div>
      </div>
    )
  }
}
