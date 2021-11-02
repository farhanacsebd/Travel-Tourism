import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Travel from '../Travel/Travel';

const TravelServices = () => {
    {
        const [travels, setTravel] = useState([])
        useEffect(() => {
            fetch('https://immense-depths-46109.herokuapp.com/services')
                .then(res => res.json())
                .then(data => setTravel(data))
        }, [])
        return (
            <div className="py-5">


                {
                    travels.length ?
                        <Container>
                            <h1 style={{ fontSize: "3rem" }} className="text-center pb-3">Most Provided Services</h1>

                            <Row xs={1} md={3} className="g-4">
                                {
                                    travels.map(travel => <Travel key={travel.id} travel={travel}></Travel>)
                                }
                            </Row>
                        </Container>

                        : <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>


                }

            </div>
        );
    };

    return (
        <div>

        </div>
    );
};

export default TravelServices;