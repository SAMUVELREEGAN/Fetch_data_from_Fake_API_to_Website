import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { useParams } from "react-router-dom";
import pic from "../assets/load.gif";
import { Container, Row, Col } from "react-bootstrap";

const SingleProduct = () => {
    const [Product, setProduct] = useState([]);
    const [inCart, setInCart] = useState(false);
    const [count, setCount] = useState(1);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products");
                setProduct(response.data);
            } catch (error) {
                alert(error);
            }
        };
        fetchData();
    }, []);

    const OneProduct = Product.find((pro) => pro.id.toString() === id);

    return (
        <div>
            {OneProduct ? (
                <Container className="py-4">
                    <Row className="justify-content-center align-items-center g-5">
                        <Col md={5} xs={10}>
                            <div style={{ height: "300px", width: "100%", boxShadow: "0 0px 10px #efefef", padding: "20px", }} >
                                <img src={OneProduct.image} alt="Product" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                            </div>
                        </Col>
                        <Col md={6} xs={11}>
                            <h4 className="text-uppercase text-muted">{OneProduct.category}</h4>
                            <h5 className="fw-bold my-2">{OneProduct.title}</h5>
                            <p>
                                <span className="fw-bold">₹{OneProduct.price}</span>{" "}
                                <del className="text-muted">₹{(OneProduct.price + 3).toFixed(2)}</del>
                            </p>

                            <div className="mb-3">
                                {!inCart ? (
                                    <button onClick={() => setInCart(true)} className="subscribe" >
                                        Add to Cart
                                    </button>
                                ) : (
                                    <div style={{ display: "flex", alignItems: "center", gap: "10px", border: "1px solid #ccc", width: "fit-content", }} >
                                        <button
                                            onClick={() => setCount(prev => Math.max( prev - 1))}
                                            style={{ border: "none", fontWeight: "bold" ,background:"none"}} >
                                           <h3 style={{paddingLeft:"5px"}}>-</h3>
                                        </button>

                                        <span style={{ minWidth: "20px", textAlign: "center" }}>{count}</span>
                                        <button
                                            onClick={() => setCount(prev => prev + 1)}
                                            style={{ border: "none", padding: "0px 2px", fontWeight: "bold" ,background:"none" }} >
                                             <h3  style={{paddingRight:"5px"}}>+</h3>
                                        </button>
                                    </div>
                                )}
                            </div>

                            {OneProduct.rating && (
                                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <div
                                        style={{
                                            backgroundColor: "#15803D", color: "white", padding: "3px 6px", borderRadius: "4px", display: "flex", alignItems: "center",
                                        }}  >
                                        {OneProduct.rating.rate}
                                        <MdOutlineStar style={{ marginLeft: "4px" }} />
                                    </div>
                                    <small className="text-muted">
                                        ({OneProduct.rating.count} reviews)
                                    </small>
                                </div>
                            )}
                        </Col>
                    </Row>
                </Container>
            ) : (
                <div style={{ textAlign: "center", padding: "50px" }}>
                    <img src={pic} alt="loading..." style={{ width: "80px" }} />
                </div>
            )}
        </div>
    );
};

export default SingleProduct;
