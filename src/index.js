import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import logo from './imgs/EbanoLogo.bmp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';



// importando los layers de la pagina 
import App from './App';

function gohome() {}
function goAbbout() { }
function goMissions() { }
function donations() { }
function deplegateHome() { }
function deplegateAbbout() { }
function deplegateMissions() { }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

        <header>
            <ul className='nabar'>
            <img src={logo} className="nabar App-logo" alt="logo" />
            <div id='sites'>
                <strong id="home" onClick={gohome()} onMouseOver={deplegateHome()} >Home</strong>
                <strong id="Abbout" onClick={goAbbout()} onMouseOver={deplegateAbbout()}>Abbout</strong>
                <strong id="Missions" onClick={goMissions()} onMouseOver={deplegateMissions()}>Missions</strong>
            </div>
                <Button id="donate" variant="success" onClick={donations()} ><span>Donate</span></Button>
            </ul>
        </header>
        <App />
        <footer className='foter' >
            <img src={logo} className="foterlogo" alt="logo" />
            <div>
                <ul id="menu-footer-menu-one" class="footer-widget__links-list list-unstyled clearfix ml-0">
                    <li id="menu-item-568" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-568"><a href="https://layerdrops.com/pifoxenwp/donations-grid/">Recent Causes</a></li>
                    <li id="menu-item-569" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-569"><a href="https://layerdrops.com/pifoxenwp/about-us/">About Us</a></li>
                    <li id="menu-item-571" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-571"><a href="https://layerdrops.com/pifoxenwp/donate-now/">New Campaign</a></li>
                    <li id="menu-item-572" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-572"><a href="https://layerdrops.com/pifoxenwp/contact/">Contact Us</a></li>
                    <li id="menu-item-570" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-570"><a href="https://layerdrops.com/pifoxenwp/events-grid/">Events</a></li>
                </ul>
            </div>
            <div>
                <ul id="menu-footer-menu-one" class="footer-widget__links-list list-unstyled clearfix ml-0">
                    <li id="menu-item-568" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-568"><a href="https://layerdrops.com/pifoxenwp/donations-grid/">Recent Causes</a></li>
                    <li id="menu-item-569" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-569"><a href="https://layerdrops.com/pifoxenwp/about-us/">About Us</a></li>
                    <li id="menu-item-571" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-571"><a href="https://layerdrops.com/pifoxenwp/donate-now/">New Campaign</a></li>
                    <li id="menu-item-572" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-572"><a href="https://layerdrops.com/pifoxenwp/contact/">Contact Us</a></li>
                    <li id="menu-item-570" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-570"><a href="https://layerdrops.com/pifoxenwp/events-grid/">Events</a></li>
                </ul>
            </div>
            <div>
                <ul id="menu-footer-menu-one" class="footer-widget__links-list list-unstyled clearfix ml-0">
                    <li id="menu-item-568" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-568"><a href="https://layerdrops.com/pifoxenwp/donations-grid/">Recent Causes</a></li>
                    <li id="menu-item-569" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-569"><a href="https://layerdrops.com/pifoxenwp/about-us/">About Us</a></li>
                    <li id="menu-item-571" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-571"><a href="https://layerdrops.com/pifoxenwp/donate-now/">New Campaign</a></li>
                    <li id="menu-item-572" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-572"><a href="https://layerdrops.com/pifoxenwp/contact/">Contact Us</a></li>
                    <li id="menu-item-570" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-570"><a href="https://layerdrops.com/pifoxenwp/events-grid/">Events</a></li>
                </ul>
            </div>
        </footer>
  </React.StrictMode>
);
