import { Link, useLocation } from "react-router-dom";


const NavSection2 = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const getLinkStyle = (path) => ({
    textDecoration: "none",
    color: isActive(path) ? "orangered" : "white",
  });

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
        <Link style={getLinkStyle("/")} to="/">Home</Link>
        <Link style={getLinkStyle("/about")} to="/about">About Us</Link>
        <Link style={getLinkStyle("/shop")} to="/shop">Shop</Link>
        <Link style={getLinkStyle("/contact")} to="/contact">Contact Us</Link>
        <Link style={getLinkStyle("/order")} to="/order">My Orders</Link>
      </div>
    </div>
  );
};

export default NavSection2;
