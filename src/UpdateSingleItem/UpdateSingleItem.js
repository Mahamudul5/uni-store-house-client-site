import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './UpdateSingleItem.css';

const UpdateSingleItem = () => {
    const { Id } = useParams();
    return (
        <div className='details'>
            <h2 className='text-center text-primary'>Course number:{Id}</h2>
            <div className='text-center'>
                <Link to="/buyNow">
                    <button className='btn btn-primary'>BUY NOW</button>
                </Link>
            </div>
        </div>
    );
};

export default UpdateSingleItem;