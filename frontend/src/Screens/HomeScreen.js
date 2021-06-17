import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

import Product from '../components/Product';

import { useDispatch, useSelector } from 'react-redux';

import {listProducts} from '../actions/productActions';

import Loader from '../components/Loader.js'
import Message from '../components/Message.js'

// import axios from 'axios';

const HomeScreen = () => {

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList )

    const { products, loading, error } = productList ;



    useEffect(()=>{
        dispatch(listProducts())
    }, [dispatch])

// const products = []

    return (
        <>
            <h1>Our Latest Products </h1>

            { loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : <Row>
                {products.map((product, id) =>(
                    <Col sm={12} md={6} lg={4} xl={3} key={id}>
                        <Product product={product}  />
                    </Col>
                ))
                }
                
            </Row>}

            
        </>
    )
}

export default HomeScreen;
