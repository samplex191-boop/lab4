import React from "react";

function Courses() {
  const cardStyle = {
    backgroundColor: "white",
    padding: "20px",
    margin: "15px 0",
    borderRadius: "8px",
    boxShadow: "0 3px 8px rgba(0,0,0,0.08)"
  };

  return (
    <div style={{ maxWidth: "700px", margin: "40px auto" }}>
      <h1>Our Courses</h1>

      <div style={cardStyle}>React JS</div>
      <div style={cardStyle}>Node JS</div>
      <div style={cardStyle}>Python Programming</div>
    </div>
  );
}

export default Courses;