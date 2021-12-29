import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./SidebarMenuItem.css";

function SidebarMenuItem({ icon, menuLink, menuTitle, isAdmin, onlyAdmin }) {
  const location = useLocation();

  return (
    <>
      {onlyAdmin ? (
        isAdmin && (
          <Link to={menuLink} className="sidebarLink">
            <li
              className={`sidebarListItem ${
                location.pathname === menuLink && "active"
              }`}
            >
              {icon}

              {menuTitle}
            </li>
          </Link>
        )
      ) : (
        <Link to={menuLink} className="sidebarLink">
          <li className="sidebarListItem">
            {icon}

            {menuTitle}
          </li>
        </Link>
      )}
    </>
  );
}
export default SidebarMenuItem;
