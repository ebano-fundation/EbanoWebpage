//react important libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

//css
import './Pie.css';

const Pie = () => {
        return (
            <div className='pie'>
                <div class="container-fluid text-center text-white bg-dark p-4">
                    <p class="smallest" className='bio'>© 2022 Ebano Fundation - Todos los derechos reservados.</p>
                    <div className='Social'>
                        <a href='https://www.google.com'><img className='fb' src='../../icons/facebook.png' alt='Facebook' /></a>
                        <a href='https://www.google.com'><img className='gm' src='../../icons/Gmail.png' alt='Gmail' /></a>
                        <a >809-782-6590</a>
                        <a>809-904-5587</a>
                    </div>
                </div>
            </div>
        )
};
export default Pie;