import React from 'react';
import Item from '../Inventory/Item';
import '../Inventory/Inventory.css';
import useData from '../CustomHooks/useData';

const ManageInventory = () => {
    const [Inventory] = useData();
    return (
        <div>
            <h1 className='text-center text-primary'> Manage Inventory</h1>
            <div className='Item-card'>
                {
                    Inventory.map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)}
            </div>
        </div>
    );
};

export default ManageInventory;