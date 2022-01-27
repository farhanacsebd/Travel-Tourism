import React from 'react';
import { Accordion, Card, Col, Container, Nav, Row } from 'react-bootstrap';
import "./about.css"
const About = () => {
    return (
        <>
            {/* about page heading start */}

            {/* <div className="aboutBackdround">
                <h1 className="mb-1 text-light text-center pt-5 fw-bold"><span style={{ fontSize: '5rem' }}>About Us</span></h1>
            </div> */}

            {/* about page heading end */}

            <Container className="text-center">

                <div className="text-center pb-5">
                    <h1 className='mt-3'>Travel & Tourism</h1>
                    <h6 className='fw-bold'>GET A WORLD CLASS Travel & Tourism</h6>
                    <p className="w-75 mx-auto">Trip world is a rapidly-growing global online travel agency, Trip.com is here to help you plan the perfect trip. Whether you're going on holiday, taking a business trip, or looking to set up a corporate travel account, Trip.com is here to help you travel the world with cheap flights, discount hotels, and train tickets. Looking to find great travel deals or enjoy the biggest savings on your next trip? Trip.com has you covered. With our easy-to-use website and app, along with 24-hour customer service, booking your next trip couldn't be simpler. With Trip.com, quality travel services in over a dozen languages including English, Mandarin, Cantonese, Japanese, Korean, German, French, and Spanish are just a call—or click—away.Easily Customize Your Trip with the Best Hotel and Flight Deals It's easy to customize your travel experience with our robust flight and hotel search filter options and Trip.com travel tools like flight fare alerts, deal-finder calendar, and early bird deals. Trip.com's secure payment system takes the stress out of travel by providing easy payment options, including credit and debit cards, and UnionPay.Featured Hotel DestinationsHotels in Shanghai.</p>
                </div>
                <div className="text-center pt-5">
                    <h1 className='text-info '>GOAL & MISSION</h1>

                    <Container>
                        <Row xs={1} md={3} className="g-4 pb-5">
                            {/* dynamically load card start  */}
                            <Col>
                                <div className="carD">
                                    <Card.Body>
                                        <h4 className='text-primary'>WELCOME TO TT</h4>
                                        <p>Travel & Tourism has all the characteristics of a world-class Tourism company with wide range of services, equipments and technology, ambience and service quality.


                                        </p>
                                    </Card.Body>
                                </div>
                            </Col>
                            <Col>
                                <div className="carD">
                                    <Card.Body>
                                        <img className="w-100 img-fluid" src="https://familyvacationist.com/wp-content/uploads/2021/05/8DyRRR_t20_Ym7EEE-scaled-e1621982380588.jpg" alt="" />
                                    </Card.Body>
                                </div> </Col> <Col>
                                <div className="carD">
                                    <Card.Body>
                                        <h5 className='text-primary'>OUR MISSION</h5>
                                        <p>We are dedicated to meeting the needs of: <br />

                                            1.Our patient : excellent and cost-effective travel. <br />
                                            2.Our staff : continuing development and welfare. <br />
                                            3.Our nation : partnership in promoting tourism in Bangladesh.</p><br />
                                        <h5 className='text-primary'>OUR VISION</h5>
                                        <p>
                                            "To be a renowned organization at the leading edge of travel & tourism, providing quality best aspirations."</p>
                                    </Card.Body>
                                </div>
                            </Col>
                            {/* dynamically load card start  */}
                        </Row>
                    </Container>
                </div>

            </Container>
        </>
    );
};

export default About;