import * as React from "react";
import PolicyIcon from "@mui/icons-material/Policy";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Link } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import ROUTES from "../../../routes/ROUTES";

export const mainListItemsNavBottom = (
  <React.Fragment>
    <Link to={ROUTES.HOME} style={{ textDecoration: "none", color: "black" }}>
      <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
    </Link>
    <Link to={ROUTES.ABOUT} style={{ textDecoration: "none", color: "black" }}>
      <BottomNavigationAction label="About" value="about" icon={<InfoIcon />} />
    </Link>
    <Link to={ROUTES.POLICY} style={{ textDecoration: "none", color: "black" }}>
      <BottomNavigationAction
        label="Policy"
        value="policy"
        icon={<PolicyIcon />}
      />
    </Link>
    <Link to={ROUTES.SHARES} style={{ textDecoration: "none", color: "black" }}>
      <BottomNavigationAction
        label="Shares"
        value="shares"
        icon={<StackedLineChartIcon />}
      />
    </Link>
  </React.Fragment>
);
