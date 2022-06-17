import React, {useContext} from 'react';
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import {Context} from "../index";
import {NavLink} from "react-router-dom";

const OneItemInBasket = ({product}) => {
    const {basket, user} = useContext(Context);

    return (
        <Card key={product.id} style={{width: "100%"}} className="mb-3">
            <Card.Body>
                <Row>
                    <Col xs={4}>
                        <Image src={process.env.REACT_APP_API_URL + product.img} style={{width: "100%", maxWidth: 250}} />
                    </Col>
                    <Col xs={4}>
                        <Row>
                            <Col xs={12}>
                                <b>Title:</b> <NavLink to={`/product/${product.id}`}>{product.name}</NavLink>
                            </Col>
                        </Row>
                        <br/><br/>
                        <Row>
                            <Col xs={12}>
                                <b>Description:</b><br/><br/>
                                {product.info && product.info.length !== 0? product.info.map((info, i) => {

                                    if(i % 2 === 0 ) {
                                        return (
                                            <Row key={info.id}>
                                                <Col xs={6}>
                                                    {info.title}
                                                </Col>
                                                <Col xs={6}>
                                                    {info.description}
                                                </Col>
                                            </Row>
                                        );
                                    } else {
                                        return (
                                            <Row key={info.id} style={{backgroundColor: "lightgray"}}>
                                                <Col xs={6}>
                                                    {info.title}
                                                </Col>
                                                <Col xs={6}>
                                                    {info.description}
                                                </Col>
                                            </Row>
                                        );
                                    }

                                }) : "Description absent"}
                            </Col>
                        </Row>


                    </Col>
                    <Col xs={4}>
                        <Row>
                            <Col xs={12} className="d-flex justify-content-center">
                                {user.isAuth ? <Button variant="outline-dark" onClick={() => basket.setDeleteItemBasket(product, true)}>Delete from Cart</Button>
                                    : <Button variant="outline-dark" onClick={() => basket.setDeleteItemBasket(product)}>Delete from Cart</Button>
                                }
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col xs={12} className="d-flex justify-content-center">
                                Count:
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col xs={12} className="d-flex justify-content-center">
                                <Button variant="outline-dark" onClick={() => basket.setCountProduct(product.id, "+")}>+</Button>
                                <input className="ml-2 mr-2 pl-2 pr-2" style={{width: "30%"}} type="number" onChange={e =>basket.setCountProduct(Number(e.target.value))} value={product.count}/>
                                <Button variant="outline-dark" onClick={() => basket.setCountProduct(product.id, "-")}>-</Button>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col xs={12} className="d-flex justify-content-center">
                                Price: {(product.price * product.count).toFixed(2)} RUB
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
)};

export default OneItemInBasket;