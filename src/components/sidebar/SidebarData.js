import LineStyleIcon from "@mui/icons-material/LineStyle";
import PersonIcon from "@mui/icons-material/Person";
import TimelineIcon from "@mui/icons-material/Timeline";

const iconStyle = { fontSize: 20, marginRight: 5 };

export const SidebarData = [
  {
    title: "Dashboard",
    subMenus: [
      {
        menuTitle: "Home",
        icon: <LineStyleIcon style={iconStyle} />,
        menuLink: "/",
        onlyAdmin: true,
      },
      {
        menuTitle: "Orders",
        icon: <TimelineIcon style={iconStyle} />,
        menuLink: "/orders",
        onlyAdmin: true,
      },
      {
        menuTitle: "Tasks",
        icon: <PersonIcon style={iconStyle} />,
        menuLink: "/orders",
      },
    ],
  },
  {
    title: "Create",
    subMenus: [
      {
        menuTitle: "Company",
        icon: <LineStyleIcon style={iconStyle} />,
        menuLink: "/createCompany",
        onlyAdmin: true,
      },
      {
        menuTitle: "Product",
        icon: <LineStyleIcon style={iconStyle} />,
        menuLink: "/createProduct",
        onlyAdmin: true,
      },
    ],
  },
  {
    title: "Product",
    subMenus: [
      {
        menuTitle: "Current Stock",
        icon: <LineStyleIcon style={iconStyle} />,
        menuLink: "/createCompany",
        onlyAdmin: true,
      },
    ],
  },
];
