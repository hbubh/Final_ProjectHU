import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import Divider from "@mui/material/Divider";
import PolicyIcon from "@mui/icons-material/Policy";
import LogoutIcon from "@mui/icons-material/Logout";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import { Link } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import ROUTES from "../../../routes/ROUTES";

export const mainListItemsNavSide = (
  <React.Fragment>
    <Link to={ROUTES.HOME} style={{ textDecoration: "none", color: "black" }}>
      <ListItemButton>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
    </Link>
    <Divider sx={{ my: 1 }} />
    <Link to={ROUTES.ABOUT} style={{ textDecoration: "none", color: "black" }}>
      <ListItemButton>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItemButton>
    </Link>
    <Divider sx={{ my: 1 }} />
    <Link to={ROUTES.POLICY} style={{ textDecoration: "none", color: "black" }}>
      <ListItemButton>
        <ListItemIcon>
          <PolicyIcon />
        </ListItemIcon>
        <ListItemText primary="Policy" />
      </ListItemButton>
    </Link>
    <Divider sx={{ my: 1 }} />
  </React.Fragment>
);

export const secondaryListItemsNavSide = (
  <React.Fragment>
    <Link to={ROUTES.LOGIN} style={{ textDecoration: "none", color: "black" }}>
      <ListItemButton sx={{ bgcolor: "grey" }}>
        <ListItemIcon>
          <LogoutIcon sx={{ color: "black" }} />
        </ListItemIcon>
        <ListItemText primary="Login" sx={{ color: "black" }} />
      </ListItemButton>
    </Link>
    <Link
      to={ROUTES.REGISTER}
      style={{ textDecoration: "none", color: "black" }}
    >
      <ListItemButton>
        <ListItemIcon>
          <AppRegistrationIcon />
        </ListItemIcon>
        <ListItemText primary="Register" />
      </ListItemButton>
    </Link>
    <Divider sx={{ my: 1 }} />
    <Link to={ROUTES.PLANS} style={{ textDecoration: "none", color: "black" }}>
      <ListItemButton>
        <ListItemIcon>
          <SwitchAccountIcon />
        </ListItemIcon>
        <ListItemText primary="Our-Plans" />
      </ListItemButton>
    </Link>
    <Divider sx={{ my: 1 }} />
  </React.Fragment>
);
