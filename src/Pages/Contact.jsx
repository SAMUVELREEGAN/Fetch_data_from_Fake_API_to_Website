import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { SlSocialYoutube } from "react-icons/sl";

const Contact = () => {
  return (
    <div>
     
        <div style={{backgroundColor:"#efefef" , padding:"60px 0px"}}>
                   <Container style={{display:"flex" , justifyContent:"space-between"}}>
                     <h1 style={{ fontFamily: "'Times New Roman', Times, serif" }}>CONTACT US</h1>
                   <div>
                    <a href="/" style={{color:"orangered" , textDecoration:"none"}} className='me-0  me-md-0'>Home </a>/<span className='ms-1'> CONTACT US</span>
                   </div>
                   </Container>
                </div>
      
      <Container >
       <Row className="gy-2 gx-4"> 
  <Col md={4}>
    <div className="contact_container">
      <h4>Contact Info</h4>
      <table>
        <tbody>
          <tr>
            <th style={{ verticalAlign: "top", padding: "15px 10px 15px 0" }}>Phone :</th>
            <td style={{ padding: "15px 0" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>+012 345 678 102</span>
                <span>+012 345 678 103</span>
              </div>
            </td>
          </tr>
          <tr>
            <th style={{ verticalAlign: "top", padding: "15px 10px 15px 0" }}>Email :</th>
            <td style={{ padding: "15px 0" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>urname@email.com</span>
                <span>urname@email.com</span>
              </div>
            </td>
          </tr>
          <tr>
            <th style={{ verticalAlign: "top", padding: "15px 10px 15px 0" }}>Address :</th>
            <td style={{ padding: "15px 0" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>Address goes here,</span>
                <span>street, Crossroad 123.</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <h4 style={{fontWeight:"bold" ,margin:"14px 0px"}}>Follow Us</h4>
      <div>
        <FiFacebook className='contact_icons' />
        <FiTwitter className='contact_icons' />
        <FaInstagram className='contact_icons' />
        <SlSocialYoutube className='contact_icons' />
      </div>
    </div>
  </Col>

  <Col md={8}>
    <div className="contact_container">
      <h4>Get In Touch</h4>
      <table style={{ width: "100%" }}>
        <tbody>
         <tr className="d-flex flex-wrap">
  <td className="col-12 col-md-6 p-2">
    <input
      type="text"
      placeholder="Your Name*"
      style={{ width: "100%", padding: "10px" }}
    />
  </td>
  <td className="col-12 col-md-6 p-2">
    <input
      type="text"
      placeholder="Your Email*"
      style={{ width: "100%", padding: "10px" }}
    />
  </td>
</tr>

          <tr>
            <td colSpan={2} style={{ padding: "10px" }}>
              <input type="text" placeholder="Subject" style={{ width: "100%", padding: "10px" }} />
            </td>
          </tr>
          <tr>
            <td colSpan={2} style={{ padding: "10px" }}>
              <textarea placeholder="Message" rows="4" style={{ width: "100%", padding: "10px" }}></textarea>
            </td>
          </tr>
          <tr>
            <td colSpan={1} style={{ padding: "10px", textAlign: "left" }}>
              <button>Send</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Col>
</Row>



      </Container>
    </div>
  )
}

export default Contact