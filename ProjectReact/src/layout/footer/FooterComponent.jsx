import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import PolicyIcon from "@mui/icons-material/Policy";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
const FooterComponent = () => {
  const [value, setValue] = React.useState("home");
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    window.scroll(0, 0);
    if (newValue === "POLICY") {
      navigate(ROUTES.POLICY);
      return;
    }
    if (newValue === "ABOUT") {
      navigate(ROUTES.ABOUT);
      return;
    }
    if (newValue === "HOME") {
      navigate(ROUTES.HOME);
      return;
    }
    if (newValue === "SHARES") {
      navigate(ROUTES.SHARES);
      return;
    }
  };

  return (
    <BottomNavigation
      sx={{
        backgroundColor: "darkgray",
        boxShadow: "-3px 0px 5px",
        opacity: "0.8",
        width: "100%",
        height: "auto",
        position: "relative",
        bottom: "0",
        display: "flex",
        justifyContent: "space-evenly",
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction value="HOME" label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction value="ABOUT" label="About" icon={<InfoIcon />} />
      <BottomNavigationAction
        label="Policy"
        value="POLICY"
        icon={<PolicyIcon />}
      />
      <BottomNavigationAction
        value="SHARES"
        label="Shares"
        icon={<StackedLineChartIcon />}
      />
    </BottomNavigation>
  );
};
export default FooterComponent;
