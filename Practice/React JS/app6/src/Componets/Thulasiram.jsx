import React, { useState, useEffect } from 'react';
import { Button, Container, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const FacebookLoginPage = () => {
    const { isAuthenticated, loginWithRedirect } = useAuth0();
    const history = useHistory();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(actions.loadUser());
            history.push('/profile');
        }
    }, [isAuthenticated, dispatch, history]);

    const handleFacebookLogin = () => {
        loginWithRedirect();
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Button variant="outline-primary" onClick={handleFacebookLogin}>
                        Login with Facebook
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default FacebookLoginPage;