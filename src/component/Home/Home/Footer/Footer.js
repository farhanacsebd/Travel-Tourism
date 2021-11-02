import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        // footer start 
        <div className="bg-custom text-light text-center pt-5 cusFooter">
            <Container className="footerGrid">
                <div>
                    <h3 className="text-start">Use full links</h3>
                    <ul className="d-block p-0 m-0">
                        <li>You can find us in online</li>
                        <li>Contact with us</li>
                        <li>[ Hotline - 10633 ]</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-start">QUICK LINKS</h3>
                    <ul className="d-block p-0 m-0">
                        <li>News and Medias</li>
                        <li>Facilities</li>
                        <li>MRD SERVICES</li>

                    </ul>
                </div>

                <div>
                    <h3 className="text-start">GET US</h3>
                    <ul className="d-block p-0 m-0">
                        <li> 21 Shyamoli, Mirpur Road, Dhaka-1207, Bangladesh</li>


                    </ul>
                </div>
            </Container>
            <p className="text-center p-3 m-0">Copyright © 2021. All Rights Reserved by Farhana Binte Hasan. </p>
        </div>

        // footer end 
    );
};

export default Footer;