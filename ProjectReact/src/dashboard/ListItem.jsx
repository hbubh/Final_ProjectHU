import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import AddchartIcon from "@mui/icons-material/Addchart";
import { Link } from "react-router-dom";
import InsightsIcon from "@mui/icons-material/Insights";
import ROUTES from "../routes/ROUTES";

export const mainListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Main Menu
    </ListSubheader>
    <Link
      to={ROUTES.DASHBOARD}
      style={{ textDecoration: "none", color: "grey" }}
    >
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon sx={{ color: "grey" }} />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>

    <Link to={ROUTES.PROFILE} style={{ textDecoration: "none", color: "grey" }}>
      <ListItemButton>
        <ListItemIcon>
          <RecentActorsIcon sx={{ color: "grey" }} />
        </ListItemIcon>
        <ListItemText primary="Personal Portfolio" />
      </ListItemButton>
    </Link>

    <Link to={ROUTES.SHARES} style={{ textDecoration: "none", color: "grey" }}>
      <ListItemButton>
        <ListItemIcon>
          <StorefrontOutlinedIcon sx={{ color: "grey" }} />
        </ListItemIcon>
        <ListItemText primary="Stock-Market" />
      </ListItemButton>
    </Link>

    <Link
      to={ROUTES.CHECKOUT}
      style={{ textDecoration: "none", color: "grey" }}
    >
      <ListItemButton>
        <ListItemIcon>
          <PaymentOutlinedIcon sx={{ color: "grey" }} />
        </ListItemIcon>
        <ListItemText primary="Charge-Wallet" />
      </ListItemButton>
    </Link>

    <Link to={ROUTES.NEWS} style={{ textDecoration: "none", color: "grey" }}>
      <ListItemButton>
        <ListItemIcon>
          <NewspaperIcon sx={{ color: "grey" }} />
        </ListItemIcon>
        <ListItemText primary="News" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
export const proList = (
  <React.Fragment>
    <Link
      to={ROUTES.PROPLAN}
      style={{ textDecoration: "none", color: "purple" }}
    >
      <ListItemButton>
        <ListItemIcon>
          <SupervisedUserCircleIcon sx={{ color: "purple" }} />
        </ListItemIcon>
        <ListItemText primary="Upgrade to PRO" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
export const buzzList = (
  <React.Fragment>
    <Link
      to={ROUTES.BUZZPLAN}
      style={{ textDecoration: "none", color: "purple" }}
    >
      <ListItemButton>
        <ListItemIcon>
          <InsightsIcon sx={{ color: "purple" }} />
        </ListItemIcon>
        <ListItemText primary="Upgrade to Business" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Business Menu
    </ListSubheader>

    <Link
      to={ROUTES.MYSHARES}
      style={{ textDecoration: "none", color: "grey" }}
    >
      <ListItemButton>
        <ListItemIcon>
          <InsertChartIcon />
        </ListItemIcon>
        <ListItemText primary="My Shares" />
      </ListItemButton>
    </Link>

    <Link to={ROUTES.CREATE} style={{ textDecoration: "none", color: "grey" }}>
      <ListItemButton>
        <ListItemIcon>
          <AddchartIcon />
        </ListItemIcon>
        <ListItemText primary="Create New Share" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
export const adminListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset sx={{ color: "red" }}>
      Admin Menu
    </ListSubheader>

    <Link to={ROUTES.ADMIN} style={{ textDecoration: "none", color: "grey" }}>
      <ListItemButton>
        <ListItemIcon>
          <SupervisorAccountIcon sx={{ color: "red" }} />
        </ListItemIcon>
        <ListItemText primary="Users Panel" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
