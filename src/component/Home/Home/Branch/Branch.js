import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Branch = () => {
    return (
        <div className="py-5">
            <Container>
                <h1 style={{ fontSize: "3rem" }} className="text-center ">Get inspiration for your next trip</h1>
                <h5>Explore more destinations</h5><p className="text-center pb-5">Find things to do in cities around the world
                </p>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src="https://images.unsplash.com/photo-1569949380643-6e746ecaa3bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" className="w-100" />
                    </div>
                    <div className="col-12 col-md-6 text-start">
                        <img src="https://images.unsplash.com/photo-1519112232436-9923c6ba3d26?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlc3RpbmF0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80https://images.unsplash.com/photo-1519112232436-9923c6ba3d26?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlc3RpbmF0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" className="w-100" />

                    </div>
                </div>
            </Container>
            <Container>
                <Row xs={1} md={3}>
                    {/* dynamically load card start  */}
                    <Col>
                        <div className="carD">
                            <Card.Body>
                                <img className='w-100 img-fluid' src="https://i.ibb.co/TrCQ117/wallpaper2you-107533.jpg" alt="" />
                            </Card.Body>
                        </div>

                    </Col>
                    <Col>
                        <div className="carD">
                            <Card.Body>
                                <img className='w-100 img-fluid' src="https://i.ibb.co/X3cGF40/wallpaper2you-101087.jpg" alt="" />
                            </Card.Body>
                        </div>

                    </Col>
                    <Col>
                        <div className="carD">
                            <Card.Body>
                                <img className='w-100 img-fluid' src="https://i.ibb.co/fX7kCKG/pexels-simon-berger-1070386.jpg" alt="" />
                            </Card.Body>
                        </div>

                    </Col>
                    {/* dynamically load card start  */}
                </Row>
            </Container>
            <Container>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src="https://cdn.wallpapersafari.com/78/94/uqRYxZ.jpg" alt="" className="w-100" />
                    </div>
                    <div className="col-12 col-md-6 text-start">
                        <img src="https://cdn.wallpapersafari.com/45/3/hzdZRl.jpg   " alt="" className="w-100" />

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Branch;