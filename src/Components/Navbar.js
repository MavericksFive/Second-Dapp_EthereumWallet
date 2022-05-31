import {React, useState} from 'react';
import logo from '../logo.svg';
import {Button, Navbar, Container, Nav, Form,FormControl, } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fade as Hamburger } from 'hamburger-react'
import {useGlobal} from "reactn"





let bgNav ={postion:"fixed", position:"top",backgroundColor: '#2a2b34'};
let styleContainer={}
let NavBrand={fontSize:'25px', fontFamily:"Times New Roman", color:"#FFF", marginRight:'30px', backgroundColor: '#2a2b34'};
let NavLink={fontSize:'20px', fontFamily:"Times New Roman", color:"#FFF"};
let styleButton={backgroundColor:"#02938C"};


export default function NavigationBar() {
    var [Account, setAccount]=useGlobal('')
    var [Value,setValue]= useState("")
  
    return (
        <Navbar style={bgNav} expand="sm">
        <Container className="d-flex align-content-center" style={styleContainer} fluid>
            <Navbar.Brand style={NavBrand} className="d-flex align-items-center" href="#">
            <img
            style={bgNav}
            src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo">
            </img>
            Ethereum wallet</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbarScroll">
            <Hamburger color="#FFF" size={25}/>
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarScroll">
            <Nav className="d-flex align-items-center me-auto my-2 my-lg-0"
                navbarScroll
            >   
                <Nav.Link style={NavLink} href="#Spot">Spot</Nav.Link>
                <Nav.Link style={NavLink} href="#Contact">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
                <FormControl
                type="Public address"
                placeholder="Public address..."
                className="me-2"
                aria-label="Public address..."
                onChange={(e) => setValue(e.target.value)}
                />
                <Button type="submit" style={styleButton} variant="dark" onClick={() => setAccount(Value)}>Search</Button>
               
            </Form>

            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}