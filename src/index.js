// react important imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

//import { View, Text } from 'react-native';

// web vitals 
import reportWebVitals from './reportWebVitals';

//languajes
import { lang } from './JS/languajes'

//import Header
import Cabeza from './Components/encabezado/Encabezado';

//import Footer
import Pie from './Components/pie/Pie';

// import App (home)
import App from './App';

//import css
import './index.css'

//importing logo

import Logo from './imgs/EbanoLogo.bmp';

//importing the cascade stile StyleSheet


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode onload={lang}>
        <BrowserRouter>
            <Cabeza className ="navlay" />
                <div className='layout'>
                    <img className='bgi' src={Logo} />
                    <App className ="appage" />
                </div>
                <Pie className ='pie' />
            </BrowserRouter>
    </React.StrictMode>
);
reportWebVitals();
