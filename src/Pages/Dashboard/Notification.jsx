import React, { useState } from "react";
import "../../styles/global.css";
import { useLocation, Link } from "react-router-dom";

function Notification() {
  const location = useLocation();
  const activeTab = (path) => location.pathname.includes(path) ? "tab active" : "tab";

  const [isEmailNotificationEnabled, setIsEmailNotificationEnabled] = useState(true);
  const [isSmsNotificationEnabled, setIsSmsNotificationEnabled] = useState(true);
  const [isLocationServiceEnabled, setIsLocationServiceEnabled] = useState(false);
  const [isEncryptDataEnabled, setIsEncryptDataEnabled] = useState(false);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  const handleToggle = (toggleName) => {
    if (toggleName === "email") {
      setIsEmailNotificationEnabled(!isEmailNotificationEnabled);
    } else if (toggleName === "sms") {
      setIsSmsNotificationEnabled(!isSmsNotificationEnabled);
    } else if (toggleName === "location") {
      setIsLocationServiceEnabled(!isLocationServiceEnabled);
    } else if (toggleName === "encrypt") {
      setIsEncryptDataEnabled(!isEncryptDataEnabled);
    } else if (toggleName === "darkMode") {
      setIsDarkModeEnabled(!isDarkModeEnabled);
    }
  };

  return (
    <div className="edit-profile-container">
      <h2 className="edit-title">Notification settings</h2>
      <div className="profile-content">
        <div className="profile-tabs">
          <Link to="/dashboard/settings"><button className={activeTab("/settings")}>Edit Profile</button></Link>
          <Link to="/dashboard/password"><button className={activeTab("/password")}>Password</button></Link>
          <Link to="/dashboard/notification"><button className={activeTab("/notification")}>Notification</button></Link>
          <Link to="/dashboard/guardian"><button className={activeTab("/guardian")}>Guardian</button></Link>
        </div>

        <div className="profile-form">
          <div className="form-section">
            <div className="notification-toggle">
              <label>Email Notification</label>
              <span className="description">Receive email for important notifications</span>
              <button
                className={`custom-toggle ${isEmailNotificationEnabled ? "active" : ""}`}
                onClick={() => handleToggle("email")}
                type="button"
              >
                <span className="circle" />
              </button>
            </div>

            <div className="notification-toggle">
              <label>SMS Notification</label>
              <span className="description">Receive SMS for important notifications</span>
              <button
                className={`custom-toggle ${isSmsNotificationEnabled ? "active" : ""}`}
                onClick={() => handleToggle("sms")}
                type="button"
              >
                <span className="circle" />
              </button>
            </div>

            <div className="notification-toggle">
              <label>Location Service</label>
              <span className="description">Allow third party to see current location</span>
              <button
                className={`custom-toggle ${isLocationServiceEnabled ? "active" : ""}`}
                onClick={() => handleToggle("location")}
                type="button"
              >
                <span className="circle" />
              </button>
            </div>

            <div className="notification-toggle">
              <label>Encrypt Data</label>
              <span className="description">Encrypt all data associated with account</span>
              <button
                className={`custom-toggle ${isEncryptDataEnabled ? "active" : ""}`}
                onClick={() => handleToggle("encrypt")}
                type="button"
              >
                <span className="circle" />
              </button>
            </div>

            <div className="notification-toggle">
              <label>Dark/Light Mode</label>
              <span className="description">Switch between Dark and Light mode</span>
              <button
                className={`custom-toggle ${isDarkModeEnabled ? "active" : ""}`}
                onClick={() => handleToggle("darkMode")}
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

export default Notification;
