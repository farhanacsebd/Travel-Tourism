import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Accordion from './Accordion/Accordion';
import Covid from '../Banner/Covi';
import Stuff from '../Stuff/Stuff';
import Branch from './Branch/Branch';
import TravelServices from './TravelServices/TravelServices';
import { Spinner } from 'react-bootstrap';

const Home = () => {
    const [travels, setTravel] = useState([])
    useEffect(() => {
        fetch('https://immense-depths-46109.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setTravel(data))
    }, [])




    return (
        <div>
            {
                travels.length ? <div>
                    <Banner />
                    <Covid></Covid>
                    <TravelServices />
                    <Branch />
                    <Accordion></Accordion>
                    <Stuff></Stuff>
                </div> : <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }
        </div>
    );
};

export default Home;