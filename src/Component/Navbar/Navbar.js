import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo_container">
        <h1>Logo</h1>
      </div>
      <div className="link_container">
        <NavLink
          className={({ isActive }) => (isActive ? "active_link" : "link")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active_link" : "link")}
          to="/reviews"
        >
          Reviews
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active_link" : "link")}
          to="/dashboard"
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active_link" : "link")}
          to="/blogs"
        >
          Blogs
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active_link" : "link")}
          to="/about"
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
