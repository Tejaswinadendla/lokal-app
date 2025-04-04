import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Left side - Jobs */}
        <div className="nav-left">
          <Link to="/" className="nav-link">Jobs</Link>
        </div>

        {/* Middle Partition */}
        <div className="nav-partition"></div>

        {/* Right side - Bookmarks */}
        <div className="nav-right">
          <Link to="/bookmarks" className="nav-link">Bookmarks</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
