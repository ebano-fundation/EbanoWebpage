//react important libraries
import React, { useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Popup from 'reactjs-popup';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

//css
import './Encabezado.css'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';



//import paypal things
/*
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";*/


// imports the buttons and other stiles things


// importing the images 
import logo from "../../imgs/EbanoLogo.bmp"


//importing the donation pop up page 
import Donate from '../../pages/donate/Donate';
import Pop from './../modal/Modal';

//importing the redirection page
//import redirection from '../Redirect'
//import { render } from 'react-dom';


/*********** to top Function ***********/

function DetectScroll() {
    if (document.body.scrollTop > 20) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}


//para hacer que el boton donate muestre el modal ubicado en otra pagina debemos 
//hacer 2 cosas 1 crear un puntero o 2 hacer qe el boton redirige a la pagina 
//pero es mejor hacer un puntero 

//let navigation = Navigate;


function Cabeza ({ navigation }) {


    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
}
/*
// visibility of the modal 
    state = { showModal: false }
    showModal = () => { this.setState({ showModal: true }) }
    CloseModal = () => { this.setState({ showModal: false }) }
    */

    let navigate = useNavigate();
    return (

        <>
                <Navbar bg="light" className="mb-3 navlay">
                <Container fluid>
                    <Navbar.Brand className="logo" href="#page" onClick={() => { navigate('/') }}> <img src={logo} className="App-logo" alt="logo" onClick={() => { navigate('/') }} /> Ebano fundation</Navbar.Brand>
                        <Navbar.Toggle/>
                        <Navbar.Offcanvas
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title >
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-5 pos">
                                <Nav.Link classname="home1" href="#page" onClick={() => { navigate('/') }}><ho1>home</ho1></Nav.Link>
                                <Nav.Link classname="abbout1" href="#About" onClick={() => { navigate('abbout') }}><a1>About</a1></Nav.Link>
                                <Nav.Link classname="work1" href="#charity" onClick={() => { navigate('Charity') }}><work1>Our work</work1></Nav.Link>
                                    <NavDropdown className= "colab1"
                                        title="colaborations"
                                    >
                                        {/* to add other colaboration just copi and paste the line below */ }
                                    <NavDropdown.Item href="#action3" onClick={() => { navigate('evida') }}>Ebano / Mision vida</NavDropdown.Item>
                                        { /* to make a divider use this  <NavDropdown.Divider /> */}
                                    </NavDropdown>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#donate"><Donate /></Nav.Link>
                                <Nav.Link eventKey={2} href="#redirect">
                                    <Button id="store" class="primary" className="store" path="Redirection" variant="success" onClick={() => { navigate('redirection') }} > visit our store</Button>
                                </Nav.Link>
                            </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                        {isOpen && <Pop
                            content={<>
                                <div>
                                    <div>
                                        <pt1>Donate</pt1>
                                    </div>
                                    <div>
                                        <div className="DonationMethod">

                                        </div>

                                    </div>
                                </div>
                            </>}
                            handleClose={togglePopup}
                        />}
                    </Container>
                </Navbar>
        </>
           


    )
};

export default Cabeza;
/*
 * 
 * /*
 * 
 *  onClick={this.showModal} 
    <modal CloseModal={this.CloseModal} />
 * 
 * 
 *  <div classname="background" >
                    <div className='nabar'>
                        <div id='sites'>
                            <nav>
                                <img src={logo} className="nabar App-logo" alt="logo" onClick={() => { navigate('/') }} />
                                <h1 id="home" onClick={() => { navigate('/') }}>home</h1>
                                <h1 id="Abbout" onClick={() => { navigate('Abbout') }} >abbout</h1>
                                <h1 id="charity" onClick={() => { navigate('Charity') }} >charity</h1>
                                <Button id="store" path="Redirection" variant="success" onClick={() => { navigate('redirection') }} ></Button>
                                <Button id="donate" path="Missions" variant="success" onClick={show}>donate</Button>
                            </nav>
                        </div>
                    </div>
                 </div>

*/



