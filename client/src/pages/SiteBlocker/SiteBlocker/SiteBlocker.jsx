import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import "./SiteBlocker.css";
import Profile from "../../../assets/profile-test.png";
import { CiSearch } from "react-icons/ci";

function SiteBlocker() {
  // States
  const [searchTerm, setSearchTerm] = useState("");

  // Handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <div className="site-blocker-container">
      <Sidebar />
      <div className="site-blocker-content">
        <div className="site-blocker-header">
          <h1 className="site-blocker-heading">Site Blocker</h1>
          <CiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for sites, web app"
            className="search-bar"
            value={searchTerm}
            onChange={handleSearch}
          />

          <img src={Profile} alt="profile" className="profile-icon" />
        </div>
      </div>
    </div>
  );
}

export default SiteBlocker;
