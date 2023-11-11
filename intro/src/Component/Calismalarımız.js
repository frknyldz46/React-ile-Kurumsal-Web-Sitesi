import React, { Component } from 'react'
import './Calismalarımız.css'
import svg1 from './img/roadmap-1.png'
import svg2 from './img/road2.png'
import lines from './img/roadmap.lines.svg'


export default class Calismalarımız extends Component {
  render() {
    return (
      <div >

        <div className='birinciRoad'>

          <div className='linesroad'>

            <div className='daire' />
            <div className='cizgi' />

          </div>

          <div className='yazilarRoad'>


            <h2 style={{ color: '#17a393' }}>Lorem Ipsum</h2>
            <p style={{ fontSize: 18 }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
              Sed aliquam auctor sapien, at sagittis elit auctor nec.<br />
              Maecenas eu luctus tellus. Integer ullamcorper tristique  claslectus,<br />
              id tincidunt metus tristique in.</p>
          </div>
          <div>
            <img className='roadimg' src={svg1} />

          </div>

        </div>

        <div className='birinciRoad'>

          <div className='linesroad'>

            <div className='daire' />
            <div className='cizgi' />

          </div>

          <div className='yazilarRoad'>
            <h2 style={{ color: '#17a393' }}>Lorem Ipsum</h2>
            <p style={{ fontSize: 18 }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
              Sed aliquam auctor sapien, at sagittis elit auctor nec.<br />
              Maecenas eu luctus tellus. Integer ullamcorper tristique lectus,<br />
              id tincidunt metus tristique in.</p>
          </div>
          <div>
            <img className='roadimg' src={svg2} />

          </div>

        </div>


      </div>
    )
  }
}
