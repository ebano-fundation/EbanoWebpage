import react from 'react'
// importing the images 
import logo from "../imgs/EbanoLogo.bmp"

//function to redirect to the web page

/*
function rediret() {
    var timer = setTimeout(myfunction, 3000);
}
function myfunction() {
    location.reload('https://www.w3schools.com/howto/howto_js_redirect_webpage.asp')
}
*/

const redirection = () =>
{
    return
    (
        <center>
            <div>
                <img src={logo} alt="logo chargin" />
                <br/>
                <h1 /*id= {randomphraszxe}*/ > klk</h1>
            </div>
        </center>
    )
}
export default redirection;