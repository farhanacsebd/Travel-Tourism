import React from 'react';
import Banner from '../Banner/Banner';
import Accordion from './Accordion/Accordion';
import Covid from '../Banner/Covi';
import Stuff from '../Stuff/Stuff';
import Branch from './Branch/Branch';
import Doctors from './Doctors/Doctors';

const Home = () => {

    return (
        <div>
            <Banner />
            <Covid></Covid>
            <Branch />
            <Doctors />
            <Accordion></Accordion>
            <Stuff></Stuff>

        </div>
    );
};

export default Home;