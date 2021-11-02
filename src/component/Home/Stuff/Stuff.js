import React from 'react';
import { Accordion, Card, Col, Container, Row } from 'react-bootstrap';
import './Stuff.css'

const Stuff = () => {
    return (
        <div className="py-5">
            <h3 style={{ fontSize: "3rem" }} className="fw-blod">Gallery</h3>
            <Container>
                <Row xs={1} md={3} className="g-1 pb-5">
                    {/* dynamically load card start  */}
                    <Col>
                        <div className="carD">
                            <Card.Body>
                                <img className='w-100 img-fluid' src="https://i.ibb.co/6vcgnQx/santorini-greece-santorini-greece-wallpaper-preview.jpg" alt="" />
                            </Card.Body>
                        </div>
                        <div className="carD">
                            <Card.Body>
                                <img className='w-100 img-fluid' src="https://i.ibb.co/xqs3JXf/railay-thailand-1200x832.jpg" alt="" />
                            </Card.Body>
                        </div>
                    </Col>
                    <Col>
                        <div className="carD">
                            <Card.Body>
                                <img className='w-100 img-fluid' src="https://i.ibb.co/pK53WjS/MALDIVES.jpg" alt="" />
                            </Card.Body>
                        </div>
                        <div className="carD">
                            <Card.Body>
                                <img className='w-100 img-fluid' src="https://i.ibb.co/K2Q43jD/amsterdam-evening-canal-cruise.jpg" alt="" />
                            </Card.Body>
                        </div>
                    </Col>
                    <Col>
                        <div className="carD">
                            <Card.Body>
                                <img className='w-100 img-fluid' src="https://i.ibb.co/2PJJq2b/7a37fcf8bada44ce27b266db2667d664.jpg" alt="" />
                            </Card.Body>
                        </div>
                        <div className="carD">
                            <Card.Body>
                                <img className='w-100 img-fluid' src="https://i.ibb.co/GfZKxHn/santorini-houses-in-greece-santorine-greece-wallpaper-preview.jpg" alt="" />
                            </Card.Body>
                        </div>
                    </Col>
                    {/* dynamically load card start  */}
                </Row>
            </Container>
        </div>
    );
};

export default Stuff;