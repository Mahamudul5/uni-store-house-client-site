import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './UpdateSingleItem.css';

const UpdateSingleItem = () => {
    const { Id, name, price } = useParams();
    return (
        <div className='UpdateItem'>
            <h2 className='text-center text-primary'>Item:{Id}</h2>
            <h2 className='text-center text-primary'>Name:{name}</h2>
            <h2 className='text-center text-primary'>Price:{price}</h2>
            <div className='text-center'>
                <form>
                    <input className='input' type="number" name="" id="" placeholder='quantity' />
                    <button className='btn btn-primary'>Add</button>
                </form>
                <Link to="/buyNow">
                    <button className='btn btn-primary'>DELIVERED</button>
                </Link>
            </div>
        </div>
    );
};

export default UpdateSingleItem;