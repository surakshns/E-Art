import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const FormContainer = ({ children }) => {
    return (
        <Container>
            <Row className='justify-content-md-center'>
                <col xs={12} md={6}>
                    {children}
                </col>
            </Row>
        </Container>
    )
}
export default FormContainer
