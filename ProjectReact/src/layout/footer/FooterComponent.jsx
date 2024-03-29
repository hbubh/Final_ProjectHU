import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import Box from "@mui/material/Box";
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

  const email = "inonGenish@outlook.co.il";
  const subject = "Contact";
  const body = "Hello, I want to get in touch with you About:";

  const mailToLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

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
    <Box sx={{ display: "flex" }}>
      <BottomNavigation
        sx={{
          backgroundColor: "darkgray",
          boxShadow: "-3px 0px 5px",
          opacity: "0.8",
          width: "70%",
          height: "auto",
          bottom: "0",
          display: "flex",
          justifyContent: "space-around",
        }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction value="HOME" label="Home" icon={<HomeIcon />} />

        <BottomNavigationAction
          value="ABOUT"
          label="About"
          icon={<InfoIcon />}
        />

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
      <Box
        sx={{
          width: "30%",
          border: "1px solid black",
          bgcolor: "black",
          color: "darkgray",
          textAlign: "center",
          padding: "2%",
          fontWeight: "300",
          fontSize: "1rem",
        }}
      >
        All Right Reserved - InvestionsHouse. <br />{" "}
        <span style={{ fontSize: "0.8rem" }}>
          by InonGenish <br />
          <a
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
            }}
            href={mailToLink}
          >
            - Contact Us -
          </a>
        </span>
      </Box>
    </Box>
  );
};
export default FooterComponent;
