// src/components/IndianPlayers.js
import React from 'react';

const IndianPlayers = () => {
  const players = ["Rohit", "Virat", "Rahul", "Hardik", "Jadeja", "Bumrah"];
  const [p1, p2, p3, p4, p5, p6] = players; // Destructuring

  const T20 = ["Rohit", "Suryakumar", "Bumrah"];
  const Ranji = ["Pujara", "Iyer", "Siraj"];

  // Merging using ES6 spread
  const allPlayers = [...T20, ...Ranji];

  return (
    <div>
      <h2>Odd Team:</h2>
      <ul>
        {[p1, p3, p5].map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>Even Team:</h2>
      <ul>
        {[p2, p4, p6].map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>All Indian Players (Merged):</h2>
      <ul>
        {allPlayers.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
