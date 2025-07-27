import React from 'react';
import CohortDetails from './components/CohortDetails';

function App() {
  const cohorts = [
    {
      name: 'React Bootcamp',
      status: 'ongoing',
      startDate: '2025-07-01',
      endDate: '2025-08-15',
    },
    {
      name: 'Java Fundamentals',
      status: 'completed',
      startDate: '2025-05-01',
      endDate: '2025-06-15',
    },
  ];

  return (
    <div>
      <h1>Cohort Dashboard</h1>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
