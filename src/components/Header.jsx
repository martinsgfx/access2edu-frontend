import React from 'react';
import { useNavigate } from "react-router-dom";

import '../styles/auth.css';

function Header() {
  const navigate = useNavigate();
    return (
      <div className='login-header'>
        <img src="src\assets\access_II_edu-removebg-preview 2.svg" alt="Logo" width="32" height="32" onClick={() => navigate("/")} />
        <p>Welcome to Access2Edu</p>     
      </div>
    );
  }

export default Header;