import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Travel.css'


const Travel = ({ travel }) => {
    const { address, img, _id, description } = travel

    const history = useHistory()
    const viewDetails = () => {
        history.push(`/details/${_id}`)
    }

    return (
        <Col>
            <Card className='service-cart' style={{ margin: '3px' }}>
                <Card.Img style={{ height: '15rem' }} variant="top" src={img} />
                <Card.Body className="cBody">
                    <Card.Title>{address}</Card.Title>
                    <Card.Text>{description.slice(0, 80)}</Card.Text>
                    <div className="d-flex align-items-center justify-content-between">
                        <Button onClick={viewDetails} className="">More Details</Button>
                        <div>
                            <span><i class="fas fa-heart mx-2 fs-3 text-danger"></i><i class="fas fa-thumbs-up mx-2 fs-3 text-primary"></i><i class="fas fa-thumbs-down mx-2 fs-3 text-dark"></i></span>
                        </div>
                    </div>
                </Card.Body>
            </Card>


        </Col>
    );
};


export default Travel;