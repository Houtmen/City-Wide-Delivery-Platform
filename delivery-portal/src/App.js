import React, { useState } from 'react';

function App() {
  const [merchant, setMerchant] = useState('');
  const [product, setProduct] = useState('');
  const [timeSlot, setTimeSlot] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/schedule', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ merchant, product, timeSlot }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h1>Schedule Delivery</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Merchant Name"
          value={merchant}
          onChange={(e) => setMerchant(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
        <input
          type="text"
          placeholder="Preferred Time Slot"
          value={timeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
        />
        <button type="submit">Schedule</button>
      </form>
    </div>
  );
}

export default App;