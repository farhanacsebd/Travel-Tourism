import React from 'react';
import Banner from '../Banner/Banner';
import Accordion from './Accordion/Accordion';
import Covid from '../Banner/Covi';
import Stuff from '../Stuff/Stuff';
import Branch from './Branch/Branch';
import TravelServices from './TravelServices/TravelServices';

const Home = () => {

    return (
        <div>
            <Banner />
            <Covid></Covid>
            <TravelServices />

            <Branch />
            <Accordion></Accordion>
            <Stuff></Stuff>
        </div>
    );
};

export default Home;