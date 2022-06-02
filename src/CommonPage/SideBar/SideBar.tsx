import React from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-profile">
        <span className="profile-name">가</span>
        <span className="profile-info profile-info-top">짱윤지님의</span>
        <span className="profile-info">다행 :)</span>
      </div>
      <div className="sidebar-btn-top">
        <span>
          <FontAwesomeIcon icon={faHome} className="sidebar-btn" />
        </span>
        <FontAwesomeIcon icon={faCog} className="sidebar-btn faCog" />
        <FontAwesomeIcon icon={faBell} className="sidebar-btn faBell" />
      </div>
      <div className="sidebar-btn-bottom">
        <FontAwesomeIcon icon={faSignOut} className="sidebar-btn faSignOut" />
      </div>
    </div>
  );
}

export default SideBar;
