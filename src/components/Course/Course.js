import React from 'react';
import { useHistory } from 'react-router-dom';

const Course = (props) => {
    const history = useHistory();
    const {title, img, price, shortDescription,id} = props.course
    const handleDetails = (id) => {
        history.push(`/course/${id}`)
    }
    
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 rounded p-3 my-2" >
            <div className='border p-3 rounded'>
            <div>
                <img src={img} className='mb-3'  style={{width:"100%", height:'40vh'}} alt="" />
            </div>
            <div style={{height:"27vh"}}>
                <h2 >{title.slice(0,40)}</h2>
                <p>{shortDescription.slice(0,70)}</p>
                <div className='d-flex justify-content-between'>
                    <p className='bg-secondary py-2 px-4 text-white'>${price}</p>
                    <p><button className='bg-secondary py-2 px-3 text-white text-decoration-none' onClick={()=>{handleDetails(id)}}>Details</button></p>
                </div>
            </div>
            </div>
        </div> 
    );
};

export default Course;