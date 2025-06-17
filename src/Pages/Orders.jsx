import React from 'react'
import { Container } from 'react-bootstrap'

const Orders = () => {
  return (
    <div>
      <div style={{backgroundColor:"#efefef" , padding:"60px 0px"}}>
           <Container style={{display:"flex" , justifyContent:"space-between"}}>
             <h1 style={{ fontFamily: "'Times New Roman', Times, serif" }}>MY ORDERS</h1>
           <div>
            <a href="/" style={{color:"orangered" , textDecoration:"none"}} className='me-0  me-md-0'>Home </a>/<span className='ms-1'> MY ORDERS</span>
           </div>
           </Container>
        </div>
    </div>
  )
}

export default Orders