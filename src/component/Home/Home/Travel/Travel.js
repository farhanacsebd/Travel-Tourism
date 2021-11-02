import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';


const Travel = ({ travel }) => {
    const { name, img, _id, description } = travel

    const history = useHistory()
    const viewDetails = () => {
        history.push(`/details/${_id}`)
    }

    return (
        <Col>
            <Card style={{ margin: '3px' }}>
                <Card.Img style={{ height: '15rem' }} variant="top" src={img} />
                <Card.Body className="cBody">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description.slice(0, 80)}</Card.Text>
                    <Button onClick={viewDetails} className="">More Details</Button>
                </Card.Body>
            </Card>


        </Col>
    );
};


export default Travel;