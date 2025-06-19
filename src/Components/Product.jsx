import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
// import { Col, Container, Row } from "react-bootstrap";
import { PiSquaresFour } from "react-icons/pi";
import { CiBoxList } from "react-icons/ci";
import axios from "axios";
import Item from "./Item";
// import pic from "../assets/load.gif";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [layout, setLayout] = useState("grid");
  const [sortOption, setSortOption] = useState("Featured");
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); 
        const response = await axios.get("https://fakestoreapi.com/products");
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        alert(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const sortedProducts = [...product].sort((a, b) => {
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
            <PiSquaresFour
              size={22}
              onClick={() => setLayout("grid")}
              color={layout === "grid" ? "#f18700" : "#aaa"}
              style={{ cursor: "pointer", marginRight: "8px" }}
            />
            <CiBoxList
              size={22}
              onClick={() => setLayout("list")}
              color={layout === "list" ? "#f18700" : "#aaa"}
              style={{ cursor: "pointer" }}
            />
          </div>

          <div
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "end" }}
            className="product_sort_detail"
          >
            <div className="result_text px-2">
              {loading
                ? "Loading..."
                : `Showing - ${sortedProducts.length} result`}
            </div>

            <div className="sort_dropdown">
              <label htmlFor="sortSelect">Sort by</label>
              <select
                id="sortSelect"
                name="featured"
                style={{ background: "transparent" }}
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
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
          {loading ? (
            <div className="text-center my-5">
             <Spinner animation="border" variant="warning" style={{padding:"30px"}} />
            </div>
            //  <div style={{ textAlign: "center", padding: "50px" }}>
            //         <img src={pic} alt="loading..." style={{ width: "120px" }} />
            //     </div>
          ) : (
            <Row className="g-3 g-md-4">
              {sortedProducts.map((e, index) => (
                <Col
                  key={index}
                  lg={layout === "grid" ? 3 : 12}
                  md={layout === "grid" ? 6 : 12}
                  sm={layout === "grid" ? 6 : 12}
                  xs={layout === "grid" ? 6 : 12}
                >
                  <Item product={e} layout={layout} />
                </Col>
              ))}
            </Row>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Product;
