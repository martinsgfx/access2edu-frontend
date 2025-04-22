import React, { useState, useEffect } from "react";
import "../../styles/global.css";
import { Link } from "react-router-dom"; // Import Link
import Select from "react-select";
import { Country, State } from "country-state-city";

function Guardian() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    // Fetch the list of countries
    const countryList = Country.getAllCountries().map((country) => ({
      label: country.name,
      value: country.isoCode,
    }));
    setCountries(countryList);
  }, []);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    if (selectedOption) {
      // Fetch states for the selected country
      const stateList = State.getStatesOfCountry(selectedOption.value).map(
        (state) => ({
          label: state.name,
          value: state.isoCode,
        })
      );
      setStates(stateList);
    } else {
      setStates([]);
    }
  };

  // Function to determine the active tab
  const activeTab = (path) => {
    return window.location.pathname.includes(path) ? "tab active" : "tab";
  };

  return (
    <div className="edit-profile-container">
      <h2 className="edit-title">Guardian Profile</h2>
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
              <div className="avatar-buttons">
                <button className="upload-btn">Upload New</button>
                <button className="delete-btn">Delete Avatar</button>
              </div>
            </div>

            <form className="form-section">
              <div className="form-row">
                <div className="form-group">
                  <label>
                    First Name<span>*</span>
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
                  <input type="email" defaultValue="Ajfnfjngnnm@gmail.com" />
                </div>
                <div className="form-group">
                  <label>
                    Mobile Number<span>*</span>
                  </label>
                  <input type="text" defaultValue="0917 774 3730" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Relationship</label>
                  <Select
                    options={[
                      { label: "Mother", value: "mother" },
                      { label: "Father", value: "father" },
                      { label: "Uncle", value: "uncle" },
                      { label: "Aunty", value: "aunty" },
                    ]}
                    placeholder="Select Relationship"
                  />
                </div>
                <div className="form-group">
                  <label>State/Region</label>
                  <Select
                    options={states}
                    placeholder="Select State/Region"
                    isDisabled={!selectedCountry}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Country</label>
                  <Select
                    options={countries}
                    onChange={handleCountryChange}
                    placeholder="Select Country"
                  />
                </div>
                <div className="form-group">
                  <label>
                    Residential Address<span>*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue="No.7 Kingsley justice street G.R.A"
                  />
                </div>
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

export default Guardian;
