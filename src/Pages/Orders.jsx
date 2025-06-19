import React from "react";
import "./Orders.css";
import { Container } from "react-bootstrap";
import { FaMobileAlt } from "react-icons/fa";

const ordersData = {
  recent: [
    {
      date: "Wednesday, 25 sep 2024",
      value: 765,
      items: 3,
      status: "Order Placed",
    },
    {
      date: "Wednesday, 25 sep 2024",
      value: 765,
      items: 3,
      status: "Order Placed",
    },
  ],
  past: [
    {
      date: "Wednesday, 25 sep 2024",
      value: 765,
      items: 3,
      status: "Order Cancelled",
    },
    {
      date: "Wednesday, 25 sep 2024",
      value: 765,
      items: 3,
      status: "Order Cancelled",
    },
  ],
};

const OrderCard = ({ order }) => {
  return (
    <div className="order-card">
      <div className="order-header">
        <span>
          {" "}
          <span className="icon">
            {" "}
            <FaMobileAlt color="#f28c28" />
          </span>{" "}
          {order.date}
        </span>
        <span
          className={`status ${
            order.status === "Order Placed" ? "placed" : "cancelled"
          }`}
        >
          {order.status}
        </span>
      </div>
      <hr />
      <div className="order-details">
        <div>
          <strong>Order Value</strong>: ₹ {order.value}
        </div>
        <div>
          <strong>Items Ordered</strong>: {order.items}
        </div>
      </div>
    </div>
  );
};

const Orders = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#f8f8f8" }}>
        <div style={{ backgroundColor: "#efefef", padding: "40px 16px" }}>
          <Container
            style={{ display: "flex", justifyContent: "space-between" , height:"80px"}}
          >
            <h1 style={{ fontFamily: "'Times New Roman', Times, serif" }}>
              MY ORDERS
            </h1>
            <div>
              <a
                href="/"
                style={{ color: "orangered", textDecoration: "none" }}
              >
                Home
              </a>
              <span className="ms-1"> / MY ORDERS</span>
            </div>
          </Container>
        </div>
      </div>

      <div className="orders-container">
        <h2 style={{backgroundColor:"black" ,color:"white" , fontSize:"20px" , marginTop:"30px" ,padding:"7px 0px"}}>
          <span className="bold">My Orders</span>{" "}
          <span className="sub text-light">(Last 7 days, 2 orders)</span>
        </h2>
        <div className="orders-grid">
          {ordersData.recent.map((order, idx) => (
            <OrderCard key={idx} order={order} />
          ))}
        </div>

        <h2  style={{ fontSize:"20px" }}>
          <span className="bold">Past Orders</span>{" "}
          <span className="sub">(2 orders)</span>
        </h2>
        <div className="orders-grid">
          {ordersData.past.map((order, idx) => (
            <OrderCard key={idx} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
