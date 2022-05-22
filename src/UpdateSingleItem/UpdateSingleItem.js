import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './UpdateSingleItem.css';
const UpdateSingleItem = () => {

    const { Id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/item/${Id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    });




    return (
        <div className='UpdateItem'>

            <h2 className='text-center text-primary mt-5'>Item:{item.name}</h2>
            {/* <h2 className='text-center text-primary'>Name:{name}</h2>
            <h2 className='text-center text-primary'>Price:{price}</h2> */}
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