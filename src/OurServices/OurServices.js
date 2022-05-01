import React from 'react';
import './OurServices.css'

const OurServices = () => {
    return (
        <div className=' container mb-3'>
            <h1 className='text-primary text-center'>Our Services</h1>
            <div className='services-div  justify-content-around d-lg-flex d-sm-block'>
                <div className='service'>
                    <img className='img-fluid' src="../images/airFreight.jpg" alt="" />
                    <h3 className='text-light mt-2'>Air freight</h3>
                    <p className='text-light'>Our experience brokering Air Cargo and access to an extensive air carrier network means we have the ideal solution at hand.Nothing rivals the speed of our Air Charter brokering services for your most important air freight.</p>
                </div>
                <div className='service'>
                    <img className='img-fluid w-25%' src="../images/oceanFreight.jpg" alt="" />
                    <h3 className='text-light mt-2'>Ocean freight</h3>
                    <p className='text-light'>The largest of these carriers, and the leader for the last century, is Maersk Line  the largest operating unit of A.P. Moller-Maersk, founded in 1904. Through over 115 years of logistics experience, Maersk Line now has offices in 115 countries worldwide and operates 590 container ships.
                    </p>
                </div>
                <div className='service'>
                    <img className='img-fluid' src="../images/roadFreight.jpg" alt="" />
                    <h3 className='text-light mt-2'>Road freight</h3>
                    <p className='text-light'>Sharing a truck also means sharing the transport costs. The Rhenus Group offers options for consolidated freight. Find out more about our road transport solutions for small quantities of goods.</p>
                </div>
            </div>
        </div>
    );
};

export default OurServices;