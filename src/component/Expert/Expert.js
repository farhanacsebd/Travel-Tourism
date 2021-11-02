import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Expert = ({ expert }) => {
    const { name, img, expertize, email } = expert;
    return (
        <Col>
            <Card style={{ margin: '3px' }}>
                <Card.Img style={{ height: '15rem' }} variant="top" src={img} />
                <Card.Body className="cBody">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='text-center'>{expertize}</Card.Text>
                    <Card.Text className='text-center'><small>{email}</small></Card.Text>
                    <Button className="text-white btn btn-warning" variant="primary">More...</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Expert;