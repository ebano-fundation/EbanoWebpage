// importing react utils 
import React, { useEffect, useMemo, useRef } from 'react';
import {Navigation} from "react-router-dom"

// importing the css

import './Donate.css';


/*
let counter = 0;

let buttonRef, buttonId
const generateId = () => {
    return `ID-${++counter}`; // if it is necessary, use some better unique id generator
};
*/
// making the html body

const DonateButton = () => {
    /*
    useEffect(() => {
        const button = window.PayPal.Donation.Button({
            env: 'production',
            hosted_button_id: '549TV4TSKJSZJ',
            image: {
                src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif',
                alt: 'Donate with PayPal button',
                title: 'PayPal - The safer, easier way to pay online!',
            }
        });
        button.render(`#${buttonRef.current.id}`); // you can change the code and run it when DOM is ready
    }, []);
    */
    return (
        <div>
        </div>
       // <div ref={buttonRef} id={buttonId} />
    );
};

export default DonateButton;