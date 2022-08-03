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
import Cabeza from './pages/encabezado/Encabezado';

//import Footer
import Pie from './pages/pie/Pie';

// import App (home)
import App from './App';



//importing the cascade stile StyleSheet


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode onload={lang}>
        <BrowserRouter>
            <Cabeza />
            <App />
            <Pie />
        </BrowserRouter>
    </React.StrictMode>
);
reportWebVitals();
