//react important libraries
import React, { useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Popup from 'reactjs-popup';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

//css
import './Encabezado.css'


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
import Donate from '../donate/Donate';
import Pop from '../../pages/modal/Modal';

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
//pero en mejor hacer un puntero 

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

        <div >
            <header>
                <div>
                    <ul className="itemlist">
                        <img src={logo} className="nabar App-logo" alt="logo" onClick={() => { navigate('/') }} />
                        <li className="item" > <Button id="store" class = "primary" className="store" path="Redirection" variant="success" onClick={() => { navigate('redirection') }} > visit our store</Button></li>
                        <li className="item" > <Donate/> </li> 
                        <li className="item" id="charity" onClick={() => { navigate('Charity') }}> <h1>Charity</h1> </li>
                        <li className="item" id="Abbout" onClick={() => { navigate('Abbout') }}> <h1> Abbout </h1></li>
                        <li className="item" id="home" onClick={() => { navigate('/') }}> <h1> Home</h1> </li>
                    </ul>
                </div>
            </header>
            {isOpen && <Pop
                content={<>
                    <div>
                        <div>
                            <pt1>Doante</pt1>
                        </div>
                        <div>
                            <div className="DonationMethod">
                                
                            </div>
                            
                        </div>
                     </div>
                </>}
                handleClose={togglePopup}
            />}

        </div>


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



