import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Signup = () => {

    const { handleGoogleSign, signUpp, handleName, handleEmail, handlePass, error, setError } = useAuth()
    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || '/home';

    const handleAndRedirect = () => {
        handleGoogleSign()
            .then((result) => {
                history.push(redirect_url)
            }).catch((error) => {
                setError(error.message)
            });
    }

    return (
        <Container>
            <div className="w-50 mx-auto">

                <div className="py-5 text-center">
                    <div>

                        <Button onClick={handleAndRedirect} className=" mx-3" variant="warning m-5" type="button">
                            Sign up google
                        </Button>
                        <p>{error}</p>
                        <Link to="/log">All ready registered?</Link>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Signup;