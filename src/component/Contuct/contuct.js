import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
const Contuct = () => {
    return (
        <>
            {/* about page heading start */}

            <div className="aboutackdround">
                <h1 className="mb-1 text-center pt-3"><span style={{ fontSize: '3rem' }}>Contact us</span></h1>
            </div>

            {/* about page heading end */}

            <Container className="text-center">
                <div className="row py-5">
                    <div className="col-12 col-md-6">
                        <div className="text-center"> <br /><br />
                            <h4 className='mb-3 fw-bold'>Contact Information</h4>

                            <p>H#12/A, Road#02, Katalganj R/A, Panchlaish, Dhaka

                                Phone : +0233445; For Serial : +918610115,01886610116; Customer Care: +86610117 (7:00 AM to 11:00 PM)

                                Email: travelbook1238@gmail.com</p>
                            <p>House# Maa Plaza, Kadomtoli Mor, Zinzira, Keranijanj, Dhaka-1310

                                Phone: +0233445; For Serial : +918610115,01886610116; Customer Care: +86610117

                                Email: travelcity@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="text-center">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7304.085114750279!2d90.3664205848533!3d23.74586176457309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1638025942271!5m2!1sen!2sbd"
                                width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>

                </div>

                <div className="w-75 mx-auto text-start py-5">
                    <h5 className='m-3 text-center fw-bold'>You can Contact with us-</h5>
                    <Form>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Container>
        </>
    );
};

export default Contuct;