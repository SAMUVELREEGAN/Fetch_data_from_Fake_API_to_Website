import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PiSquaresFour } from "react-icons/pi";
import { CiBoxList } from "react-icons/ci";
import axios from "axios";
import Item from "./Item";

const Product = () => {
  const [Product , setProduct] = useState([]);

  useEffect(()=>{
    const fetchData  = async ()=>{
      try{
        const response =await axios.get("https://fakestoreapi.com/products")
        setProduct((response).data)
      }catch(err){
        alert(err)
      }
    }
    fetchData();
  }, [])

  
  return (
    <div>
      <Container className="p-0 mt-5">
        <div className="product_sort_header">
          <div className="icon_group px-2">
            <PiSquaresFour size={22} color="#f18700" />
            <CiBoxList size={22} color="#f18700" />
          </div>

         <div style={{display:"flex",flexWrap:"wrap",justifyContent:"end"}} className="product_sort_detail">
             <div className="result_text px-2">
            Showing - 20 result
          </div>

          <div className="sort_dropdown">
            <label htmlFor="sortSelect">Sort by</label>
            <select id="sortSelect" name="featured" style={{background:"transparent"}}>
              <option>Featured</option>
              <option>Price, high to low</option>
              <option>Price, low to high</option>
              <option>Alphabetically, A-Z</option>
              <option>Alphabetically, Z-A</option>
            </select>
          </div>
         </div>
        </div>


        <div >
          <Row className="g-3 g-md-4">
            {
            Product.map((e,index)=>(
              <Col lg={3} md={6} sm={6} xs={6} key={index}>
              <Item product={e}  />
              </Col>
            ))
          }
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Product;
