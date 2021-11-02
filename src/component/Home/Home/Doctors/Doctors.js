import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Doctor from '../../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('https://immense-depths-46109.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className="py-5">
            <Container>
                <h1 style={{ fontSize: "3rem" }} className="text-center pb-3">Most Provided Services</h1>

                <Row xs={1} md={3} className="g-4">
                    {
                        doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Doctors;