import React, { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      maxWidth: "800px",
      margin: "40px auto",
      textAlign: "center",
      backgroundColor: "#f8fafc",
      padding: "40px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
    }}>
      <h1 style={{ marginBottom: "10px" }}>Welcome to E-Learning</h1>

      <p style={{ color: "#555", marginBottom: "25px" }}>
        Learn modern technologies easily and effectively.
      </p>

      <p>You clicked <strong>{count}</strong> times</p>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          marginTop: "15px",
          padding: "10px 25px",
          backgroundColor: "#0ea5e9",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "15px"
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default Home;