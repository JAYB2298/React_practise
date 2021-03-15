import React from 'react';

let Card=()=>{
    return <>
    <div className='container mt-4'>
        <div className='row'>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-5">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472589.8788774629!2d70.54110033929359!3d22.27388215341316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3b!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1614604478735!5m2!1sen!2sin" 
                        width="400" 
                        height="300" 
                        allowFullScreen="" 
                        loading="lazy">
                        </iframe>
                    </div>
                    <div className="col-md-7">
                        <div className="card">
                            <div className="card-header text-center">
                                <h4>Contact Form</h4>
                            </div>
                            <div className="card-body text-center">
                                <form className="form">
                                    <div className="form-group">
                                        <input type="text" placeholder="Name" className="form-control"></input>
                                        <input type="text" placeholder="Contact" className="form-control mt-2"></input>
                                        <input type="text" placeholder="E-mail" className="form-control mt-2"></input>
                                        <button value="submit"  className="btn-primary mt-2">Submit</button>
                                    </div>   
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}

export default Card;