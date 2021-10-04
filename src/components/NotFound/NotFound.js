import React from 'react';
import image from '../../image/notFound.jpg';
const NotFound = () => {
    
    return (
        <div className='d-flex justify-content-center align-items-center w-100' style={{height:"70vh"}}>
            <img src={image} alt="" />
        </div>
    );
};

export default NotFound;