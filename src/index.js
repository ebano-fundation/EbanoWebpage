import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import logo from './imgs/EbanoLogo.bmp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
//import {lang} from './JS/languajes-script'
import abbout from "./pages/abbout";
import Missions from "./pages/Missions";

// importando los layers de la pagina 
import App from './App';

var languaje = navigator.language;

function lang() {

    switch (languaje) {

        // idioma ingles //
        case 'en-US':

            document.getElementById("home").innerHTML = "Home";
            document.getElementById("Abbout").innerHTML = "Abbout";
            document.getElementById("charity").innerHTML = "Charity";
            document.getElementById("donate").innerHTML = "Donate";


            document.getElementById("slide1").innerHTML = "First Slide";
            document.getElementById("slide2").innerHTML = "Second Slide";
            document.getElementById("slide3").innerHTML = "Third Slide";

            document.getElementById("slide1-info").innerHTML = "this, is the content of First Slide";
            document.getElementById("slide2-info").innerHTML = "this, is the content of Second Slide";
            document.getElementById("slide3-info").innerHTML = "this, is the content of Third Slide";

            // Home //

            document.getElementById("health").innerHTML = "Health";
            document.getElementById("health-info").innerHTML = "we try to bring the medical help to all unfortunated kids in our island";
            document.getElementById("happines").innerHTML = "happines";
            document.getElementById("happines-info").innerHTML = "we have the duty to bring the happines to unhappy kids";
            document.getElementById("education").innerHTML = "education";
            document.getElementById("education-info").innerHTML = "we dedicate our time to bring the tools to open the educational breach to all unfotunated kids in our island";

            document.getElementById("welcome").innerHTML = "Welcome to Ebano";
            document.getElementById("goals").innerHTML = "we are here to bring the posibilities for al the kids in the island";

            // abbout

            document.getElementById("Mission").innerHTML = "Mission";
            document.getElementById("Vision").innerHTML = "Vision";
            document.getElementById("AbboutUS").innerHTML = "Abbout US";


            document.getElementById("Mission-info").innerHTML = "We exist to love the underprivileged families in our community and around the world, by providing guidance and the essential tools necessary to help improve their quality of life.";
            document.getElementById("Vision-ingo").innerHTML = " We seek to deliver opportunities that will change lives in the areas of professional trainings, as well as physical, and mental education, consequently, supporting each individual to reach their greatest potential.";
            document.getElementById("AbboutUS-info").innerHTML = " We are a group of people with a vision echoed in the passion we bring when serving our community. Our common goal is to go beyond the ordinary to ensure that every life we touch grows to their highest potential.We exist to provide guidance, to build, and nourish the character of the younger ones based on the expertise, talents, and abilities of our staff and volunteers, as well as the organizations that work hand in hand with our vision. On a more personal note, this desire to change lives was born in my heart out of gratitude for the opportunities presented to me, and the seeds that my parents and other visionary individuals had planted in me when I was growing up.Even when I was not able to see it myself, they saw in me a hidden potential that, on the right time, with the right guidance, would take me to another level in my life’s journey.The product of that seed is what moves this vision today, working for the benefit of underprivileged families. Through my life experiences I have learned that, to make a difference, one must love people, and be sensible to the pain and trouble of others.This is to embrace one’s calling and give all for the well - being of others.";

            //charity


            break;


        // idioma espa;ol 
        case 'es':

            document.getElementById("home").innerHTML = "Inicio";
            document.getElementById("Abbout").innerHTML = "Acerca";
            document.getElementById("charity").innerHTML = "Obras";
            document.getElementById("donate").innerHTML = "Dona";

            // slides

            document.getElementById("slide1").innerHTML = "Primera Slide";
            document.getElementById("slide2").innerHTML = "Segunda Slide";
            document.getElementById("slide3").innerHTML = "Tercera Slide";

            document.getElementById("slide1-info").innerHTML = "Este es el contenido del Primer Slide";
            document.getElementById("slide2-info").innerHTML = "Este es el contenido del Segundo Slide";
            document.getElementById("slide3-info").innerHTML = "Este es el contenido del Tercer Slide";

            // Home //

            document.getElementById("health").innerHTML = "Salud";
            document.getElementById("health-info").innerHTML = "brindamos un servicio medico basico a todos aquel;los ni;os de bajos recursos";
            document.getElementById("happines").innerHTML = "Felicidad";
            document.getElementById("happines-info").innerHTML = "tenemos el deber de hacer la vida de esos ni;os mas feliz";
            document.getElementById("education").innerHTML = "educacion";
            document.getElementById("education-info").innerHTML = "estamos comprometidos con brindarle una buena educaccion a aquellos ni;os ";

            document.getElementById("welcome").innerHTML = "Bienvenidos a Ebano";
            document.getElementById("goals").innerHTML = "Estamos para brindarle la posibilidad de un mejor futuro a los ni;os del pais";

            // abbout

            document.getElementById("Mission").innerHTML = "Mission";
            document.getElementById("Vision").innerHTML = "Vision";
            document.getElementById("AbboutUS").innerHTML = "Abbout US";


            document.getElementById("Mission-info").innerHTML = "Existimos para amar a las familias desfavorecidas de nuestra comunidad y de todo el mundo, brindándoles orientación y las herramientas esenciales necesarias para ayudar a mejorar su calidad de vida.";
            document.getElementById("Vision-ingo").innerHTML = " Buscamos entregar oportunidades que cambiarán vidas en las áreas de formación profesional, así como educación física y mental, en consecuencia, apoyando a cada individuo a alcanzar su mayor potencial.";
            document.getElementById("AbboutUS-info").innerHTML = "Somos un grupo de personas con una visión reflejada en la pasión que traemos al servir a nuestra comunidad. Nuestro objetivo común es ir más allá de lo ordinario para garantizar que cada vida que tocamos crezca hasta su máximo potencial. Existimos para brindar orientación, construir y nutrir el carácter de los más jóvenes en función de la experiencia, los talentos y las habilidades de nuestros personal y voluntarios, así como las organizaciones que trabajan de la mano con nuestra visión. En una nota más personal, este deseo de cambiar vidas nació en mi corazón por la gratitud por las oportunidades que se me presentaron y las semillas que mis padres y otras personas visionarias habían plantado en mí cuando estaba creciendo. no pude verlo yo mismo, vieron en mí un potencial oculto que, en el momento adecuado, con la guía adecuada, me llevaría a otro nivel en el viaje de mi vida. El producto de esa semilla es lo que mueve esta visión hoy, trabajando. en beneficio de las familias más desfavorecidas. A través de mis experiencias de vida, he aprendido que, para marcar la diferencia, uno debe amar a las personas y ser sensible al dolor y al problema de los demás. Esto es abrazar el llamado de uno y darlo todo por el bienestar de los demás.";


            //charity


            break;

        default:
            console.log('ho hay data');
    }
}








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <header>
            <div className='nabar' onLoad={lang} >
                    <div id='sites'>
                        <img src={logo} className="nabar App-logo" alt="logo" />
                        <strong href="./pages/abbout"  id="home" ></strong>
                        <strong href="./pages/abbout" id="Abbout" ></strong>
                        <strong href="./page/abbout"  id="charity"></strong>
                        <Button id="donate" path="Missions" variant="success"></Button>

                    </div>
             </div>
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
