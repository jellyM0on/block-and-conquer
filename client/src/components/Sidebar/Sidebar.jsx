import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import dashboardIcon from "../../assets/dashboard-icon.svg";
import flashcardsIcon from "../../assets/flashcards-icon.svg";
import leaderboardIcon from "../../assets/leaderboard-icon.svg";
import conquestsIcon from "../../assets/conquests-icon.svg";
import shopIcon from "../../assets/shop-icon.svg";
import pomodoroIcon from "../../assets/pomodoro-icon.svg";
import siteblockerIcon from "../../assets/siteblocker-icon.svg";
import friendsIcon from "../../assets/friends-icon.svg";
import profileIcon from "../../assets/profile-icon.svg";
import supportIcon from "../../assets/support-icon.svg";
import settingsIcon from "../../assets/settings-icon.svg";
import logoutIcon from "../../assets/logout-icon.svg";

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
          <img src={dashboardIcon} alt="dashboard" />
          Dashboard
        </NavLink>
        <NavLink to="/test2" className="menu-item">
          <img src={flashcardsIcon} alt="flashcards" />
          Flashcards
        </NavLink>
        <NavLink to="/leaderboard" className="menu-item">
          <img src={leaderboardIcon} alt="leaderboard" />
          Leaderboard
        </NavLink>
        <NavLink to="/conquests" className="menu-item">
          <img src={conquestsIcon} alt="conquests" />
          Conquests
        </NavLink>
        <NavLink to="/shop" className="menu-item">
          <img src={shopIcon} alt="shop" />
          Shop
        </NavLink>
      </div>
      <div className="sidebar-focus">
        <h5>FOCUS</h5>
        <NavLink to="/pomodoro" className="menu-item">
          <img src={pomodoroIcon} alt="pomodoro timer" />
          Pomodoro Timer
        </NavLink>
        <NavLink to="/site-blocker" className="menu-item">
          <img src={siteblockerIcon} alt="site blocker" />
          Site Blocker
        </NavLink>
      </div>
      <div className="sidebar-social">
        <h5>SOCIAL</h5>
        <NavLink to="/friends" className="menu-item">
          <img src={friendsIcon} alt="friends" />
          Friends
        </NavLink>
        <NavLink to="/profile" className="menu-item">
          <img src={profileIcon} alt="profile" />
          Profile
        </NavLink>
      </div>
      <div className="sidebar-footer">
        <NavLink to="/support" className="menu-item">
          <img src={supportIcon} alt="support" />
          Support
        </NavLink>
        <NavLink to="/settings" className="menu-item">
          <img src={settingsIcon} alt="settings" />
          Settings
        </NavLink>
        <NavLink to="/login" className="menu-item">
          <img src={logoutIcon} alt="log out" />
          Log out
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
