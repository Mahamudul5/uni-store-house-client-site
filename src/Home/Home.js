import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import OurServices from '../OurServices/OurServices';
import Network from '../Network/Network';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <OurServices></OurServices>
            <Network></Network>


        </div>
    );
};

export default Home;