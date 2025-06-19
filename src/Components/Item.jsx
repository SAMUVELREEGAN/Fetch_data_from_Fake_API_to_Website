import { MdOutlineStar } from "react-icons/md";
import { Link } from "react-router-dom";

const Item = ({ product, layout }) => {
  return (
    <Link to={`/shop/${product.id}`} style={{ textDecoration: "none", color: "black" }}>
      <div className={`pro_all ${layout === "list" ? "list_layout" : ""}`}>
        <div className="pro_img">
          <img src={product.image} alt="" />
        </div>
        <div className="pro_info">
          <p style={{
            // fontSize: "14px",
            color: "black",
            padding: "0px 15px",
            // fontWeight: "bold",
            // height: "45px"
          }} className="pro_info_title">
            {product.title}
          </p>
          <p>₹{product.price}/-</p>
          <div style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center"
          }}>
            <div style={{
              backgroundColor: "#15803D",
              padding: "2px 5px",
              color: "white",
              borderRadius: "2px",
              marginRight: "5px"
            }}>
              {product.rating.rate}
              <span style={{ fontSize: "13px" }}>
                <MdOutlineStar style={{ marginTop: "-5px" }} />
              </span>
            </div>
            <div>({product.rating.count} reviews)</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
