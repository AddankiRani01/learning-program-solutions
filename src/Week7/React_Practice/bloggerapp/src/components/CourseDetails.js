import React from 'react';

function CourseDetails({ isEnrolled }) {
  // Using if-else style conditional rendering
  if (isEnrolled) {
    return <p>✅ You are enrolled in the course.</p>;
  }
  return <p>❌ You are not enrolled yet.</p>;
}

export default CourseDetails;
