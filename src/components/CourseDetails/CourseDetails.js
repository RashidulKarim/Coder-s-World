import React from 'react';
import { useParams } from 'react-router';
import UseCourse from '../Hook/UseCourse';

const CourseDetails = () => {
    // using UseParam Hook
    const {id} = useParams()
    //load data from useCourse
    const [courses] = UseCourse()
   let matchCourse;
   if(courses.length){       
       matchCourse = courses.find(course => course.id === +id)
   }
    
    return (
       <div>
           {
                matchCourse && 
                <div className='container text-center'>
                    <div className=''>
                        <img className='img-fluid' src={matchCourse.img} alt="" />
                    </div>
                    <div className='my-4'>
                        <h2>{matchCourse.title}</h2>
                        <p>{matchCourse.shortDescription}</p>
                        <div className='d-flex justify-content-center'>
                        <h6 className='w-25'>Rated By: {matchCourse.ratedBy} Users</h6>
                        <h6>Rating: {matchCourse.ratting}</h6>
                        </div>
                        <div className='d-flex justify-content-center'>
                        <h6 className='w-25'>Price:  $ {matchCourse.price} </h6>
                        <h6>{matchCourse.duration}</h6>
                        </div>
                        <p className='text-start text-black-50'><small>{matchCourse.description}</small></p>
                        <button className='rounded py-2 px-5'>Buy Now</button>
                    </div>
                </div>
           }
       </div>
    );
};

export default CourseDetails;