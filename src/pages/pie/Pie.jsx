//react important libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

//css

import './Pie.css';


// importing the images 
import logo from "../../imgs/EbanoLogo.bmp"

// imports the buttons and other stiles things
import { Dropdown } from 'react-bootstrap';
import { dividerClasses } from '@mui/material';


const Pie = () => {
    return (
        <footer>
            <br />
            <br />
            <img src={logo} className="foterlogo" alt="logo" />
            <div className='foter'>
                <div className='f1'>
                    <ul className='' id="menu-footer-menu-one" class="footer-widget__links-list list-unstyled clearfix ml-0">
                        <li className="menu-item-001" id="menu-item-001" ><h1>Recent Causes</h1></li>
                        <li className="menu-item-002" id="menu-item-002" ><h1>Recent Causes</h1></li>
                        <li className="menu-item-003" id="menu-item-003" ><h1>Recent Causes</h1></li>
                        <li className="menu-item-004" id="menu-item-004" ><h1>Recent Causes</h1></li>
                        <li className="menu-item-005" id="menu-item-005" ><h1>Recent Causes</h1></li>
                    </ul>
                </div>
                <br />
                <div className='f2'>
                    <ul id="menu-footer-menu-one" class="footer-widget__links-list list-unstyled clearfix ml-0">
                        <li className="menu-item-006" id="menu-item-006" ><h1>Recent Causes</h1></li>
                        <li className="menu-item-007" id="menu-item-007" ><h1>Recent Causes</h1></li>
                        <li className="menu-item-008" id="menu-item-008" ><h1>Recent Causes</h1></li>
                        <li className="menu-item-009" id="menu-item-009" ><h1>Recent Causes</h1></li>
                        <li className="menu-item-010" id="menu-item-010" ><h1>Recent Causes</h1></li>

                    </ul>
                </div>
                <br />
                <div className='f3'>
                    <ul id="menu-footer-menu-one" class="footer-widget__links-list list-unstyled clearfix ml-0">
                        <li className="menu-item-011" id="menu-item-011" ><h1>Recent Causes</h1></li>
                        <li className="menu-item-012" id="menu-item-012" ><h1>Recent Causes</h1></li>
                        <li className="menu-item-013" id="menu-item-013" ><h1>Recent Causes</h1></li>
                        <li className="menu-item-014" id="menu-item-014" ><h1>Recent Causes</h1></li>
                        <li className="menu-item-015" id="menu-item-015" ><h1>Recent Causes</h1></li>
                    </ul>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
        </footer>
    )
};
export default Pie;