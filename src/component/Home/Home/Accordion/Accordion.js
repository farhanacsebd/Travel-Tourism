import React from 'react';
import { Container } from 'react-bootstrap';

const Accordion = () => {
    return (
        <div>
            <Container className=" pb-5">
                <h1 style={{ fontSize: "3rem" }} className=" pb-5 text-center ">Frequently Asked Question</h1>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src="https://i.pinimg.com/474x/61/93/ea/6193ea9c910854862fc15cfc5dc29240.jpg" alt="" className="w-100 pt-2" style={{ height: "405px" }} />
                    </div>
                    <div className="col-12 col-md-6 text-start">
                        <h3>Your peace of mind is our top priority</h3>
                        <p>Here’s how we’re helping you feel confident welcoming guests:</p>
                        <p>1.Set house rules guest must agree to before they stay</p><p>2.Request damage deposits for extra security</p><p>3.Report guest misconduct if something goes wrong</p><p>4.Access 24/7 support in 43+ languages</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Accordion;