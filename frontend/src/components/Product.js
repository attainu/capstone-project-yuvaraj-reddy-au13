import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating';
import './product.css';
// import product from '../Products/products';


const Product = ({product}) => {
    // console.log(product)
    return (
        <Link to={`/product/${product.id}`}>
        <Card className="my-3 p-3 rounded card">
            <Container fluid>
                <Card.Img className="incard" src={product.image} variant='top' />
                {/* <img src='../public/images/canon.png' alt="pic" /> */}
            </Container>

        <Card.Body className="card-body">
            <Link to={`/product/${product.id}`}>
            <Card.Title>
                <strong>{product.name}</strong>
            </Card.Title>
            </Link> 

            <Card.Text as="div">
                    <Rating value={product.ratings} text={` from ${product.numReviews} Reviews`} />
            </Card.Text>

            <Card.Text as='h3'>
                <div>&#8377; {product.price}</div>
            </Card.Text>
        </Card.Body>       
        </Card>
        </Link> 
        
    )
}

export default Product
