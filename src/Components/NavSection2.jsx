import { Link } from "react-router-dom";

const NavSection2 = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        overflowX: "auto",
        textAlign: "center", 
        WebkitOverflowScrolling: "touch",
      }}
    >
      <div
        style={{
          display: "inline-flex", 
          gap: "20px",
          padding: "15px 20px",
          whiteSpace: "nowrap",
        }}
        className="nav2"
      >
        <Link style={linkStyle} to="/">Home</Link>
        <Link style={linkStyle} to="/about">About Us</Link>
        <Link style={linkStyle} to="/shop">Shop</Link>
        <Link style={linkStyle} to="/contact">Contact Us</Link>
        <Link style={linkStyle} to="/order">My Orders</Link>
      </div>
    </div>
  );
};

const linkStyle = {
  textDecoration: "none",
  color: "white",
  whiteSpace: "nowrap",
  flexShrink: 0,
};

export default NavSection2;
