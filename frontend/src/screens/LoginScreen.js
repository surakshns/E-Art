import React, { useState, useEffect, Children } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Message'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'


const LoginScreen = ({ location }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const submitHandler = (e) => {
        e.preventDefault()
        //DISPATCH LOGIN
    }
    return (
        <Container>
            <h1> Sign In </h1>

            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label> Email Address </Form.Label>
                    <Form.Control type='email' placeholder='Enter email' value={email}>
                        onChange={(e) => setEmail(e.target.value)}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label> Password </Form.Label>
                    <Form.Control type='password' placeholder='Enter email' value={email}>
                        onChange={(e) => setPassword(e.target.value)}
                    </Form.Control>
                </Form.Group>

                <Button type='submit' varient='primary'>
                    Sign In
                </Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    New Customer?{''}
                    <link to={redirect ? '/register?redirect=${redirect' : '/register'}>
                        Register
                    </link>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginScreen
