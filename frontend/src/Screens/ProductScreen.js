import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    Row,
    Col,
    Form,
    Image,
    Card,
    Button,
    Container,
    ListGroup,
    ListGroupItem,Alert
} from "react-bootstrap";
import Rating from "../components/Rating";
import axios from 'axios';

// import { listProductDetails } from "../actions/productActions";

import "./productScreen.css";

import { addToCart } from '../actions/cartActions'

const ProductScreen = ({ history ,match }) => {
    const [product, setProduct] = useState([])

    const [qty, setQty] = useState(1)

    const dispatch = useDispatch();

    // const productDetails = useSelector(state => state.productDetails)

    // const { product, loading, error } = productDetails;

    // console.log(match)

    useEffect(()=>{
        const fetchProduct = async () =>{
            
            const { data } = await axios.get(`/api/products/${match.params.id}`)
            

            setProduct(data)
            

        }
        fetchProduct()
        // dispatch(listProductDetails(match.params.id))
    }, [match, dispatch])

    const addToCartHandler = () => {
        if(qty > 0 & product.countInStock >= qty){
        history.push(`/cart/${match.params.id}?qty=${qty}`)
        }
    }
    // const addToCartHandler = () => {
    //     dispatch(addToCart(product, qty))
    //     history.push(`/cart/${match.params.id}?qty=${qty}`)
    // }

    


    // const product = []

    return (
        <>
            <Link className="btn btn-light my-3" to="/">
                Go Back
            </Link>

            <Card>
            <Row className="image">
                <Col md={6}>
                    <Card className="my-5">
                        <Container>
                            <Image
                                src={product.image}
                                alt={product.name}
                                fluid
                                className="image"
                            />
                        </Container>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h3> &#8377; {product.price}</h3>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Rating
                                    value={product.ratings}
                                    text={`${product.numReviews} reviews`}
                                />
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <strong> Description : </strong>{" "}
                                {product.description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroupItem>
                                <Row>
                                    <Col> Price :</Col>
                                    <Col>
                                        {" "}
                                        <strong>
                                            {" "}
                                            &#8377;{product.price}{" "}
                                        </strong>{" "}
                                    </Col>
                                </Row>
                            </ListGroupItem>

                            <ListGroupItem>
                                <Row>
                                    <Col> Status :</Col>
                                    <Col>
                                        {" "}
                                        {product.countInStock > 0
                                            ? "In Stock"
                                            : "Out Of Stock"}
                                    </Col>
                                </Row>
                            </ListGroupItem>

                            {product.countInStock > 0 && (
                                <ListGroupItem>
                                    <Row>
                                        <Col>Qty : </Col>
                                        <Col>
                                            <Form.Control value={qty} onChange={(e) => setQty(e.target.value)}>
                                                
                                                    {/* {[...Array(product.countInStock).keys()].map(x => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option> */}
                                                    {/* ))} */}
                                                    {/* {
                                                        (qty > product.countInStock ? <span>items out of stock plese select less items</span> : <span>{product.countInStock}</span>)
                                                    } */}
                                                
                                            </Form.Control>
                                            
                                        </Col>

                                        <Col>
                                            {(qty > product.countInStock ? <Alert variant={'danger'}>items out of stock plese select less items</Alert> : <span>Items in Stock : {product.countInStock}</span>)}
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                            )}

                            <ListGroupItem>
                                <Row>
                                    <Button
                                        onClick={addToCartHandler}
                                        className="btn-block btn-warning"
                                        type="button"
                                        disabled={product.countInStock === 0}
                                    >
                                        Add To Cart
                                    </Button>
                                </Row>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            </Card>
        </>
    );
};

export default ProductScreen;

























