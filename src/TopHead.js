import React from 'react';
import logo from './logo.svg';
import { Nav, Navbar, Form, Container } from 'react-bootstrap';


export default class TopHead extends React.Component{
  render(){
    return (
    	<div>
        <Navbar collapseOnSelect bg="dark" variant="dark">
          <Container>
            <Navbar.brand href="/">
                <img src={logo} />
            </Navbar.brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav">
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                  <Nav.Link href="/catalog">Каталог</Nav.Link>
                  <Nav.Link href="/delivery">оплата+доставка</Nav.Link>
                  <Nav.Link href="/career">карьера</Nav.Link>
                  <Nav.Link href="/contact">контакты</Nav.Link>
                  <Nav.Link href="/about">о нас</Nav.Link>
                  <Nav.Link href="/shop">
                    <img src={logo} alt="" />
                  </Nav.Link>
                </Nav>
                <Form >
                  <Form.Control type="text" placeholder="search" />
                  <Form.Control type="button" variant="outline-info" />
                </Form>
              </Navbar.Collapse>
            </Navbar.Toggle>
          </Container>
        </Navbar>
      </div>
    );
  }
}