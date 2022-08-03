
//import react utils
import React, { useEffect, useState } from 'react';

// import css and Styles
import '../../App';
import './Abboutt.css'

//import { lang } from './JS/languajes-script'

/* routing */




function abbout() {
    return (
        <html>
            <title id = "about"></title>
                {/*image carrouseel*/}
            <div>
                <div className="carousel" id="carousel" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://picsum.photos/1080/150" onClick="gotourl()" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5 id="slide1"></h5>
                                    <p id="slide1-info"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <body>

                <div className="mision">
                    <div className='Missionimg'>
                        <img src="https://picsum.photos/580/440" onClick="gotourl()" alt="..." />
                    </div>
                    <div className='Mission'>
                        <t1> Mission</t1>
                        <m1>
                            We exist to love the underprivileged families in our community and around the world, by providing
                            guidance and the essential tools necessary to help improve their quality of life.
                        </m1>
                    </div>
                </div>

                <div>
                    <div className='vision'>
                        <div className='Vissionimg'>
                            <img src="https://picsum.photos/280/440" onClick="gotourl()" alt="..." />
                        </div>
                        <div className="visiontxt">
                            <t1> vision </t1>
                            <br/>
                            <v1>
                                We seek to deliver opportunities that will change lives in the areas of professional trainings, as well as
                                physical, and mental education, consequently, supporting each individual to reach their greatest potential.
                            </v1>
                        </div>
                    </div>
                </div>

                <div className="about">
                    <div className='Abboutusimg'>
                        <img src="https://picsum.photos/280/440" onClick="gotourl()" alt="..." />
                    </div>
                    <div className='Abboutus'>
                        <t1>Abbout Us</t1>
                        <u1>
                            We are a group of people with a vision echoed in the passion we bring when serving our community.
                            Our common goal is to go beyond the ordinary to ensure that every life we touch grows to their highest
                            potential. We exist to provide guidance, to build, and nourish the character of the younger ones based
                            on the expertise, talents, and abilities of our staff and volunteers, as well as the organizations that work
                            hand in hand with our vision.
                            On a more personal note, this desire to change lives was born in my heart out of gratitude for the
                            opportunities presented to me, and the seeds that my parents and other visionary individuals had
                            planted in me when I was growing up. Even when I was not able to see it myself, they saw in me a
                            hidden potential that, on the right time, with the right guidance, would take me to another level in my
                            life’s journey. The product of that seed is what moves this vision today, working for the benefit of
                            underprivileged families.
                            Through my life experiences I have learned that, to make a difference, one must love people, and be
                            sensible to the pain and trouble of others. This is to embrace one’s calling and give all for the well-being
                            of others.
                        </u1>
                    </div>
                </div>
            </body>
        </html>
    );
}
export default abbout;

