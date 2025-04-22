import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../../styles/global.css";

const HeaderHome = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="src\assets\access_II_edu-logo.png" alt="" />
      </div>
      <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>Streams</li>
          <li>Admission</li>
          <li>About</li>
          <li>
            <Link to="/login" className="login-link">Log in</Link>
          </li>
          <li>
            <Link to="/signup">
              <button className="signup-button">Sign Up</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderHome;