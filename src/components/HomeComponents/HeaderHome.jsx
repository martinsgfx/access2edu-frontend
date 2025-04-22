import React from "react";
import "../../styles/global.css";

const HeaderHome = () => {
  return (
    <header className="header">
      <div className="logo"> <img src="src\assets\access_II_edu-logo.png" alt="" /></div>
      <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>Streams</li>
          <li>Admission</li>
          <li>About</li>
          <li>Log in</li>
          <li><button className="signup-button">Sign Up</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderHome;
