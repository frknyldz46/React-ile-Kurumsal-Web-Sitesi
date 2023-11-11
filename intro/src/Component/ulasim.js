import React, { Component } from 'react'
import './ulasim.css'
import offer from './img/offer.1.jpg'

export default class extends Component {
    render() {
        return (
            <div className='anaDiv'>


                <div style={{ display: 'flex', justifyContent: 'center' }}>

                    <div className='yazilar'>
                        <h3 style={{ fontSize: 32,fontWeight:'400', color: 'white' }}>We Design your Awesome Dreams</h3>
                        <h3 style={{ fontSize: 40, fontWeight: '700', color: 'white',marginTop:25 }}>Birlikte Çalışmak İçin Hemen Teklif Alın.</h3>
                        <h3 style={{ fontSize: 20, fontWeight:'400', color: 'white',marginTop:25 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Praesent eget risus vitae massa semper aliquam quis mattis quam.<br />
                            Morbi vitae tortor tempus, placerat leo et.</h3>


                        <button class="button">
                            Teklif Alın
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}
