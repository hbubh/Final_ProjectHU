import { Typography, Paper, Divider, Box } from "@mui/material";
import React from "react";

const AboutSplit = () => {
  return (
    <React.Fragment>
      <Typography
        variant="h3"
        sx={{ width: "100%", textAlign: "center", fontWeight: "300" }}
      >
        So.. Lets Start
      </Typography>
      <br />
      <br />
      <Box sx={{ display: { xs: "block", lg: "flex" } }}>
        <Box sx={{ width: { xs: "100%", lg: "40%" } }}>
          <Typography variant="h4" sx={{ width: "100%" }}>
            <span style={{ fontSize: "1.7rem" }}>(1)</span> Register New-User
          </Typography>
          <Typography variant="subtitle1" sx={{ width: "100%" }}>
            In order to start working on the site, make an initial registration.{" "}
            <br />
            **Please note: saving the password is necessary for continuing work
            in the future. Keep it in an accessible and safe place <br />
            *** Throughout the use of the site and on the form filling pages,
            there will be system checks for the correctness of filling out the
            form, and if an error or an illegal character is found in one of the
            filling fields, the system will give a corresponding message
          </Typography>
        </Box>
        <Box sx={{ height: "3vh" }} />
        <Box
          sx={{
            width: "60%",
            overflow: "hidden",
          }}
        >
          <img
            style={{
              width: "80%",
              height: "auto",
              marginLeft: "10%",
              boxShadow: "3px 3px 7px",
            }}
            src="/assets/images/register.png"
            alt="investor in his mac"
          />
        </Box>
      </Box>
      <br />
      <Divider />
      <br />
      <Box sx={{ display: { xs: "block", lg: "flex" } }}>
        <Box sx={{ width: { xs: "100%", lg: "40%" } }}>
          <Typography variant="h4" sx={{ width: "100%" }}>
            <span style={{ fontSize: "1.7rem" }}>(2)</span> Log-In
          </Typography>
          <Typography variant="subtitle1" sx={{ width: "100%" }}>
            After registration you will be taken directly to the login page. On
            this page you must enter the email and password you registered with
          </Typography>
        </Box>
        <Box sx={{ height: "3vh" }} />
        <Box
          sx={{
            width: "60%",
            overflow: "hidden",
          }}
        >
          <img
            style={{
              width: "80%",
              height: "auto",
              marginLeft: "10%",
              boxShadow: "3px 3px 7px",
            }}
            src="/assets/images/login.png"
            alt="investor in his mac"
          />
        </Box>
      </Box>
      <br />
      <Divider />
      <br />
      <Box sx={{ display: { xs: "block", lg: "flex" } }}>
        <Box sx={{ width: { xs: "100%", lg: "40%" } }}>
          <Typography variant="h4" sx={{ width: "100%" }}>
            <span style={{ fontSize: "1.7rem" }}>(3)</span> Dashboard
          </Typography>
          <Typography variant="subtitle1" sx={{ width: "100%" }}>
            After a successful login you will be taken directly to your home
            page as a logged in user. On this page you can manage all your
            activity on the site and get information about changes and updates
            in stock prices, hot news and access to user actions
          </Typography>
        </Box>
        <Box sx={{ height: "3vh" }} />
        <Box
          sx={{
            width: "60%",
            overflow: "hidden",
          }}
        >
          <img
            style={{
              width: "80%",
              height: "auto",
              marginLeft: "10%",
              boxShadow: "3px 3px 7px",
            }}
            src="/assets/images/dashboard.png"
            alt="investor in his mac"
          />
        </Box>
      </Box>
      <br />
      <Divider />
      <br />
      <Box sx={{ display: { xs: "block" } }}>
        <Box sx={{ width: { xs: "100%" } }}>
          <Typography variant="h4" sx={{ width: "100%" }}>
            <span style={{ fontSize: "1.7rem" }}>(4)</span> Site navigation
          </Typography>
          <Typography variant="subtitle1" sx={{ width: "100%" }}>
            As a logged-in user, there are two navigation systems in the
            application: <br /> The first is the main bar that is available
            every time you click the "SIDE MENU" button. <br /> In this
            navigation bar you can connect / disconnect, reach the about page,
            the policy and other main pages. <br />
            <br /> In the second bar, which is only available to a logged-in
            user, all the tools available to you for website activity will
            appear, such as: loading money, access to the shares and trading
            page, access to the profile page to receive financial information
            and personal information about your user. In addition to the
            business type user and manager, the actions available in the bar
            will be expanded
            <br />
            <br />
            Finally, clicking on the logo that appears in the upper navigation
            bar will take you directly to the home page, and in addition a
            search field for specific stocks, and changing the lighting mode on
            the site from light to dark and vice versa. And at the bottom of the
            page icons will appear for navigation between main pages
          </Typography>
        </Box>
        <Box sx={{ height: "3vh" }} />
        <Box
          sx={{
            width: "100%",
            overflow: "hidden",
            display: "flex",
          }}
        >
          <Box sx={{ width: "20%" }}>
            <img
              style={{
                width: "100%",
                height: "auto",
                boxShadow: "3px 3px 7px",
              }}
              src="/assets/images/mainmenu.png"
              alt="investor in his mac"
            />
          </Box>
          <Box sx={{ width: "20%", ml: "10%" }}>
            <img
              style={{
                width: "100%",
                height: "auto",
                boxShadow: "3px 3px 7px",
              }}
              src="/assets/images/dashmenu.png"
              alt="investor in his mac"
            />
          </Box>
          <Box sx={{ width: "45%", ml: "5%" }}>
            <img
              style={{
                width: "100%",
                height: "auto",
                boxShadow: "3px 3px 7px",
              }}
              src="/assets/images/appbar.png"
              alt="investor in his mac"
            />
            <img
              style={{
                width: "100%",
                height: "auto",
                boxShadow: "3px 3px 7px",
              }}
              src="/assets/images/botbar.png"
              alt="investor in his mac"
            />
          </Box>
        </Box>
      </Box>
      <br />
      <Divider />
      <br />
    </React.Fragment>
  );
};
export default AboutSplit;
