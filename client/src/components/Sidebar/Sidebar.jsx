import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="brand">
        <h3 className="appname">
          Block&<span>Conquer</span>
        </h3>
        <p className="tagline">Focus, Learn, Achieve</p>
      </div>
      <div className="sidebar-menu">
        <h5>MAIN</h5>
      </div>
    </div>
  );
};

export default Sidebar;
