import React, { useState } from "react";

const Payment = ({ onPayNow }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    name: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Clear form errors when user starts typing in any field
    setFormErrors({});

    if (name === "cardNumber") {
      // Remove non-numeric characters and format card number with space after every four digits
      const cardNumber = value.replace(/\D/g, "");
      const formattedCardNumber = cardNumber.replace(/(.{4})/g, "$1 ").trim();
      setPaymentDetails({ ...paymentDetails, [name]: formattedCardNumber });
    } else if (name === "expirationDate") {
      // Format expiration date as MM/YYYY
      const formattedDate = value
        .replace(/\D/g, "") // Remove non-numeric characters
        .replace(/^(\d{2})(\d)/, "$1/$2") // Add slash after the first two digits
        .replace(/(\d{2})\/(\d{4}).*/, "$1/$2"); // Limit to MM/YYYY format
      setPaymentDetails({ ...paymentDetails, [name]: formattedDate });
    } else {
      setPaymentDetails({ ...paymentDetails, [name]: value });
    }
  };

  

  const isValidCardNumber = (cardNumber) => {
    // Validate card number length (for demonstration purposes)
    return cardNumber.length === 19; // Including spaces
  };

  const isValidExpirationDate = (expirationDate) => {
    // Validate expiration date (for demonstration purposes)
    return expirationDate.length === 7 && expirationDate.includes("/");
  };

  const isValidCVV = (cvv) => {
    // Validate CVV length (for demonstration purposes)
    return cvv.length === 3;
  };

  const isValidName = (name) => {
    // Validate name length (for demonstration purposes)
    return name.length > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement payment processing logic here

    // Perform form validation
    const errors = {};
    if (!isValidCardNumber(paymentDetails.cardNumber)) {
      errors.cardNumber = "Please enter a valid 16 digit card number.";
    }
    if (!isValidExpirationDate(paymentDetails.expirationDate)) {
      errors.expirationDate = "Please enter a valid expiration date. (MM/YY)";
    }
    if (!isValidCVV(paymentDetails.cvv)) {
      errors.cvv = "Please enter a valid CVV.";
    }
    if (!isValidName(paymentDetails.name)) {
      errors.name = "Please enter the name on the card.";
    }
    if (Object.keys(errors).length === 0) {
      // If no errors, proceed with payment
      onPayNow();

      // Clear form errors
      setFormErrors({});
    } else {
      // If errors, update the state with the error messages
      setFormErrors(errors);
    }
    
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Payment Details
        </div>
        <p className="text-gray-600 mb-2">
          Please enter your payment details to complete the transaction:
        </p>
        <div className="mt-8 bg-white p-4 border border-gray-200 rounded flex flex-col md:flex-row">
          <input
            type="text"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handleChange}
            placeholder="Card Number"
            className={`p-2 mb-2 md:mr-2 border ${
              formErrors.cardNumber ? "border-red-500" : "border-gray-300"
            } rounded w-full md:w-56`}
          />
          <input
            type="text"
            name="expirationDate"
            value={paymentDetails.expirationDate}
            onChange={handleChange}
            placeholder="MM/YYYY"
            maxLength="7"
            className={`p-2 mb-2 md:mr-2 border ${
              formErrors.expirationDate ? "border-red-500" : "border-gray-300"
            } rounded w-full md:w-24`}
          />
          <input
            type="text"
            name="cvv"
            value={paymentDetails.cvv}
            onChange={handleChange}
            placeholder="CVV"
            maxLength="3"
            className={`p-2 mb-2 md:mr-2 border ${
              formErrors.cvv ? "border-red-500" : "border-gray-300"
            } rounded w-full md:w-24`}
          />
          <input
            type="text"
            name="name"
            value={paymentDetails.name}
            onChange={handleChange}
            placeholder="Name on Card"
            className={`p-2 mb-2 border ${
              formErrors.name ? "border-red-500" : "border-gray-300"
            } rounded w-full`}
          />
        </div>
        {Object.values(formErrors).map((error, index) => (
          <p key={index} className="text-red-500 text-xs">
            {error}
          </p>
        ))}
      </div>
      <div className="flex justify-center w-full mt-12">
        <button
          onClick={handleSubmit}
          className=" bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold hover:bg-green-600 transition duration-200 ease-in-out"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;
