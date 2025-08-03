import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    const conversionRate = 0.011; // Approx 1 INR = 0.011 EUR
    setEuro((parseFloat(rupees) * conversionRate).toFixed(2));
  };

  return (
    <div>
      <h2>Currency Convertor (INR to Euro)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter INR"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
        />
        <button type="submit">Convert</button>
      </form>
      {euro && <p>{rupees} INR = {euro} Euro</p>}
    </div>
  );
}

export default CurrencyConvertor;
