// src/components/ListofPlayers.js
import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat Kohli", score: 82 },
    { name: "Rohit Sharma", score: 45 },
    { name: "KL Rahul", score: 68 },
    { name: "Hardik Pandya", score: 50 },
    { name: "Jadeja", score: 73 },
    { name: "Shreyas Iyer", score: 38 },
    { name: "Ishan Kishan", score: 60 },
    { name: "Bumrah", score: 25 },
    { name: "Shami", score: 30 },
    { name: "Suryakumar Yadav", score: 90 },
    { name: "Ashwin", score: 55 },
  ];

  // Arrow function to filter players with score < 70
  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players:</h2>
      <ul>
        {players.map((p, i) => (
          <li key={i}>{p.name} - {p.score}</li>
        ))}
      </ul>

      <h3>Players with score below 70:</h3>
      <ul>
        {lowScorers.map((p, i) => (
          <li key={i}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
