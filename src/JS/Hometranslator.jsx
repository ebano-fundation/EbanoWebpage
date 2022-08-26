import React from 'react';

var Languajes = navigator.language;

function ReactComponent() {

    switch (Languajes) {
        case 'en':
            document.getElementById("S1info").innerHTML = '';
            document.getElementById("S2info").innerHTML = '';
            document.getElementById("S3info").innerHTML = '';

            document.getElementById("welcome").innerHTML = "Welcome to Ebano";
            document.getElementById("goals").innerHTML = "we are here to bring the posibilities for al the kids in the island";

            document.getElementById("Health").innerHTML = "Health";
            document.getElementById("Healthbio").innerHTML = "we try to bring the medical help to all unfortunated kids in our island";
            document.getElementById("Education").innerHTML = "Education";
            document.getElementById("Educationbio").innerHTML = "we dedicate our time to bring the tools to open the educational breach to all unfotunated kids in our island";
            document.getElementById("Happiness").innerHTML = "Happines";
            document.getElementById("Happinessbio").innerHTML = "we have the duty to bring the happines to unhappy kids";
            break

        case 'es':
            document.getElementById("welcome").innerHTML = "Bienvenidos a Ebano";
            document.getElementById("goals").innerHTML = "Estamos para brindarle la posibilidad de un mejor futuro a los ni;os del pais";

            document.getElementById("Health").innerHTML = "Salud";
            document.getElementById("Healthbio").innerHTML = "brindamos un servicio medico basico a todos aquel;los ni;os de bajos recursos";
            document.getElementById("Happines").innerHTML = "Felicidad";
            document.getElementById("Happinesbio").innerHTML = "tenemos el deber de hacer la vida de esos ni;os mas feliz";
            document.getElementById("Education").innerHTML = "Educacion";
            document.getElementById("Educationbio").innerHTML = "estamos comprometidos con brindarle una buena educaccion a aquellos ni;os ";

            break;

        case 'nl':
            document.getElementById("").innerHTML("")
            document.getElementById("").innerHTML("")
            document.getElementById("").innerHTML("")
            document.getElementById("").innerHTML("")
            document.getElementById("").innerHTML("")
            document.getElementById("").innerHTML("")
            break;

        case 'fr':
            document.getElementById("").innerHTML("")
            document.getElementById("").innerHTML("")
            document.getElementById("").innerHTML("")
            document.getElementById("").innerHTML("")
            document.getElementById("").innerHTML("")
            document.getElementById("").innerHTML("")
            break;

        case 'ja':
            document.getElementById("").innerHTML("")
            document.getElementById("").innerHTML("")
            document.getElementById("").innerHTML("")
            document.getElementById("").innerHTML("")
            document.getElementById("").innerHTML("")
            document.getElementById("").innerHTML("")
            break;

        default:
            document.getElementById("S1info").innerHTML = '';
            document.getElementById("S2info").innerHTML = '';
            document.getElementById("S3info").innerHTML = '';

            document.getElementById("welcome").innerHTML = "Welcome to Ebano";
            document.getElementById("goals").innerHTML = "we are here to bring the posibilities for al the kids in the island";

            document.getElementById("Health").innerHTML = "Health";
            document.getElementById("Healthbio").innerHTML = "we try to bring the medical help to all unfortunated kids in our island";
            document.getElementById("Education").innerHTML = "Education";
            document.getElementById("Educationbio").innerHTML = "we dedicate our time to bring the tools to open the educational breach to all unfotunated kids in our island";
            document.getElementById("Happiness").innerHTML = "Happines";
            document.getElementById("Happinessbio").innerHTML = "we have the duty to bring the happines to unhappy kids";
            break;

    }
}

export default ReactComponent;