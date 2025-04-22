import React from 'react';
import axios from 'axios';


const PayButton = ({ email, amount }) => {
  const handlePayment = async () => {
    // Fetch data from backend
    const res = await axios.post('http://localhost:5000/api/create-payment', { email, amount });
    const { publicKey, email: userEmail, amount: amt, ref } = res.data;
    const paystack = window.PaystackPop.setup({
      key: publicKey,
      email: userEmail,
      amount: amt * 100, // Paystack uses kobo
      currency: 'NGN',
      ref,
      callback: (response) => {
        alert('Payment complete! Reference: ' + response.reference);
        // Optionally, send response.reference to backend to verify
      },
      onClose: () => {
        alert('Payment window closed.');
      }
    });
    paystack.openIframe();
  };
  return (
    <button onClick={handlePayment} className="px-4 py-4 bg-[#785491] text-white rounded">
      Pay Now
    </button>
  );
};

export default PayButton;