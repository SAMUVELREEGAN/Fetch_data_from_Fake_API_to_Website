import { Col, Container, Row } from 'react-bootstrap'
import { CiLocationArrow1 } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { SlSocialYoutube } from "react-icons/sl";
import { TiSocialGooglePlus } from "react-icons/ti";

const Footer = () => {
    return (
        <div style={{ backgroundColor: "black", color: "white" }} className='text-center text-md-start'>
            <Container style={{ padding: "50px 0px" }}>
                <Row>
                    <Col md={3} xs={12}>
                        <h4 style={{ fontweight: 'bold' }}>ABOUT US</h4>
                        <h6>Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</h6>
                        <div>

                            <FiFacebook className='contact_icons1' />
                            <FiTwitter className='contact_icons1' />
                            < TiSocialGooglePlus className='contact_icons1' />
                            <FaInstagram className='contact_icons1' />
                            <SlSocialYoutube className='contact_icons1' />
                        </div>
                    </Col>

                    <Col md={3} xs={6}>
                        <h4 style={{ fontweight: 'bold' }}>INFORMATION</h4>
                        <p>About Us</p>
                        <p>Delivery Information</p>
                        <p>Privacy & Policy</p>
                        <p>Terms & Condition</p>
                        <p>Manufactures</p>
                    </Col >
                    <Col md={3} xs={6}>
                        <h4 style={{ fontweight: 'bold' }}>MY ACCOUNT</h4>
                        <p>My Cart</p>
                        <p>Login</p>
                        <p>Wishlist</p>
                        <p>Checkout</p>
                    </Col>
                    <Col md={3} xs={12} className="text-center text-md-start">
                        <h4 style={{ fontWeight: 'bold' }}>NEWSLETTER</h4>

                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center",  justifyContent: "center"}} className="align-items-md-start">
                            <input type="text" placeholder="Enter your email here..." style={{ backgroundColor: "transparent", border: "1px solid white", padding: "10px 20px", width: "250px", margin: "15px 0px" ,color:"white"}} />
                            <button className="subscribe">
                                <CiLocationArrow1 /> Subscribe
                            </button>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Footer