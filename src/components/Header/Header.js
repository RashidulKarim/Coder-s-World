import { faFacebookF, faGooglePlus, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container'>
            <div className="d-flex justify-content-between pt-3 text-black-50 border-bottom border-3">
                <div className="left-side">
                    <p><small className='pe-4'><FontAwesomeIcon icon={faPhoneAlt} />  +8801915555256</small>    
                   <small> <FontAwesomeIcon icon={faEnvelope} /> Rashidul.karim7@gmail.com</small></p>
                </div>
                <div className="right-side d-flex">
                    <p>
                        <small className='pe-2'><FontAwesomeIcon icon={faFacebookF} /></small>
                        <small className='pe-2'><FontAwesomeIcon icon={faGooglePlus} /></small>
                        <small className='pe-2'><FontAwesomeIcon icon={faLinkedin} /></small>
                        <small className='pe-2'><FontAwesomeIcon icon={faYoutube} /></small>
                        <small className='pe-5'><FontAwesomeIcon icon={faTwitter} /></small>
                        </p>
                    <p><small className='pe-2'><FontAwesomeIcon className='me-1' icon={faLock} />Sign In</small>| <small className='ps-2'>Sign Up</small></p>
                </div>
            </div>
            <div className="navbar my-3">
                <div className="brand-name">
                    <h3><Link className='text-decoration-none' style={{ border:'2px solid gray', padding:'8px 15px', backgroundColor:"black", color:'white'}} to='/home'>CODE ACADEMY</Link></h3>
                </div>
                <div className="nav">
                    <nav>
                        <ul className='list-unstyled d-flex'>
                            <li><Link className='text-decoration-none pe-3 text-black font-weight-bolder' to='/home'>HOME</Link></li>
                            <li><Link className='text-decoration-none pe-3 text-black font-weight-bolder' to='/courses'>COURSES</Link></li>
                            <li><Link className='text-decoration-none pe-3 text-black font-weight-bolder' to='/about'>ABOUT US</Link></li>
                            <li><Link className='text-decoration-none text-black font-weight-bolder' to='/contact'>CONTACT US</Link></li>
                            
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;