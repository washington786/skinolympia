import React, { useState } from "react";
import MainWrapper from "../../globals/MainWrapper";
import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import styles from "../../styles/login.module.css";
import { Link } from "react-router-dom";

const CheckoutPage = ({ cartItems }) => {
  const [nameAddress, setNameAddress] = useState("");
  const [mobileAddress, setMobileAddress] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [complexAddress, setComplexAddress] = useState("");
  const [cityAddress, setCityAddress] = useState("");
  const [provinceAddress, setProvinceAddress] = useState("");
  const [postalAddress, setPostalAddress] = useState("");
  const [addressType, setAddressType] = useState("individual");
  const [cartItemsData, setCartItemsData] = useState([]);
  const deliveryFee = 150;
  console.log(cartItems);
  const totalAmount = cartItems
    ? cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    : 0;

  const handleNameAddressChange = (e) => {
    setNameAddress(e.target.value);
  };

  const handleMobileAddressChange = (e) => {
    setMobileAddress(e.target.value);
  };

  const handleStreetAddressChange = (e) => {
    setStreetAddress(e.target.value);
  };

  const handleAddressTypeChange = (e) => {
    setAddressType(e.target.value);
  };

  const handleComplexAddressChange = (e) => {
    setComplexAddress(e.target.value);
  };

  const handleCityAddressChange = (e) => {
    setCityAddress(e.target.value);
  };

  const handleProvinceAddressChange = (e) => {
    setProvinceAddress(e.target.value);
  };

  const handlePostalAddressChange = (e) => {
    setPostalAddress(e.target.value);
  };

  const handleCheckout = () => {
    // /setCartItemsData(cartItemsData);
    // Handle checkout logic here
  };

  return (
    <MainWrapper>
      <div className="container py-4 align-self-center w-75 align-content-center d-flex flex-column">
        <h5 className="text-muted text-success fw-semibold text-center fs-4 text-uppercase mb-4">
          Checkout
        </h5>
        <form>
          <div className="mb-3">
            <RadioGroup
              aria-label="addressType"
              name="addressType"
              value={addressType}
              onChange={handleAddressTypeChange}
              className="radio-group"
            >
              <FormControlLabel
                value="individual"
                control={<Radio />}
                label="Individual Address"
              />
              <FormControlLabel
                value="business"
                control={<Radio />}
                label="Business Address"
              />
            </RadioGroup>
          </div>

          <div className="mb-3">
            <label htmlFor="nameAddress" className="form-label">
              Recipient Name
            </label>
            <input
              type="text"
              className="form-control"
              id="nameAddress"
              value={nameAddress}
              onChange={handleNameAddressChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mobileAddress" className="form-label">
              Recipient Mobile Number
            </label>
            <input
              type="text"
              className="form-control"
              id="mobileAddress"
              value={mobileAddress}
              onChange={handleMobileAddressChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="streetAddress" className="form-label">
              Street Address
            </label>
            <input
              type="text"
              className="form-control"
              id="streetAddress"
              value={streetAddress}
              onChange={handleStreetAddressChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="complexAddress" className="form-label">
              Complex / Building (Optional)
            </label>
            <input
              type="text"
              className="form-control"
              id="complexAddress"
              value={complexAddress}
              onChange={handleComplexAddressChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cityAddress" className="form-label">
              City / Town
            </label>
            <input
              type="text"
              className="form-control"
              id="cityAddress"
              value={cityAddress}
              onChange={handleCityAddressChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="provinceAddress" className="form-label">
              Province
            </label>
            <select
              className="form-control"
              id="provinceAddress"
              value={provinceAddress}
              onChange={handleProvinceAddressChange}
            >
              <option value="">Select Province</option>
              <option value="Eastern Cape">Eastern Cape</option>
              <option value="Free State">Free State</option>
              <option value="Gauteng">Gauteng</option>
              <option value="KwaZulu-Natal">KwaZulu-Natal</option>
              <option value="Limpopo">Limpopo</option>
              <option value="Mpumalanga">Mpumalanga</option>
              <option value="North West">North West</option>
              <option value="Northern Cape">Northern Cape</option>
              <option value="Western Cape">Western Cape</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="postalAddress" className="form-label">
              Postal
            </label>
            <input
              type="text"
              className="form-control"
              id="postalAddress"
              value={postalAddress}
              onChange={handlePostalAddressChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Order Summary</label>
            <ul className="list-group">
              {cartItems && cartItems.map((item) => (
                  <li className="list-group-item" key={item.id}>
                    {item.name} ({item.quantity}) - R
                    {item.price * item.quantity}
                  </li>
                ))}
            </ul>
          </div>

          {/* {addressType === "individual" && (
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input type="text" className="form-control" id="firstName" />
            </div>
          )}
          {addressType === "individual" && (
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input type="text" className="form-control" id="lastName" />
            </div>
          )} */}
          {addressType === "business" && (
            <div className="mb-3">
              <label htmlFor="businessName" className="form-label">
                Business Name
              </label>
              <input type="text" className="form-control" id="businessName" />
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="totalAmount" className="form-label">
              Items Total
            </label>
            <input
              type="text"
              className="form-control"
              id="totalAmount"
              value={`R${totalAmount}`}
              readOnly
            />
          </div>
            <div className="mb-3">
            <label htmlFor="deleiveryAmount" className="form-label">
              Shipping Fee
            </label>
            <input
              type="text"
              className="form-control"
              id="deliveryAmount"
              value={`R${deliveryFee}`}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="toPay" className="form-label">
              To Pay
            </label>
            <input
              type="text"
              className="form-control"
              id="toPay"
              value={`R${totalAmount+deliveryFee}`}
              readOnly
            />
          </div>
          <Link
            to="/payment"
            variant="contained"
            className={`${styles.btn} me-3 text-secondary`}
            onClick={handleCheckout}
          >
            PLACE ORDER
          </Link>
          <Link to="/cart" className={`${styles.btn} text-secondary`}>
            Back to Checkout
          </Link>
        </form>
      </div>
    </MainWrapper>
  );
};

export default CheckoutPage;
