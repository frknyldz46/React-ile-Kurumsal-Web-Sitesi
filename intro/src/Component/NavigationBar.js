import React, { Component } from 'react'
import { Container, Navbar, Nav, Image, Row, Col } from "react-bootstrap";
import equinox from './img/Logo.png'

export default class NavigationBar extends Component {
  render() {
    return (
      <Navbar expand="lg" >
        <Container style={{margin:0,maxWidth:'100%',paddingLeft:80,paddingRight:80,width:'90%',marginLeft:'auto',marginRight:'auto'}} >
          <Navbar.Brand href="#">

            <img src={equinox} style={{ width: 90, height: 90, borderRadius: 5 }} />


          </Navbar.Brand>
          {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" style={{ flexGrow: 0 }}>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

              <Nav.Link style={{fontWeight:'600',color:'#2a3033',fontSize:16}} href="/">AnaSayfa</Nav.Link>
              <Nav.Link style={{fontWeight:'600',color:'#2a3033',fontSize:16}} href="/kurumsal">Kurumsal</Nav.Link>
              <Nav.Link style={{fontWeight:'600',color:'#2a3033',fontSize:16}} href="#">Hizmetlerimiz</Nav.Link>
              <Nav.Link style={{fontWeight:'600',color:'#2a3033',fontSize:16}} href="/iletisim" >İletişim</Nav.Link>

            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
