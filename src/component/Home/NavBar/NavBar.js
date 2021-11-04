import React from 'react';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth'



const NavBar = () => {
  const { user, signOutt } = useAuth()
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#"><h4 className="ps-1">Travel & Tourism</h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

            {
              user.email ? <>
                <Nav.Link as={Link} to="/MyOrders">MyOrders</Nav.Link>
                <Nav.Link as={Link} to="/addNewService">Add NewService</Nav.Link>
                <Nav.Link as={Link} to="/MyBookings">Manage All orders</Nav.Link>
                <Nav.Link as={Link} onClick={signOutt} to="/log">Log out</Nav.Link>
              </> : <Nav.Link as={Link} to="/log">Log in</Nav.Link>
            }

            <Nav.Link>
              <Badge bg="light" text="dark">
                {user?.displayName || 'no user'}
              </Badge>
            </Nav.Link>
            <img style={{ height: '40px', width: '40px', borderRadius: '40px' }} src={user.photoURL || 'https://www.pinpng.com/pngs/m/302-3025490_empty-profile-picture-profile-anonymous-hd-png-download.png'} alt="" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;