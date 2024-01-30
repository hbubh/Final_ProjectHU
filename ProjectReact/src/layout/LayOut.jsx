import MainComponent from "./main/MainComponent";
import FooterComponent from "./footer/FooterComponent";
import ResponsiveAppBar from "./header/ResponsiveAppBar";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../store/themeSlice";
import React from "react";

const LayoutComponent = ({ children }) => {
  const thisTheme = useSelector((bigPie) => bigPie.themeSlice.darkTheme);
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  const dispatch = useDispatch();

  const darkThemE = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const setThemeChange = () => {
    dispatch(themeActions.setTheme());
  };
  return (
    <ThemeProvider theme={thisTheme ? darkThemE : lightTheme}>
      <CssBaseline />
      <ResponsiveAppBar themeChange={setThemeChange} thisTheme={thisTheme} />
      <MainComponent>{children}</MainComponent>
      {loggedIn ? <FooterComponent /> : null}
    </ThemeProvider>
  );
};

export default LayoutComponent;
