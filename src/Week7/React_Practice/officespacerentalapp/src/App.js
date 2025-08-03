import React from 'react';
import './App.css';

function App() {
  const offices = [
    {
      id: 1,
      name: "Tech Park",
      rent: 55000,
      address: "Hitech City, Hyderabad",
      image: "https://via.placeholder.com/300x200?text=Tech+Park"
    },
    {
      id: 2,
      name: "Startup Hub",
      rent: 75000,
      address: "Indiranagar, Bangalore",
      image: "https://via.placeholder.com/300x200?text=Startup+Hub"
    },
    {
      id: 3,
      name: "Corporate Tower",
      rent: 60000,
      address: "MG Road, Pune",
      image: "https://via.placeholder.com/300x200?text=Corporate+Tower"
    }
  ];

  return (
    <div className="App">
      <h1>Office Space Rental Listings</h1>
      
      {offices.map((office) => (
        <div key={office.id} style={{ border: '1px solid #ccc', padding: '15px', margin: '10px auto', width: '300px' }}>
          <img src={office.image} alt={office.name} style={{ width: '100%', height: 'auto' }} />
          <h2>{office.name}</h2>
          <p><strong>Address:</strong> {office.address}</p>
          <p style={{ color: office.rent > 60000 ? 'green' : 'red' }}>
            <strong>Rent:</strong> ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
