import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Element variable for page content
  let content;
  if (isLoggedIn) {
    content = <UserPage />;
  } else {
    content = <GuestPage />;
  }

  return (
    <div className="App">
      <h1>✈️ Ticket Booking App</h1>
      
      {/* Conditional Buttons */}
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}

      <hr />

      {/* Conditional Rendering */}
      {content}
    </div>
  );
}

// Component for guest user
function GuestPage() {
  return (
    <div>
      <h2>Welcome, Guest!</h2>
      <p>You can view available flights but must log in to book tickets.</p>
      <ul>
        <li>✈️ Hyderabad → Delhi - 10:00 AM</li>
        <li>✈️ Chennai → Bangalore - 11:30 AM</li>
        <li>✈️ Mumbai → Kolkata - 02:15 PM</li>
      </ul>
    </div>
  );
}

// Component for logged-in user
function UserPage() {
  return (
    <div>
      <h2>Welcome, User!</h2>
      <p>You can now book your tickets below.</p>
      <button>Book Hyderabad → Delhi</button><br /><br />
      <button>Book Chennai → Bangalore</button><br /><br />
      <button>Book Mumbai → Kolkata</button>
    </div>
  );
}

export default App;
