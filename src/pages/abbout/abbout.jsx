
//import react utils
import React, { useEffect, useState } from 'react';

// import css and Styles
import './Abboutt.css'

//import { lang } from './JS/languajes-script'

/* routing */

import Carrousel from '../../Components/Carrousel/Carrousel'


function abbout() {
    return (
        <html>
            <title id = "about"></title>
            {/*image carrouseel*/}
            <Carrousel/>
            <body>

                <div className='about'>
                    <div className='contenedor'>
                        <div className="col-sm-12 col-md-4 col-lg-4 py-3 car">
                            <div className="card shadow">
                                <img src="https://media.discordapp.net/attachments/985659106796929095/1007784514459815996/unknown.png?width=711&height=702" class="card-img-top" alt="CasaCool5" />
                                <div className="card-body">
                                    <h4>Mision</h4><hr />
                                    <p className="text-muted">
                                        We exist to love the underprivileged families in our community and around the world, by providing
                                        guidance and the essential tools necessary to help improve their quality of life.
                                    </p>
                                    <a href="#" className="btn btn-sm btn-primary">Más Información</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 py-3 car">
                            <div className="card shadow">
                                <img src="https://media.discordapp.net/attachments/985659106796929095/1007784514459815996/unknown.png?width=711&height=702" class="card-img-top" alt="CasaCool5" />
                                <div className="card-body">
                                    <h4>Vision</h4><hr />
                                    <p className="text-muted">
                                        We seek to deliver opportunities that will change lives in the areas of professional trainings, as well as
                                        physical, and mental education, consequently, supporting each individual to reach their greatest potential.
                                    </p>
                                    <a href="#" className="btn btn-sm btn-primary">Más Información</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4 col-lg-4 py-3car">
                            <div className="card shadow">
                                <img src="https://media.discordapp.net/attachments/985659106796929095/1007784514459815996/unknown.png?width=711&height=702" class="card-img-top" alt="CasaCool5" />
                                <div className="card-body">
                                    <h4>About us</h4><hr />
                                    <p className="text-muted">
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
                                    </p>
                                    <a href="#" className="btn btn-sm btn-primary">Más Información</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
export default abbout;                  



