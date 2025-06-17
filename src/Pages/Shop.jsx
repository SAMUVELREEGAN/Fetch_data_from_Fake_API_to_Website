import React from 'react'
import Product from '../Components/Product'
import { Container } from 'react-bootstrap'

const Shop = () => {
  return (
    <div>
        <div style={{backgroundColor:"#efefef" , padding:"60px 0px"}}>
           <Container style={{display:"flex" , justifyContent:"space-between"}}>
             <h1 style={{ fontFamily: "'Times New Roman', Times, serif" }}>PRODUCTS</h1>
           <div>
            <a href="/" style={{color:"orangered" , textDecoration:"none"}} className='me-0  me-md-0'>Home </a>/<span className='ms-1'> PRODUCTS</span>
           </div>
           </Container>
        </div>
         <Product />
    </div>
  )
}

export default Shop

