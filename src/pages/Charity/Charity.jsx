import react from 'react';
import { Navigation } from 'react-router-dom';
import { Button } from 'reactstrap';
import Missions from '../Missions';
import Carrousel from '../../Components/Carrousel/Carrousel'

//css
import "./Charity.css"
import Image from 'react-bootstrap/Image'

const Charity = () =>
{
    return (
        <html>
            {/*image carrouseel*/}
            <Carrousel />
            {/* */}
            { /* image of broken page*/}
            <div className="transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 1200 19.07">
                    <path class="cls-2" d="M-262.9,44h-1200V35.71c.43,2.08,1.24,2.22,1.88,2s1.36-.91,2.14-.74c.42.09.7.4,1.13.49s1-.19,1.56-.23c1.19-.06,2.28,1.09,3.33.67.37-.16.57-.48,1-.62a2.54,2.54,0,0,1,1.79.29c.57.24,1.36.41,1.78.06s.27-1,.86-1.13.83.26,1.12.52a4.83,4.83,0,0,0,3.77,1.18,2.78,2.78,0,0,1,2.56,1.22,3.1,3.1,0,0,0,2.36,1.53,14.45,14.45,0,0,0,2.19-.58c1.09-.17,2.17.33,3.29.41s2.49-.75,1.79-1.38a3.88,3.88,0,0,1,2.89,1.25c.16-.35.32-.71.49-1.06.19.42,1.06.07,1.37-.3,1.06-1.2,2.13-2.41,3.17-3.62a19.33,19.33,0,0,0,3.35,3.89,3.88,3.88,0,0,0,1.55,1c1.62.47,3.32-.55,4.34-1.57s2.09-2.26,3.82-2.43a4.43,4.43,0,0,1,3.36,1.16,7.62,7.62,0,0,1,1.62,2.54,1.6,1.6,0,0,1,.8-.5l1.77,1.39c.52-.81,2.49-.72,2.87.13a1.26,1.26,0,0,1,.79-.59c.46.47.92.92,1.39,1.38.21-.69,1.18-1.12,2.12-1.27s1.94-.1,2.9-.23c1.42-.17,2.69-.73,4.09-.94s3.17.05,3.72,1a3.64,3.64,0,0,1,3.93-.88c.66.25,1.45.71,2,.36.3-.16.36-.47.62-.68,1-.84,3.1.83,4.34.15.77-.41.5-1.44,1.35-1.78,1.07-.43,2.51.82,3.49.28.63-.34.48-1.21,1.23-1.39s1.18.38,1.58.78c1.29,1.24,4.17,2.38,6.1,1.71a4.64,4.64,0,0,0,3.32-.5,8.77,8.77,0,0,1,1.24-.8c1.24-.54,2.82,0,4.08.53a2.47,2.47,0,0,1,2.43-.36,5.34,5.34,0,0,1,2,1.32c-.24-1.45,1.79-2.51,3.56-3.22l5.39-2.17a31.94,31.94,0,0,0-3,5,33.8,33.8,0,0,1,8.47-.14c.14-.67.27-1.34.41-2a9.87,9.87,0,0,1,2.52.69,9.14,9.14,0,0,1,.18-2.44l2.26.33a1,1,0,0,1,.21-.86l1.19.42c.06-.81,1.29-1.39,2.42-1.4a8.86,8.86,0,0,1,3.18.79,7.85,7.85,0,0,1-.74-3.3,1.42,1.42,0,0,1,.42-1.18,3.46,3.46,0,0,1,1.92-.45l5.22-.17c1.18-.05,2.61-.21,3.05-1,.24-.42.27-1,.88-1.1a1.35,1.35,0,0,1,.67.16,14.52,14.52,0,0,1,2.67,1.46c1.26-.58,2.58-.91,3.83-1.5.21-1,2.24-.86,3.45-.41s3,.91,3.71.05c.24-.31.31-.76.79-.82a1.15,1.15,0,0,1,.79.24c.72.45,1.42.89,2.14,1.32a4,4,0,0,1,3.52,0c.18-.44.35-.89.51-1.33a1.79,1.79,0,0,0,1.85.31c.9.9,2.71.95,4.25.91,4.17-.09,8.68-.27,11.91-2.19a2,2,0,0,1,1.39-.41,1.32,1.32,0,0,1,.77.63c1.59,2.38,3.65,5.06,7.23,5.55a3.2,3.2,0,0,1,.2-2.39c1.11.81,2.21,1.63,3.3,2.45l1.2-1.15,1.88,1.1c.78-.86,2.54-.62,4-.56a9.92,9.92,0,0,0,6-1.56,6.34,6.34,0,0,0,1.49,3.29,6,6,0,0,1,5.93-.91,15.72,15.72,0,0,0,1.78.78c2.51.69,4.81-1.39,7.46-1.74,1.34-.17,2.73.12,4.07,0s2.71-1.14,2.11-2c2.59.42,5.65,1.17,6.2,3q.4-.82.84-1.65a3.5,3.5,0,0,1,1.73.9c.36-.74,1.91-.74,2.75-.24a10.28,10.28,0,0,1,1.87,1.92,2.79,2.79,0,0,0,2.76.79c1.09-.41,1.32-1.71,2.53-1.81,1.46-.13,2.7,1.74,3.87,1.08.45-.27.45-.79.79-1.13.84-.8,2.63,0,3.12,1s.65,2.12,1.87,2.58a8.68,8.68,0,0,0,3.18,0c1.09,0,3,.65,2.81,1.42a4.15,4.15,0,0,0,2.62.36c.85-.23,1.4-1.07.85-1.6a44.87,44.87,0,0,1,12.65-1.2,7.69,7.69,0,0,0,4.1-.47c.58-.34,1-.88,1.72-1,1.51-.25,2.18,1.34,3.42,2,1.64.91,4,0,5.69-.8a61.24,61.24,0,0,1,14-4.5c.09-1.27,1.91,3,2,1.73,1,.09,2.67-2.5,3.41-2.06-.11-.35,1.34-2.62,3.25-1.27a15.84,15.84,0,0,0,2.77.95c1.5.37,2.65-.74,4.2-.55,1.3.16,2.45-.66,2.88.23a7.69,7.69,0,0,0,1.52,2.63,9.17,9.17,0,0,0,4.25,1.52c5.56,1,11.13-4.94,16.69-3.92a2.88,2.88,0,0,0,1,.07c.88-.14,1.39-1,2.27-.92s1,1,1.66,1.54c1.27,1,4.07-.1,5.64.7a4.74,4.74,0,0,1,3.88,1.93,1.6,1.6,0,0,1,2-.28c.45-.44.89-.87,1.34-1.29-.39.9,1,1.89,2.27,1.59.81-.2,1.32-.79,2.08-1.07a3.63,3.63,0,0,1,3.93,1.22,4.88,4.88,0,0,1,.49,3.39c1.63,1,4.2-1.18,6.28-.79,1.22.23,2.15,1,3.38,1.19a11.64,11.64,0,0,0,3.36-.28c1.12-.15,2.48-.1,3.12.58,1,1.05-.1,3,1.55,3.46.35.09.72.07,1.08.14a1.46,1.46,0,0,1,1.21,1.68c-.16.69,1.6-1.77,1-1.22a6,6,0,0,1,1.82,1.65c.67-.86-.25-1.33,1-1.76.82-.29,1.9,0,2.62-.38a1.46,1.46,0,0,0,.67-1.26c.13-1.16.28-2.32.42-3.48a11.7,11.7,0,0,0,4.43,3.17c.83-.49.32-1.81,1.36-1.95.54-.07,1,.3,1.48.47a3.29,3.29,0,0,0,2.87-.77,6.69,6.69,0,0,1,2.71-1.29,6.77,6.77,0,0,0,4.21-.52,7,7,0,0,1,1.88-.84c1.23-.22,2.54.7,2.29,1.6a6.14,6.14,0,0,1,4.48,1.93,9.93,9.93,0,0,0,3.81,2.74c1.67.51,4.16-.24,4-1.54.22.63,1.56.57,2.24.14s1.06-1.11,1.85-1.43a3.61,3.61,0,0,1,2.84.26,6.56,6.56,0,0,1,1.9,1.71,14.08,14.08,0,0,1,7.2-1c1.43.26,3.27.81,4.15,0,.58-.54.42-1.48,1.27-1.79a3.09,3.09,0,0,1,1.72.11,9.67,9.67,0,0,0,4.81-.19,8.14,8.14,0,0,1-1.18,3.2,13,13,0,0,0,8.08.44,3,3,0,0,1,1.93-.12c.66.31.57,1.06,1.14,1.46a2.62,2.62,0,0,0,1.12.32l4,.58a9.63,9.63,0,0,0,2.88.13c1.32-.2,2.93-.87,3.77-.1-.2-.25.15-.57.52-.6a2.24,2.24,0,0,1,1.09.25l2.09.87c-.24-.93,1.69-1.66,2.62-1-.2-.65,1.07-1.06,1.94-.83s1.49.77,2.33,1a5,5,0,0,0,3.8-.44,5.32,5.32,0,0,0,2.18-2.4,1.74,1.74,0,0,1,1-1.09c1.28-.41,3.12,2.56,4.51,2.39l3.39-.45a2.33,2.33,0,0,1,1.24-3.25c.63-.3,1.44-.53,1.69-1,.39-.78-.79-1.71-.19-2.42a6.92,6.92,0,0,1,3.31.45,7.62,7.62,0,0,0,1.8.66,5.4,5.4,0,0,0,1.69-.17c2.46-.52,1,2.62,3,1.41,1.33-.82,2.58-.79,4.32-.62,1,.11,1.46-.86,2.46-.61a10.74,10.74,0,0,0,3.55.46c1.94-.28,3.3-.86,5.25-1.13s3.68-.15,5.09-1.18c.29-.23,2,2.15,2.31,2,1.09-.46,6.14.48,7.25.92s2.78.67,3.39-.12a7.06,7.06,0,0,1,.4-.65c.58-.62,1.9-.37,2.82-.06A1.92,1.92,0,0,1-887,32.6c1.24-.38,2,1.21,3.35,1.33a3.82,3.82,0,0,0,2.21-.92,6.83,6.83,0,0,1,5.7-.41c-.17-.93,1.86,1.23,2.2.33,1.53.25.54-1.21,2-1.58s-.08,2.42,1.07,1.58c.7-.5,1.92-1.53,2.62-1s1.85-2.32,1.66-1.63a6.6,6.6,0,0,1,2.64-.39c.91.12,1.75.76,1.51,1.39s-1.51,1.37-.79,1.84a1.58,1.58,0,0,0,1.1.06A7.07,7.07,0,0,0-859,32a2.42,2.42,0,0,0,2.16,1.56,2.86,2.86,0,0,0,2.64-.82c-.82-.21-.6-1.18.18-1.46a4.75,4.75,0,0,1,2.53.08c.13-.34.26-.69.38-1q1.73-.06,3.45-.09c0-.44.06-.87.08-1.32,1.27.51,2.52,1,3.78,1.51A7.65,7.65,0,0,1-842,28.14c.85-.64,1.32,3.53,2.52,3.76s2,1.56,3.09,1c.79-.37,1.39-2.62,2.15-3s.55,1.77,1.24,2.16,3.66-.44,4.32,0c1.37.91,2.78-1,4.47-1.55-1-.4.2-.38,1.23-.77,1.48-.56,3.29,0,4.79.46.59.22,1,1.31,1.69,1.39,1.24.15.92-2.07,1.87-2.68.24.69,2.32,1.65,2.91,2.22,1-.42,2.09-.2,3.09-.62.67,2.25,3.41-1.24,6.32-2.16,1.3-.41,3.72,1.07,4.87,1.67l6.47,3.41a12,12,0,0,0,3.29,1.33,4.57,4.57,0,0,0,3.51-.59c.65-.53.95-1.35,1.88-1.57a3.08,3.08,0,0,1,2.14.51,9.09,9.09,0,0,1,3.22,3l2.95-1.2a2,2,0,0,1,1.16-.22c1.11.2.75,1.71,1.86,1.92.67-1,2.6-1.06,4.13-1l7.1.42a18.15,18.15,0,0,0,.38-3.8,11.58,11.58,0,0,1,3.72,2.45c2.09-.48,3.58-1.78,5.39-2.67s4.62-1.25,6,0c0-.43.07-.86.1-1.29,2,.82,4.81,1.55,6.35.32.58-.47.91-1.19,1.75-1.35s2.08.49,2.85.06c.35-.19.47-.53.74-.77.62-.58,1.89-.46,2.83-.17a6.44,6.44,0,0,0,2.93.54c.81-.13,1.44-.63,2.24-.76,1.27-.2,2.39.55,3.49,1.07,2.4,1.15,5.45,1.32,8.33,1.43a16.14,16.14,0,0,0,5.17-.35c1.21-.37,2.23-1,3.48-1.31s2.62.73,3.49,1.44c1.21,1,3.51.31,5-.48s3.61-1.63,5.05-.76c.13-.79.26-1.59.4-2.38,1.49.24,3.07,3.3,4,2.44-.27,1.26,1.63-1.1,3.41-1.14s1.51,4.14,2.61,3.15c.56.77,2.55-3.38,2.35-2.5a5.38,5.38,0,0,0,3-.61,3.44,3.44,0,0,1,1.28,2.06c1.69.09,3.21-1.18,2.87-2.38a2.74,2.74,0,0,0,1.55.37c.56-.07.91-.66.45-.89,3,1.79,7.49.28,11.4.11,3.68-.16,7.41,1,11,.39,1.39-.23,2.69-.7,4.11-.85a8.61,8.61,0,0,1,5.58,1.28c1.26.86,2.8,2.22,4.33,1.58-.84-1,1.34,2.87,2.31,1.9s.53-1.78,2.16-1.54c-.9-1,4.49-.86,4.16-2,2.8-.51-.26,1.43,2.62,1.54,1.48.07,1.92-1.4,2.63-.46.28.39,1.92-1.32,2.16-.92.46.75.36,4.64,1.23,4.11s3-.23,3.24-1c2,2.83,3.16-1.56,6,.84A6.28,6.28,0,0,1-600,33.8a5.2,5.2,0,0,0,1.3,1.07,5.23,5.23,0,0,0,1.87.27q3.76,0,7.53,0c-.39-.74-.72-1.7.14-2.18a3.51,3.51,0,0,1,1.82-.24c4.6.25,9.2.67,13.76,1.27a6.42,6.42,0,0,1,2.94.87,26.17,26.17,0,0,1,3.93-1.7l3.4-1.07a2.55,2.55,0,0,1,1-.15,1.67,1.67,0,0,1,1.09.83c.83,1.23,2.34,2.58,4.2,2.29a17.9,17.9,0,0,1,1.79-.42c1.58-.11,2.54,1.2,3.06,2.29q3.72-.12,7.44.12c-.09,1.75,1,1.26,1.62,2.95,1.69,0,2,.18,2.41-1,.22-.64.69-.16,1-.79a1.84,1.84,0,0,1,2.11-.88,3.34,3.34,0,0,1-.12-2.54,6.67,6.67,0,0,0,3.71,1.66c0-1.44.37-3.21,2.24-3.72a12.49,12.49,0,0,1,3.66,0c1.22,0,2.75-.47,2.64-1.37,1.36,0,1.92,1.52,3.26,1.65a3.69,3.69,0,0,0,1.37-.23c1.71-.51,3.41-1,5.12-1.56.19,1,1.41,1.77,2.74,2.06a14.14,14.14,0,0,0,4.16.06A10.66,10.66,0,0,0-504,32c.24,1.06,2.48,1.21,3.6.51.83-.53,1.69-1.41,2.69-1.08.62.19.84.76,1.42,1,.94.35,1.93-.38,2.51-1,.92-1,1.84-1.67,2.75-2.67-.16-.09,0-.29.2-.31a4.2,4.2,0,0,1,.61.06,1.08,1.08,0,0,0,1-.81c.14-.39.19,3.07.6,2.8.86.13.86-.72,1.69-.92.26-.07.78.93.93.77.48-.51,1-1.33,1.45-1.84.26-.27-.36,3.14.09,3.23.29.06,1.53-3,1.66-2.77.38.51-.33,2.41,0,2.92a8.72,8.72,0,0,0,1.23,1c.11,0,.21,1.78.31,1.75.88-.28,1.72-3.94,2.32-4.48,1-.88,2.46,2.81,2.77,1.7.6.59.27-3.17.85-2.57.35-.43,1.76-.35,1.93-.82.58.85,1,.89,1.69,1.69.32-.32.37,1.64.78,1.39.29.66,2.33-.91,1.85-.31,1.06,0,.51-3.7,1.57-3.58a1.51,1.51,0,0,1-.63.37c0,.14.33.16.52.13s.47-.08.58,0,0,.13-.1.15a10.13,10.13,0,0,0,4.39.27c0,.66.65,1.23,1.42,1.57a10.68,10.68,0,0,0,2.57.56l2.66.34a2.58,2.58,0,0,1,.75.18,2.09,2.09,0,0,0,.49.26c.54.08.94-.58,1.44-.41.19.05.3.23.49.29.51.15.87-.55,1.4-.49s.51.7,1,.76a1,1,0,0,0,.6-.2,7.71,7.71,0,0,1,2.05-1.25,16.39,16.39,0,0,1,2.34-.61,16,16,0,0,1,2.41-.11c6.35,0,13.75.25,18.14-3.05,4.08-.68,5,1.18,8.48-.46.3-.56,2.94,2.1,3.24,1.54.59,0,3.72-.46,4.32-.46.79-1.31,8.35,1.12,10,.77,2.1-.44,5.58.33,7.55-.15-.28,1.79,3.63,3.63,5.56,2.46.55-.33,5.35.68,7.55-2.77.7-1.08,2.85-2.85,3.53-2.05,1.51,1.78,1.89,0,4.73-.43-.65,1,5.19,3.35,4.55,4.33,3.15-1.28,3.52-1.79,7.09-1.39,2.84.31,3.46,3.6,3.7,1.54,1.14.71,3.48-1,4.63-.31.67-.7,3.84-2.19,4.53-2.88.58.39,1.21,1.74,1.79,2.11,1.09-1.18,2.36-.2,3.24,1.08.5.7,2.42-1.61,3.24-1.08.54.35,1.91-.26,2.62-.15,2.8.41,4.11-1.45,5.45.38l2.51-1.51c1,1.75,4.29,1.92,6.92,1.84s6,.25,6.71,2.07a19.22,19.22,0,0,1,14.06,2.1c3.45-2.95,11.56.38,15-2.59l2.08.89a11,11,0,0,0,8.65-2.47c3.41.52,6.81,1,10.22-.14Z" transform="translate(1462.9 -24.92)"></path>
                </svg>
            </div>
            { /**/}

            <div className="nev">
                <div className=" nevcontainer" >
                    <div className ="backi">
                        <div className="nevText">
                            <br/>
                            <h1>
                                events
                            </h1>
                            <h2> here you can see the social events that we make with your help </h2>
                            <t1>thanks you</t1>
                            <br />
                            <br />

                        </div>
                    </div>
                    <br />


                    <div className="nevpromoimg">
                        <Image src="https://media.discordapp.net/attachments/1017671902006886460/1020191154509197362/a778bb4b-5c68-42a9-bcc2-8bc233572003_1.JPG?width=988&height=701"/>
                    </div>
                </div>
            </div>

            <div className="olev">
                <div className=" olevcontainer" >
                    <div className="oleText">
                        <h1>
                        </h1>
                    </div>
                    <div className="olevpromovid">
                        <Image src="https://media.discordapp.net/attachments/1017671902006886460/1020193921143406612/mail.jpeg?width=720&height=576" />
                    </div>
                </div>
            </div>
        </html>
        );
}
export default Charity;


/*
 
             <body>
                <div className="charities">
                    <center>
                        { photo galery 
                        <div className='photogalery'>
                            <div className='containr'>
                                <div className='bigpicture'>
                                    <Image src='' alt="imagemaximized" className="maximized" />
                                    <a>kasjdkasjkdjakskdjaksjd</a>
                                </div>
                                <div className='thumbnail'>
                                    <div classname="container">
                                        <Image class="rounded mx-auto d-block" src="https://picsum.photos/id/1010/200/300" alt="imagemaximized" className="thumb1" />
                                        <Image className="th1" class="rounded mx-auto d-block img-thumbnail " src="https://picsum.photos/id/1010/200/300" alt="imagemaximized" className="thumb2" />
                                        <Image className="th2" class="rounded mx-auto d-block img-thumbnail " src="https://picsum.photos/id/1010/200/300" alt="imagemaximized" className="thumb3" />
                                        <Image className="th3" class="rounded mx-auto d-block img-thumbnail " src="https://picsum.photos/id/1010/200/300" alt="imagemaximized" className="thumb4" />
                                        <Image className="th4" class="rounded mx-auto d-block img-thumbnail " src="https://picsum.photos/id/1010/200/300" alt="imagemaximized" className="thumb5" />
                                        <Image className="th5" class="rounded mx-auto d-block img-thumbnail " src="https://picsum.photos/id/1010/200/300" alt="imagemaximized" className="thumb6" />
                                        <Image className="th6" class="rounded mx-auto d-block img-thumbnail " src="https://picsum.photos/id/1010/200/300" alt="imagemaximized" className="thumb7" />
                                        <Image className="th7" class="rounded mx-auto d-block img-thumbnail " src="https://picsum.photos/id/1010/200/300" alt="imagemaximized" className="thumb8" />
                                        <Image className="th9" class="rounded mx-auto d-block img-thumbnail " src="https://picsum.photos/id/1010/200/300" alt="imagemaximized" className="thumb9" />
                                    </div>
                                </div>
                            </div>
                        </div>
                         end photo galery}

                    </center >
                </div >
            </body >

     */
  
 