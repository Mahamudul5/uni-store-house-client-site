import React, { useEffect, useState } from 'react';
import Item from './Item';
import './Inventory.css';

const Inventory = () => {
    const [Inventory, setInventory] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setInventory(data));
    }
        , [])
    return (
        <div>
            <h1 className='text-center text-primary'>Inventory</h1>

            <div className='Item-card'>

                {
                    Inventory.map(item => <Item
                        key={item.id}
                        item={item}
                    ></Item>)}

            </div>
        </div>
    );
};

export default Inventory;