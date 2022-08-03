/*var languaje = navigator.language;

const lang = () => {

    menulang();
    homelang();
    abboutlang();
    charitylang()
}

function menulang()
{
    switch (languaje)
    {
        // idioma ingles //
        case 'en-US':
            document.getElementById("home").innerHTML = "Home";
            document.getElementById("Abbout").innerHTML = "Abbout";
            document.getElementById("charity").innerHTML = "Charity";
            document.getElementById("log").innerHTML = "Login/register";
            break;

        // idioma espa;ol 
        case 'es':
            document.getElementById("home").innerHTML = "Inicio";
            document.getElementById("Abbout").innerHTML = "Acerca";
            document.getElementById("charity").innerHTML = "Obras";
            document.getElementById("log").innerHTML = "inicia/registrate";
            break;
        default:
            break;
    }

}

function homelang()
{
    switch (languaje)
    {
        // idioma ingles //
        case 'en-US':

            // Home //
            document.getElementById("slide1").innerHTML = "First Slide";
            document.getElementById("slide2").innerHTML = "Second Slide";
            document.getElementById("slide3").innerHTML = "Third Slide";

            document.getElementById("slide1-info").innerHTML = "this, is the content of First Slide";
            document.getElementById("slide2-info").innerHTML = "this, is the content of Second Slide";
            document.getElementById("slide3-info").innerHTML = "this, is the content of Third Slide";



            document.getElementById("health").innerHTML = "Health";
            document.getElementById("health-info").innerHTML = "we try to bring the medical help to all unfortunated kids in our island";
            document.getElementById("happines").innerHTML = "happines";
            document.getElementById("happines-info").innerHTML = "we have the duty to bring the happines to unhappy kids";
            document.getElementById("education").innerHTML = "education";
            document.getElementById("education-info").innerHTML = "we dedicate our time to bring the tools to open the educational breach to all unfotunated kids in our island";

            document.getElementById("welcome").innerHTML = "Welcome to Ebano";
            document.getElementById("goals").innerHTML = "we are here to bring the posibilities for al the kids in the island";
            break;


        // idioma espa;ol 
        case 'es':

            // Home //

            document.getElementById("slide1").innerHTML = "Primera Slide";
            document.getElementById("slide2").innerHTML = "Segunda Slide";
            document.getElementById("slide3").innerHTML = "Tercera Slide";

            document.getElementById("slide1-info").innerHTML = "Este es el contenido del Primer Slide";
            document.getElementById("slide2-info").innerHTML = "Este es el contenido del Segundo Slide";
            document.getElementById("slide3-info").innerHTML = "Este es el contenido del Tercer Slide";



            document.getElementById("health").innerHTML = "Salud";
            document.getElementById("health-info").innerHTML = "brindamos un servicio medico basico a todos aquel;los ni;os de bajos recursos";
            document.getElementById("happines").innerHTML = "Felicidad";
            document.getElementById("happines-info").innerHTML = "tenemos el deber de hacer la vida de esos ni;os mas feliz";
            document.getElementById("education").innerHTML = "educacion";
            document.getElementById("education-info").innerHTML = "estamos comprometidos con brindarle una buena educaccion a aquellos ni;os ";

            document.getElementById("welcome").innerHTML = "Bienvenidos a Ebano";
            document.getElementById("goals").innerHTML = "Estamos para brindarle la posibilidad de un mejor futuro a los ni;os del pais";
            break;

        default:
            break;
    }
}

function abboutlang()
{
    switch (languaje)
    {
        // idioma ingles //
        case 'en-US':

            // abbout

            document.getElementById("Mission-info").innerHTML = "We exist to love the underprivileged families in our community and around the world, by providing guidance and the essential tools necessary to help improve their quality of life.";
            document.getElementById("Vision-ingo").innerHTML = " We seek to deliver opportunities that will change lives in the areas of professional trainings, as well as physical, and mental education, consequently, supporting each individual to reach their greatest potential.";
            document.getElementById("AbboutUS-info").innerHTML = " We are a group of people with a vision echoed in the passion we bring when serving our community. Our common goal is to go beyond the ordinary to ensure that every life we touch grows to their highest potential.We exist to provide guidance, to build, and nourish the character of the younger ones based on the expertise, talents, and abilities of our staff and volunteers, as well as the organizations that work hand in hand with our vision. On a more personal note, this desire to change lives was born in my heart out of gratitude for the opportunities presented to me, and the seeds that my parents and other visionary individuals had planted in me when I was growing up.Even when I was not able to see it myself, they saw in me a hidden potential that, on the right time, with the right guidance, would take me to another level in my life’s journey.The product of that seed is what moves this vision today, working for the benefit of underprivileged families. Through my life experiences I have learned that, to make a difference, one must love people, and be sensible to the pain and trouble of others.This is to embrace one’s calling and give all for the well - being of others.";

            break;

        // idioma espa;ol 
        case 'es':


            abbout

            document.getElementById("Mission-info").innerHTML = "Existimos para amar a las familias desfavorecidas de nuestra comunidad y de todo el mundo, brindándoles orientación y las herramientas esenciales necesarias para ayudar a mejorar su calidad de vida.";
            document.getElementById("Vision-ingo").innerHTML = " Buscamos entregar oportunidades que cambiarán vidas en las áreas de formación profesional, así como educación física y mental, en consecuencia, apoyando a cada individuo a alcanzar su mayor potencial.";
            document.getElementById("AbboutUS-info").innerHTML = "Somos un grupo de personas con una visión reflejada en la pasión que traemos al servir a nuestra comunidad. Nuestro objetivo común es ir más allá de lo ordinario para garantizar que cada vida que tocamos crezca hasta su máximo potencial. Existimos para brindar orientación, construir y nutrir el carácter de los más jóvenes en función de la experiencia, los talentos y las habilidades de nuestros personal y voluntarios, así como las organizaciones que trabajan de la mano con nuestra visión. En una nota más personal, este deseo de cambiar vidas nació en mi corazón por la gratitud por las oportunidades que se me presentaron y las semillas que mis padres y otras personas visionarias habían plantado en mí cuando estaba creciendo. no pude verlo yo mismo, vieron en mí un potencial oculto que, en el momento adecuado, con la guía adecuada, me llevaría a otro nivel en el viaje de mi vida. El producto de esa semilla es lo que mueve esta visión hoy, trabajando. en beneficio de las familias más desfavorecidas. A través de mis experiencias de vida, he aprendido que, para marcar la diferencia, uno debe amar a las personas y ser sensible al dolor y al problema de los demás. Esto es abrazar el llamado de uno y darlo todo por el bienestar de los demás.";

            break;

        default:
            break;
    }
}

function charitylang()
{
    switch (languaje) {

        // idioma ingles //
        case 'en-US':
            break;


        // idioma espa;ol 
        case 'es':

            break;

        default:
            break;
    }
}



             document.getElementById("home").innerHTML = "Home";
            document.getElementById("Abbout").innerHTML = "Abbout";
            document.getElementById("charity").innerHTML = "Charity";
            document.getElementById("donate").innerHTML = "Donate";
            document.getElementById("home").innerHTML = "Home";
            document.getElementById("Abbout").innerHTML = "Abbout";
            document.getElementById("charity").innerHTML = "Charity";
            document.getElementById("donate").innerHTML = "Donate";
            document.getElementById("home").innerHTML = "Home";
            document.getElementById("Abbout").innerHTML = "Abbout";
            document.getElementById("charity").innerHTML = "Charity";
            document.getElementById("donate").innerHTML = "Donate";
            document.getElementById("home").innerHTML = "Home";
            document.getElementById("Abbout").innerHTML = "Abbout";
            document.getElementById("charity").innerHTML = "Charity";
            document.getElementById("donate").innerHTML = "Donate";
            document.getElementById("home").innerHTML = "Home";
            document.getElementById("Abbout").innerHTML = "Abbout";
            document.getElementById("charity").innerHTML = "Charity";
            document.getElementById("donate").innerHTML = "Donate";
            document.getElementById("home").innerHTML = "Home";
            document.getElementById("Abbout").innerHTML = "Abbout";
            document.getElementById("charity").innerHTML = "Charity";
            document.getElementById("donate").innerHTML = "Donate";
            document.getElementById("home").innerHTML = "Home";
            document.getElementById("Abbout").innerHTML = "Abbout";
            document.getElementById("charity").innerHTML = "Charity";
            document.getElementById("donate").innerHTML = "Donate";
            document.getElementById("home").innerHTML = "Home";
            document.getElementById("Abbout").innerHTML = "Abbout";
            document.getElementById("charity").innerHTML = "Charity";
            document.getElementById("donate").innerHTML = "Donate";
            document.getElementById("home").innerHTML = "Home";
            document.getElementById("Abbout").innerHTML = "Abbout";
            document.getElementById("charity").innerHTML = "Charity";
            document.getElementById("donate").innerHTML = "Donate";
            document.getElementById("home").innerHTML = "Home";
            document.getElementById("Abbout").innerHTML = "Abbout";
            document.getElementById("charity").innerHTML = "Charity";
            document.getElementById("donate").innerHTML = "Donate";
            document.getElementById("home").innerHTML = "Home";
            document.getElementById("Abbout").innerHTML = "Abbout";
            document.getElementById("charity").innerHTML = "Charity";
            document.getElementById("donate").innerHTML = "Donate";
            document.getElementById("home").innerHTML = "Home";
            document.getElementById("Abbout").innerHTML = "Abbout";
            document.getElementById("charity").innerHTML = "Charity";
            document.getElementById("donate").innerHTML = "Donate";
 */