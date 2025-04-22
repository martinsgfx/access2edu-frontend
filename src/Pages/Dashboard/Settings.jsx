import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Select from "react-select";
import { Country, State } from "country-state-city";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/global.css";

function Settings() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [dob, setDob] = useState(null);
  const location = useLocation();
  const activeTab = (path) =>
    location.pathname.includes(path) ? "tab active" : "tab";

  useEffect(() => {
    const countryOptions = Country.getAllCountries().map((c) => ({
      label: c.name,
      value: c.isoCode,
    }));
    setCountries(countryOptions);
  }, []);

  const handleCountryChange = (selected) => {
    setSelectedCountry(selected);
    const stateOptions = State.getStatesOfCountry(selected.value).map((s) => ({
      label: s.name,
      value: s.isoCode,
    }));
    setStates(stateOptions);
    setSelectedState(null); // reset state
  };

  return (
    <div className="edit-profile-container">
      <h2 className="edit-title">Edit Profile</h2>
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
          <div className="avatar-section">
            <img
              src="https://i.ibb.co/SNyyghd/portrait.jpg"
              alt="Profile"
              className="avatar"
            />
            <div className="username-section">
              <label>User Name</label>
              <input type="text" defaultValue="Emma" />
            </div>
            <div className="avatar-buttons">
              <button className="upload-btn">Upload New</button>
              <button className="delete-btn">Delete Avatar</button>
            </div>
          </div>

          <form className="form-section">
            <div className="form-row">
              <div className="form-group">
                <label>
                  First/Other Name<span>*</span>
                </label>
                <input type="text" defaultValue="Stanley John" />
              </div>
              <div className="form-group">
                <label>
                  Last Name<span>*</span>
                </label>
                <input type="text" defaultValue="Emma" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input type="email" defaultValue="Example@gmail.com" />
              </div>
              <div className="form-group">
                <label>
                  Mobile Number<span>*</span>
                </label>
                <div className="mobile-input">
                  <span className="icon">📅</span>
                  <input type="text" defaultValue="0917 774 3730" />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group gender-group">
                <label>Gender</label>
                <div className="gender-options">
                  <label>
                    <input type="radio" name="gender" /> Female
                  </label>
                  <label>
                    <input type="radio" name="gender" defaultChecked /> Male
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label>Date Of Birth</label>
                <DatePicker
                  selected={dob}
                  onChange={(date) => setDob(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select date"
                  className="date-picker"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Country</label>
                <Select
                  options={countries}
                  onChange={handleCountryChange}
                  value={selectedCountry}
                  placeholder="Select Country"
                />
              </div>
              <div className="form-group">
                <label>State/Region</label>
                <Select
                  options={states}
                  onChange={setSelectedState}
                  value={selectedState}
                  placeholder="Select State"
                  isDisabled={!selectedCountry}
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label>
                Residential Address<span>*</span>
              </label>
              <input
                type="text"
                defaultValue="No.7 Kingsley justice street G.R.A, Ibadan"
              />
            </div>

            <div className="form-actions">
              <button className="save-btn">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Settings;
