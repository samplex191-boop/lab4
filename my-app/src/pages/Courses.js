import React, { useState } from "react";

function Courses() {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <h1>Courses Page</h1>
      <p>Available Courses: React, Python, ML</p>

      <h3>Enroll Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Enroll in Course
      </button>
    </div>
  );
}

export default Courses;