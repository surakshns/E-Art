import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
    return (
        <Card style={{borderRadius:'30px'}} className='my-3 cardd'>
            <Link to={`/product/${product._id}`}>
                <Card.Img style={{borderTopLeftRadius:'30px',borderTopRightRadius:'30px'}} width={'100%'} height={'250px'} src={product.image} varient='top' />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as='div'>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </Card.Text>

                <Card.Text as='h3'> Rs. {product.price}</Card.Text>
                <Card.Text as='p'>Artist: {product.brand}</Card.Text>
            </Card.Body>
        </Card >
    )
}

export default Product
