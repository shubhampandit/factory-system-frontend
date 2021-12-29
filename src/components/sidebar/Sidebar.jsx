import React from "react";
import { SidebarData } from "./SidebarData";
import SidebarMenu from "./SidebarMenu";
import "./Sidebar.css";

function Sidebar({ isAdmin }) {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {SidebarData.map((data) => (
          <SidebarMenu
            key={data.title}
            title={data.title}
            subMenus={data.subMenus}
            isAdmin={isAdmin}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
