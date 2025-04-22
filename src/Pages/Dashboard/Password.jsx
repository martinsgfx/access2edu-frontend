import React, { useState } from "react";
import "../../styles/global.css";
import { useLocation, Link } from "react-router-dom";

function Password() {
  const location = useLocation();
  const activeTab = (path) =>
    location.pathname.includes(path) ? "tab active" : "tab";

  const [is2FAEnabled, setIs2FAEnabled] = useState(true);
  const [isAuthMethodEnabled, setIsAuthMethodEnabled] = useState(true);
  const [isAutoFillEnabled, setIsAutoFillEnabled] = useState(false);

  const handleToggle = (toggleName) => {
    if (toggleName === "2FA") {
      setIs2FAEnabled(!is2FAEnabled);
    } else if (toggleName === "authMethod") {
      setIsAuthMethodEnabled(!isAuthMethodEnabled);
    } else if (toggleName === "autoFill") {
      setIsAutoFillEnabled(!isAutoFillEnabled);
    }
  };

  return (
    <div className="edit-profile-container">
      <h2 className="edit-title">Password settings</h2>
      <div className="profile-content">
        <div className="profile-tabs">
          <Link to="/dashboard/settings">
            <button className={activeTab("/settings")}>Edit Profile</button>
          </Link>
          <Link to="/dashboard/password">
            <button className={activeTab("/password")}>Password</button>
          </Link>
          <Link to="/dashboard/notification">
            <button className={activeTab("/notification")}>Notification</button>
          </Link>
          <Link to="/dashboard/guardian">
            <button className={activeTab("/guardian")}>Guardian</button>
          </Link>
        </div>

        <div className="profile-form">
          <div className="form-section">
            <h3>Password Management</h3>
            <div className="form-group full-width">
              <label>Old Password</label>
              <input type="password" />
            </div>
            <div className="form-group full-width">
              <label>New Password</label>
              <input type="password" />
              <small>
                Password must be at least 6 characters and including a number*
              </small>
            </div>
            <div className="form-group full-width">
              <label>Confirm Password</label>
              <input type="password" />
            </div>

            <h3>Two Factor Authentication</h3>

            <div className="toggle-group">
              <div className="toggle-info">
                <label>Enable/Disable 2FA</label>
                <span className="description">
                  Receive email for important notifications
                </span>
              </div>
              <button
                className={`custom-toggle ${is2FAEnabled ? "active" : ""}`}
                onClick={() => handleToggle("2FA")}
                type="button"
              >
                <span className="circle" />
              </button>
            </div>

            <div className="toggle-group">
              <div className="toggle-info">
                <label>Authentication Method</label>
                <span className="description">
                  Receive OTP or use Google authentication app
                </span>
              </div>
              <button
                className={`custom-toggle ${
                  isAuthMethodEnabled ? "active" : ""
                }`}
                onClick={() => handleToggle("authMethod")}
                type="button"
              >
                <span className="circle" />
              </button>
            </div>

            <div className="toggle-group">
              <div className="toggle-info">
                <label>Allow Password Autofill</label>
                <span className="description">
                  Allow your browser to save and fill passwords
                </span>
              </div>
              <button
                className={`custom-toggle ${isAutoFillEnabled ? "active" : ""}`}
                onClick={() => handleToggle("autoFill")}
                type="button"
              >
                <span className="circle" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Password;
