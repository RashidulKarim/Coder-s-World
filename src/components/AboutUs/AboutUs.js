import { faChalkboardTeacher, faCode, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './aboutus.css';


const AboutUs = () => {
    return (
        <div className="text-center about">
            <h1>About US</h1>
            <div className='container' >
                <div className="d-flex flex-wrap mb-5 mx-auto">
                    <div className="me-3 mb-3 border px-3 py-5 about-item wow lightSpeedIn" style={{maxWidth:'400px'}}>
                        <span> <FontAwesomeIcon icon={faCode} /></span>
                        <h2>World Best Course</h2>
                        <p className="lead">Web development is now more essential than you think. What’s more, it touches every point of businesses in online platforms, from websites to apps.</p>
                    </div>
                    <div className=" me-3 mb-3 border px-3 py-5 about-item wow lightSpeedIn" style={{maxWidth:'400px'}}>
                        <span> <FontAwesomeIcon icon={faChalkboardTeacher} /></span>
                        <h2>World Best Teacher </h2>
                        <p className="lead">The best teachers
                        never stop learning.
                        Join a global community of teachers through our full range of online or face-to-face courses at Bell Teacher Academy.</p>
                    </div>
                    <div className=" mb-3 me-3 border px-3 py-5  about-item wow lightSpeedIn" style={{maxWidth:'400px'}}>
                        <span> <FontAwesomeIcon icon={faUsers} /></span>
                        <h2>Life Time Support</h2>
                        <p className="lead">We dedicatedly provide flexible training options such as online training, 24/7 support, lifetime post-training support, job placement and so on.</p>
                    </div>
                </div>
             </div>
      </div>
    );
};

export default AboutUs;