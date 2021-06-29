import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
import Loading from '../components/Loading'
import ErrorMessage from '../components/Message'
import { listProductDetails } from '../actions/productActions'

const ProductScreen = ({ match }) => {
    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(()=>{
        dispatch(listProductDetails(match.params.id))
    },[dispatch,match])
    return (
        <>
            <Link className='btn btn-light my-3' to='/'>
                Go Back
        </Link>
        {loading ? <Loading /> : error ? <ErrorMessage variant='danger' >{error}</ErrorMessage> :
        (
            <Row>
                <Col md={6}>
                    <Image width={'100%'} height={'100%'}  src={product.image} alt={product.name} fluid />
                </Col>

                <Col md={3}>
                    <ListGroup variant='flush'>

                        <ListGroup.Item>
                            <h2>{product.name}</h2>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup Varient='flush'>

                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price:
                                    </Col>
                                    <Col>
                                        <strong> ${product.price} </strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status:
                               </Col>

                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                                <Button className='btn-block'style={{margin:10}} type='button' disabled={product.countInStock === 0}>
                                    Add To Cart
                                </Button>   
                        </ListGroup>
                    </Card>

                </Col>
            </Row>
        )
        }
        </>
    )
}

export default ProductScreen
