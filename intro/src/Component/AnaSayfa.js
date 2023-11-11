import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import './animasyon.css'
import Footer from "./Footer";
import İletişim from './İletişim'
import './TextStyle.css'
import Hakkında from './Hakkında';
import './dijital.css'
import './divider.css'


import HizmetlerAnaSayfa from './HizmetlerAnaSayfa'
import Ulasim from './ulasim';
import Calismalarımız from './Calismalarımız';
import Ekibimiz from './Ekibimiz';
import Tanitim from './Tanitim';
import CarouselSlider from './CarouselSlider';

export default class AnaSayfa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
        };
    }

    componentDidMount() {
        // Scroll olayını dinlemek için bir olay dinleyici ekleyin
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        // Temizlik işlemi: bileşen unmount edildiğinde olay dinleyiciyi kaldırın
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        const element = document.getElementById('animated-element'); // Animasyonlu nesnenin ID'si

        if (element && scrollY + windowHeight >= element.offsetTop) {
            this.setState({ isVisible: true });
        }
    };

    render() {
        const { isVisible } = this.state;
        return (
            <div >

                <div>
                    <CarouselSlider />
                </div>

                <div>
                    <Tanitim />
                </div>



                <div id="animated-element" className={`animated-element ${isVisible ? 'visible' : ''}`}   >
                    <HizmetlerAnaSayfa />
                </div>




                <div >
                    <Hakkında />

                </div>

                <div>
                    <Ulasim />
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50, marginBottom: 50 }}>
                    <h1 style={{ color: '#fd613d', fontWeight: 'bold' }}>ROADMAP</h1>
                </div>

                <div>
                    <Calismalarımız />
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50, marginBottom: 50 }}>
                    <h1 style={{ color: '#fd613d', fontWeight: 'bold' }}>TEAM</h1>
                </div>

                <div>
                    <Ekibimiz />
                </div>



                <div>
                    <İletişim />
                </div>

            </div>
        )
    }
}
