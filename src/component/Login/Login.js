import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { handleEmail, handlePass, error, loggIn, handleGoogleSign } = useAuth()
    return (
        <Container>
            <div className="">
                <div className="py-5">
                    <div className="bg-secondary rounded w-25 mx-auto">
                        <Button onClick={handleGoogleSign} className="btn btn-primary m-5" variant="warning" type="button">
                            Sign In Google
                        </Button>
                        <p>{error}</p>


                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Login;