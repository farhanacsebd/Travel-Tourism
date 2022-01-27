import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import "./Login.css"

const Login = () => {
    const { error, handleGoogleSign } = useAuth()
    return (
        <Container>
            <div className="">
                <div className="py-5">
                    <div className="picture mt-5 mx-auto d-flex align-items-center justify-content-center shadow-lg">
                        <div className='m-5'>
                            <h1 className="fw-bold text-dark ">Please signup</h1><br />
                            <Button onClick={handleGoogleSign} className="btn btn-warning text-white fw-bold" variant="warning" type="button">
                                Sign In Google
                            </Button>
                            <p>{error}</p>

                        </div>


                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Login;