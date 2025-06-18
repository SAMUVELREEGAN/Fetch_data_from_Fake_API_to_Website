import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PiSquaresFour } from "react-icons/pi";
import { CiBoxList } from "react-icons/ci";
import axios from "axios";
import Item from "./Item";

const Product = () => {
  const [Product, setProduct] = useState([]);
  const [layout, setLayout] = useState("grid");
  const [sortOption, setSortOption] = useState("Featured");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProduct(response.data);
      } catch (err) {
        alert(err);
      }
    };
    fetchData();
  }, []);

  const sortedProducts = [...Product].sort((a, b) => {
    switch (sortOption) {
      case "Price, high to low":
        return b.price - a.price;
      case "Price, low to high":
        return a.price - b.price;
      case "Alphabetically, A-Z":
        return a.title.localeCompare(b.title);
      case "Alphabetically, Z-A":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  return (
    <div>
      <Container className="p-0 mt-5">
        <div className="product_sort_header">
          <div className="icon_group px-2">
            <PiSquaresFour size={22} onClick={() => setLayout("grid")} color={layout === "grid" ? "#f18700" : "#aaa"} style={{ cursor: "pointer", marginRight: "8px" }} />
            <CiBoxList size={22} onClick={() => setLayout("list")} color={layout === "list" ? "#f18700" : "#aaa"} style={{ cursor: "pointer" }} />
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "end" }}  className="product_sort_detail" >
            <div className="result_text px-2">Showing - 20 result</div>

            <div className="sort_dropdown">
              <label htmlFor="sortSelect">Sort by</label>
              <select id="sortSelect" name="featured" style={{ background: "transparent" ,}}  value={sortOption}  onChange={(e) => setSortOption(e.target.value)}  >
                <option>Featured</option>
                <option>Price, high to low</option>
                <option>Price, low to high</option>
                <option>Alphabetically, A-Z</option>
                <option>Alphabetically, Z-A</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <Row className="g-3 g-md-4">
            {sortedProducts.map((e, index) => (
              <Col lg={layout === "grid" ? 3 : 12} md={layout === "grid" ? 6 : 12} sm={layout === "grid" ? 6 : 12}  xs={layout === "grid" ? 6 : 12} key={index} >
                <Item product={e} layout={layout} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Product;
