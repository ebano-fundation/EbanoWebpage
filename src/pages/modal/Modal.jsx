// import react utils
import react from 'react';
import { Link } from "react-router-dom";



// modal body

const Popup = props => {
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                {props.content}
            </div>
        </div>
    );
};
export default Popup; 