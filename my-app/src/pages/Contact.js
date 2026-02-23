import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");

  return (
    <div className="page">
      <h1>Contact Us</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Hello, {name}</p>
    </div>
  );
}

export default Contact;