import { useContext, useState, useEffect } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import { SlHandbag, SlUser } from "react-icons/sl";
import { GoSearch } from "react-icons/go";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const NavSection1 = () => {
  const { user, setUser } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cartData, setCartData] = useState([]);

  const fetchCartData = async (userId) => {
    try {
      const [cartRes, productRes] = await Promise.all([
        axios.get("https://fakestoreapi.com/carts"),
        axios.get("https://fakestoreapi.com/products"),
      ]);
      const userCart = cartRes.data.find((c) => c.userId === userId);
      const enrichedCart = userCart?.products.map((item) => {
        const product = productRes.data.find((p) => p.id === item.productId);
        return { ...product, quantity: item.quantity };
      });
      setCartData(enrichedCart || []);
    } catch (err) {
      console.error("Cart fetch error:", err);
    }
  };

  const toggleCart = async () => {
    if (user) {
      await fetchCartData(user.id);
      setCartOpen(true);
    } else {
      alert("Please login first");
    }
  };

  const handleLogin = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/users");
      const matchedUser = res.data.find(
        (u) => u.username === username && u.password === password
      );
      if (matchedUser) {
        setUser(matchedUser);
        setShowModal(false);
        setUsername("");
        setPassword("");
        await fetchCartData(matchedUser.id);
      } else {
        alert("Invalid login!");
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  const handleLogout = () => {
    setUser(null);
    setCartData([]);
    setDropdownOpen(false);
  };

  useEffect(() => {
    if (user) {
      fetchCartData(user.id);
    }
  }, [user]);

  return (
    <div>
      {/* Navbar */}
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
          position: "relative",
        }}
      >
        <h2>shopy</h2>

        {/* Right-side icons */}
        <div
          style={{
            fontSize: "27px",
            position: "relative",
            display: "flex",
            gap: "5px",
            alignItems: "center",
          }}
        >
          {/* Search Icon */}
          <GoSearch
            style={{ marginTop: "5px", cursor: "pointer", color: "orange" }}
            onClick={() => setSearchOpen(!searchOpen)}
          />{" "}
          |

          {/* User icon and dropdown */}
          <div
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            style={{ position: "relative", display: "inline-block" }}
          >
            <span style={{ cursor: "pointer" }}>
              <SlUser /> |
            </span>
            {dropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: 40,
                  background: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  zIndex: 1000,
                  padding: "10px",
                  fontSize: "15px",
                  width: "100px",
                }}
              >
                {user ? (
                  <>
                    <Link
                      to="/proflie"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      My Profile
                    </Link>
                    <p
                      style={{
                        margin: "5px 0",
                        cursor: "pointer",
                        color: "red",
                      }}
                      onClick={handleLogout}
                    >
                      Logout
                    </p>
                  </>
                ) : (
                  <p
                    style={{ margin: 0, cursor: "pointer" }}
                    onClick={() => {
                      setShowModal(true);
                      setDropdownOpen(false);
                    }}
                  >
                    Login
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Cart icon with badge */}
          <span
            onClick={toggleCart}
            style={{ cursor: "pointer", position: "relative" }}
          >
            <SlHandbag />
            {cartData.length > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: 1,
                  right: -5,
                  backgroundColor: "red",
                  color: "white",
                  fontSize: "12px",
                  borderRadius: "50%",
                  padding: "2px 6px",
                }}
              >
                {cartData.length}
              </span>
            )}
          </span>
        </div>
      </Container>

      {/* Top search bar */}
      {searchOpen && (
        <div className="search"
          style={{
      margin:"auto",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "none", // transparent
      zIndex: 998,
      marginTop:"-46px",
      marginBottom:"5px"

          }}
        >
          <input
            type="text"
            placeholder="Search our store"
            style={{
              width: "300px",
              padding: "8px 12px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
              outline: "none",
            }}
          />
          <button
            onClick={() => setSearchOpen(false)}
            style={{
              padding: "9px 14px",
              backgroundColor: "orange",
              border: "none",
              color: "white",
              cursor: "pointer",
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
            }}
          >
            <GoSearch />
          </button>
        </div>
      )}

      {/* Side cart drawer */}
      {cartOpen && user && (
        <div
          style={{
            position: "fixed",
            right: 0,
            top: 0,
            height: "100vh",
            width: "300px",
            backgroundColor: "white",
            padding: "20px",
            zIndex: 999,
            overflowY: "auto",
          }}
        >
          <h5>Cart Items</h5>
          {cartData.length > 0 ? (
            cartData.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  borderBottom: "1px solid #ccc",
                  paddingBottom: "10px",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  width={40}
                  style={{ marginRight: 10 }}
                />
                <div>
                  <strong style={{ fontSize: "14px" }}>{item.title}</strong>
                  <div>Qty: {item.quantity}</div>
                  <div>Price: ${item.price}</div>
                </div>
              </div>
            ))
          ) : (
            <p>No items found</p>
          )}
          <Button
            size="sm"
            variant="danger"
            style={{ marginTop: "15px" }}
            onClick={() => setCartOpen(false)}
          >
            Close
          </Button>
        </div>
      )}

      {/* Login Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control mb-2"
            placeholder="Username"
          />
          <input
            type="password"
            value={password}
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NavSection1;
