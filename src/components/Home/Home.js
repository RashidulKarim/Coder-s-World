import React from 'react';
import { Link } from 'react-router-dom';
import CarouselItem from '../CarouselItem/CarouselItem';
import Course from '../Course/Course';
import UseCourse from '../Hook/UseCourse';

const Home = () => {
    //load data from custom hook
    const [courses] = UseCourse()
    
    return (
        <div className="container">
            <CarouselItem></CarouselItem>
            <div className='mt-5 text-info text-center'>
                    <h2>RECENT COURSES</h2>
                    <small><Link className='text-decoration-none text-info border-bottom border-2 border-info' to='/courses'>View All Course</Link></small>
                <div className="mx-auto g-5 row my-4">
                    {
                        courses.slice(1,7).map((course, e )=> <Course key ={e} course={course}></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;