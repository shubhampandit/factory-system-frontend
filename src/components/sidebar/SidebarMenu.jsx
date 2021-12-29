import React from "react";
import "./SidebarMenu.css";
import SidebarMenuItem from "./SidebarMenuItem";

function SidebarMenu({ title, subMenus, isAdmin }) {
  return (
    <div className="sidebarMenu">
      <h3 className="sidebarTitle">{title}</h3>
      <ul className="sidebarList">
        {subMenus.map((subMenu) => (
          <SidebarMenuItem
            key={subMenu.menuTitle}
            icon={subMenu.icon}
            menuLink={
              subMenu.menuTitle === "Home"
                ? isAdmin
                  ? "/"
                  : "/userHome"
                : subMenu.menuLink
            }
            menuTitle={subMenu.menuTitle}
            isAdmin={isAdmin}
            onlyAdmin={subMenu.onlyAdmin}
          />
        ))}
      </ul>
    </div>
  );
}

export default SidebarMenu;
