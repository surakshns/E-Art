import React,{useEffect,useState} from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Loading from '../components/Loading'
import ErrorMessage from '../components/Message'
import {useDispatch,useSelector} from 'react-redux'
import { listProduct } from '../actions/productActions'

const HomeScreen = () => {
    const dispatch = useDispatch()

    const productList = useSelector (state => state.productList)
    const {loading,error,products}=productList

    useEffect(()=>{
        dispatch(listProduct())
    },[dispatch])

    return (
        <>
            <h1> Latest Drawings </h1>
            {
                loading ? <Loading /> : error ? <ErrorMessage variant='danger' >{error}</ErrorMessage>  : 
                (
                <Row>
                    {products.map((product) => (

                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>   
                )}
        </>
    )
}

export default HomeScreen
