import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [addressInfo, setAddressInfo] = useState({
    address: "",
    door: "",
    pincode: "",
    street: "",
    district: "",
    state: "",
  });

  const [editPersonal, setEditPersonal] = useState(false);
  const [editAddress, setEditAddress] = useState(false);

  useEffect(() => {
    if (user?.id) {
      axios.get(`https://fakestoreapi.com/users/${user.id}`).then((res) => {
        const data = res.data;
        setPersonalInfo({
          name: `${data.name.firstname} ${data.name.lastname}`,
          email: data.email,
          phone: data.phone,
        });

        setAddressInfo({
          address: `${data.address.number}, ${data.address.street}`,
          door: data.address.number,
          pincode: data.address.zipcode,
          street: data.address.street,
          district: data.address.city,
          state: "", // Optional
        });
      });
    }
  }, [user]);

  // Save handlers
  const handleSavePersonal = () => {
    // Add API call or validation if needed
    console.log("Saving Personal Info", personalInfo);
    setEditPersonal(false);
  };

  const handleSaveAddress = () => {
    // Add API call or validation if needed
    console.log("Saving Address Info", addressInfo);
    setEditAddress(false);
  };

  return (
    <Container className="mt-5">
      {/* Header */}
      <div className="d-flex align-items-center mb-4">
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: "#ccc",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "28px",
            marginRight: "10px",
          }}
        >
          👤
        </div>
        <h4>hello...</h4>
      </div>

      <Row>
        {/* Personal Info */}
        <Col md={6}>
          <h5 className="d-flex justify-content-between">
            <span>Personal Information</span>
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => setEditPersonal(!editPersonal)}
            >
              {editPersonal ? "Cancel" : "Edit"}
            </span>
          </h5>

          <div className="mb-3">
            <label className="fw-bold">Name</label>
            <input
              type="text"
              className="form-control"
              value={personalInfo.name}
              onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value })}
              readOnly={!editPersonal}
              placeholder="Name"
            />
          </div>
          <div className="mb-3">
            <label className="fw-bold">Email Address</label>
            <input
              type="text"
              className="form-control"
              value={personalInfo.email}
              onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
              readOnly={!editPersonal}
              placeholder="Email Address"
            />
          </div>
          <div className="mb-3">
            <label className="fw-bold">Mobile Number</label>
            <input
              type="text"
              className="form-control"
              value={personalInfo.phone}
              onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
              readOnly={!editPersonal}
              placeholder="Mobile Number"
            />
          </div>

          {editPersonal && (
            <Button variant="primary" onClick={handleSavePersonal}>
              Save
            </Button>
          )}
        </Col>

        {/* Address Info */}
        <Col md={6}>
          <h5 className="d-flex justify-content-between">
            <span>Manage Address</span>
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => setEditAddress(!editAddress)}
            >
              {editAddress ? "Cancel" : "Edit"}
            </span>
          </h5>

          <div className="mb-3">
            <label className="fw-bold">Address</label>
            <textarea
              className="form-control"
              value={addressInfo.address}
              onChange={(e) => setAddressInfo({ ...addressInfo, address: e.target.value })}
              readOnly={!editAddress}
              placeholder="Address"
              rows={2}
            />
          </div>

          <div className="d-flex gap-2 mb-3">
            <div className="flex-fill">
              <label>Door Number:</label>
              <input
                type="text"
                className="form-control"
                value={addressInfo.door}
                onChange={(e) => setAddressInfo({ ...addressInfo, door: e.target.value })}
                readOnly={!editAddress}
              />
            </div>
            <div className="flex-fill">
              <label>Pincode:</label>
              <input
                type="text"
                className="form-control"
                value={addressInfo.pincode}
                onChange={(e) => setAddressInfo({ ...addressInfo, pincode: e.target.value })}
                readOnly={!editAddress}
              />
            </div>
          </div>

          <div className="mb-3">
            <label>Address (Area and Street):</label>
            <input
              type="text"
              className="form-control"
              value={addressInfo.street}
              onChange={(e) => setAddressInfo({ ...addressInfo, street: e.target.value })}
              readOnly={!editAddress}
            />
          </div>

          <div className="d-flex gap-2 mb-3">
            <div className="flex-fill">
              <label>District:</label>
              <input
                type="text"
                className="form-control"
                value={addressInfo.district}
                onChange={(e) => setAddressInfo({ ...addressInfo, district: e.target.value })}
                readOnly={!editAddress}
              />
            </div>
            <div className="flex-fill">
              <label>State:</label>
              <input
                type="text"
                className="form-control"
                value={addressInfo.state}
                onChange={(e) => setAddressInfo({ ...addressInfo, state: e.target.value })}
                readOnly={!editAddress}
              />
            </div>
          </div>

          {editAddress && (
            <Button variant="primary" onClick={handleSaveAddress}>
              Save
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MyProfile;
