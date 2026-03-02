import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navStyle = {
    backgroundColor: "#1e293b",
    padding: "15px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const linkStyle = {
    color: "#e2e8f0",
    textDecoration: "none",
    margin: "0 15px",
    fontSize: "16px",
    fontWeight: "500",
  };

  const activeStyle = {
    color: "#38bdf8",
    borderBottom: "2px solid #38bdf8",
    paddingBottom: "4px",
  };

  return (
    <div style={navStyle}>
      <h2 style={{ color: "white", margin: 0 }}>E-Learning</h2>

      <div>
        <NavLink to="/" style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeStyle } : linkStyle
        }>Home</NavLink>

        <NavLink to="/courses" style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeStyle } : linkStyle
        }>Courses</NavLink>

        <NavLink to="/about" style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeStyle } : linkStyle
        }>About</NavLink>

        <NavLink to="/contact" style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeStyle } : linkStyle
        }>Contact</NavLink>
      </div>
    </div>
  );
}

export default Navbar;