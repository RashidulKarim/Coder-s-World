import React from 'react';
import Course from '../Course/Course';
import UseCourse from '../Hook/UseCourse';

const Courses = () => {
    const [courses] = UseCourse();
    return (
        <div>
            <div>
                <h2 className='text-center my-3'><span className='border py-2 px-3 bg-secondary rounded bg-gradient text-white'>All Courses</span></h2>
            </div>
            <div className= 'row'>
            {
                courses.map(course => <Course course = {course}></Course>)
            }
        </div>
        </div>
    );
};

export default Courses;