import react from 'react';


import './photogalery.css';
import Image from 'react-bootstrap/Image'


export default function photogalery() {
    var pic;

    return (
        <div className= 'photogalery'>
            <div className='container'>
                <div className='bigpicture'>
                    <img src={pic} alt="imagemaximized" className="maximized" />
                </div>
                <div className='thumbnail'>
                    <div classname="container">
                    <img src="https://picsum.photos/id/1010/200/300" alt="imagemaximized" className="thumb1" />
                    <img src="https://picsum.photos/id/1010/200/300" alt="imagemaximized" className="thumb2" />
                    <img src="https://picsum.photos/id/1010/200/300" alt="imagemaximized" className="thumb3" />
                    <img src="https://picsum.photos/id/1010/200/300" alt="imagemaximized" className="thumb4" />
                    <img src="https://picsum.photos/id/1010/200/300" alt="imagemaximized" className="thumb5" />
                    <img src="https://picsum.photos/id/1010/200/300" alt="imagemaximized" className="thumb6" />
                    <img src="https://picsum.photos/id/1010/200/300" alt="imagemaximized" className="thumb7" />
                    <img src="https://picsum.photos/id/1010/200/300" alt="imagemaximized" className="thumb8" />
                    <img src="https://picsum.photos/id/1010/200/300" alt="imagemaximized" className="thumb9" />
                    </div>
                </div>
            </div>
        </div>
        
        );
}