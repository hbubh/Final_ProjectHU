import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import CustomizedSwitches from "./ui/NewIconSwitch.jsx";
import SlideNav from "./ui/SlideNavBar";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import { NavLink } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const ResponsiveAppBar = ({ themeChange, thisTheme }) => {
  const navigate = useNavigate();
  const [txt, setTxt] = useState("");

  const handleInputChange = (e) => {
    setTxt(e.target.value);
    navigate(`/shares/?filter=${e.target.value}`);
  };
  const [thisOP, setOP] = React.useState("0");
  React.useEffect(() => {
    setTimeout(() => {
      setOP("1");
    }, 4000);
  }, []);

  const handleTheme = () => {
    themeChange();
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        transition: "all 2s",
        position: "fixed",
        zIndex: "15",
      }}
    >
      <AppBar
        position="static"
        sx={{ bgcolor: thisTheme ? "black" : "black", width: "100vw" }}
      >
        <Toolbar>
          <Box sx={{ width: "25%" }} />
          <SlideNav />
          <Box sx={{ width: "3%" }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <NavLink to={ROUTES.HOME}>
              <StackedLineChartIcon
                sx={{ fontSize: "2.8rem", mt: "1%", color: "grey" }}
              />
            </NavLink>
          </Typography>
          <Box sx={{}}>
            <CustomizedSwitches
              thisTheme={thisTheme}
              handleTheme={handleTheme}
            />
          </Box>
          <Search sx={{ transition: "all 1s" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={txt}
              onChange={handleInputChange}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ResponsiveAppBar;
