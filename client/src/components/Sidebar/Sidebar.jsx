import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="brand">
        <h3 className="appname">
          Block&<span className="conquer">Conquer</span>
        </h3>
        <p className="tagline">Focus, Learn, Achieve</p>
      </div>
      <div className="sidebar-main">
        <h5>MAIN</h5>
        <NavLink to="/test" className="menu-item">
          Dashboard
        </NavLink>
        <NavLink to="/test2" className="menu-item">
          Flashcards
        </NavLink>
        <NavLink to="/leaderboard" className="menu-item">
          Leaderboard
        </NavLink>
        <NavLink to="/conquests" className="menu-item">
          Conquests
        </NavLink>
        <NavLink to="/shop" className="menu-item">
          Shop
        </NavLink>
      </div>
      <div className="sidebar-focus">
        <h5>FOCUS</h5>
        <NavLink to="/pomodoro" className="menu-item">
          Pomodoro Timer
        </NavLink>
        <NavLink to="/site-blocker" className="menu-item">
          Site Blocker
        </NavLink>
      </div>
      <div className="sidebar-social">
        <h5>SOCIAL</h5>
        <NavLink to="/friends" className="menu-item">
          Friends
        </NavLink>
        <NavLink to="/profile" className="menu-item">
          Profile
        </NavLink>
      </div>
      <div className="sidebar-footer">
        <NavLink to="/support" className="menu-item">
          Support
        </NavLink>
        <NavLink to="/settings" className="menu-item">
          Settings
        </NavLink>
        <NavLink to="/login" className="menu-item">
          Log out
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
