import React from "react";
import "./Topbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";

function Topbar({ isLogin, handleLogout }) {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Shubh CRM</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNoneIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          {!isLogin && (
            <img
              src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
              alt=""
              className="topAvatar"
              onClick={handleLogout}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Topbar;
