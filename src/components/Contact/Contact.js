import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <div className="container pb-5 mb-5">
			<div className="row">
				<div className="col-sm text-center pb-2">
				  <h2 className="div-heading display-4">Contact US</h2>
				</div>
			</div>
			<div className="row mb-5 gy-5">
				<div className="col-md-6">
					<form>
					  <div className="form-group mb-3">
						  <input type="name" className="form-control" id="exampleInputName" placeholder="Your Full Name..."/>
			 </div>
                       <div className="form-group mb-3">
						  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email Address..."/>
					   </div>
					  <div className="form-group mb-3">
                            <select className="form-control" id="exampleFormControlSelect1" placeholder="Select Services...">
                                <option>Corporate</option>
                                <option>Wedding</option>
                                <option>Pickup</option>
                            </select>
					  </div>
                      <div className="form-group mb-3">
                        <textarea placeholder='Write Your massage' className="form-control" arabel="With textarea"></textarea>
                      </div>
					  <button type="submit" className="btn btn-warning btn-lg btn-block">Submit</button>
					</form>
			        </div>
                <div  className="col-md-6">
                    <h5>Address: <small className="text-muted">668 East Dholairpar, Kadamtoli, Dhaka-1236</small></h5>
                    <h5>Email: <small className="text-muted">Rashidul.karim7@gmail.com</small></h5>
                    <h5>Contact: <small className="text-muted">+8801915555256 || +8801303020662</small></h5>
                    <div className="text-center">
                        <img className="img-fluid contact-image rounded" alt="Responsive" src="https://csds.qld.edu.au/sdc/resources/images/find-us-map.jpg"/>
                    </div>
	  	        </div>
			</div>
		</div>
    );
};

export default Contact;