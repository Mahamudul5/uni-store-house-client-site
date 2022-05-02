import React from 'react';
import './Network.css'

const Network = () => {
    return (
        <div className=' mt-3 mb-3 main-div-net '>
            <div className='d-flex w-25% me-2 design-card bg-light'>
                <div className='w-30% '>
                    <img className='img-fluid cup-img' src="../images/globe.png" alt="" />
                </div>
                <div className='w-70% '>
                    <h1 className='hColor'>6991</h1>
                    <h5 className='h5Color'>All Over The World</h5>
                </div>

            </div>
            <div className='d-flex w-25% me-2 design-card bg-light'>
                <div className='w-30%'>
                    <img className='img-fluid cup-img' src="../images/plane.png" alt="" />
                </div>
                <div className='w-70%'>
                    <h1 className='hColor'>7511</h1>
                    <h5 className='h5Color'>All Over The World</h5>
                </div>

            </div>
            <div className='d-flex w-25% me-2 design-card bg-light '>
                <div className='w-30%'>
                    <img className='img-fluid cup-img' src="../images/lovebox.png" alt="" />
                </div>
                <div className='w-70%'>
                    <h1 className='hColor'>8700</h1>
                    <h5 className='h5Color'>All Over The World</h5>
                </div>

            </div>
            <div className='d-flex w-25% design-card bg-light '>
                <div className='w-30%'>
                    <img className='img-fluid cup-img' src="../images/cup.png" alt="" />
                </div>
                <div className='w-70%'>
                    <h1 className='hColor'>5644</h1>
                    <h5 className='h5Color'>All Over The World</h5>
                </div>

            </div>
        </div>
    );
};

export default Network;