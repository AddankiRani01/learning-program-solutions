import React from 'react';
import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Student Score Calculator</h1>
      <CalculateScore name="Rani" school="ABC School" total={450} goal={5} />
    </div>
  );
}

export default App;
