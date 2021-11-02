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
                    <h6>GET A WORLD CLASS Travel & Tourism</h6>
                    <p className="w-75 mx-auto">Care Hospital has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality. The hospital is a showcase of synergy of medical technology and advances in ICT Division through paperless medical records. The skilled nurses, technologists and administrators of Bangladesh Specialized Hospital, aided by state-of-the-art equipments, provide a congenial infrastructure for the medical professionals in providing healthcare of international standards.</p>
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