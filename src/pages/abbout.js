import React, { useEffect, useState } from 'react';
import '../css/App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import { lang } from './JS/languajes-script'

/* routing */




function abbout() {
    return (
        <html>
            <title>Home</title>

            {/*image carrouseel*/}
            <div className="App">
                <img/>
            </div>
            <body>
                <div ClassName="Mission-div">
                    <t1 id="Mission"></t1>
                    <m1 id="Mision-info"></m1>
                </div>
                <div ClassName="vision-div">
                    <t1 id="vision"></t1>
                    <m1 id="vision-info"></m1>
                </div>
                <div ClassName="AbboutUS-div">
                    <t1 id="AbboutUS"></t1>
                    <m1 id="AbboutUS-info"></m1>
                </div>
            </body>
        </html>
    );
}
export default abbout;

