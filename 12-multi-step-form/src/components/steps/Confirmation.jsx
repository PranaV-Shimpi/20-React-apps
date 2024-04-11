import React from "react";

const Confirmation = () => {
  return (
    <div className="flex items-center justify-center m-10 p-10 bg-gray-100">
      <div className="bg-white rounded-lg p-8 shadow-md max-w-md w-full">
        <h1 className="text-3xl font-semibold mb-4">Order Confirmed!</h1>
        <p className="text-gray-700 mb-4">Thank you for your purchase.</p>
        <p className="text-gray-700 mb-4">Your order has been confirmed.</p>
        <p className="text-gray-700">
        Your order has been successfully placed and is being processed. You'll receive an email confirmation shortly with your order details and estimated delivery date. Please check your inbox.
        </p>
        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-blue-500 hover:underline"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
