import { Typography, Paper, Divider, Box } from "@mui/material";
import React from "react";

const AboutSplit01 = () => {
  const [thisColor, setColor] = React.useState("");
  const handleClick = (e) => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const minScreenWidth = 1024;
    const minScreenHeight = 568;
    if (screenWidth >= minScreenWidth && screenHeight >= minScreenHeight) {
      const { style } = e.target;
      if (style.position === "absolute" && style.marginLeft === "-33%") {
        style.marginLeft = "10%";
        style.position = "";
        setColor("");
      } else {
        style.marginLeft = "-33%";
        style.position = "absolute";
        setColor("aliceblue");
      }
    } else {
      return;
    }
  };

  return (
    <React.Fragment>
      <Box sx={{ display: { xs: "block", lg: "flex" } }}>
        <Box sx={{ width: { xs: "100%", lg: "40%" } }}>
          <Typography variant="h4" sx={{ width: "100%", color: thisColor }}>
            <span style={{ fontSize: "1.7rem" }}>(5)</span> Charge-Wallet
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ width: "100%", color: thisColor }}
          >
            Before making purchases in the stock market you must load your user
            with money. For this purpose, enter the wallet loading page through
            your home page as a logged in user and fill in the necessary fields
            for loading money as you wish.! <br />
            <br />
            after loading the money. The amount available to you for performing
            actions will be displayed on the main page
          </Typography>
        </Box>
        <Box sx={{ height: "3vh" }} />
        <Box
          onClick={handleClick}
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
            src="/assets/images/wallet.png"
            alt="investor in his mac"
          />
        </Box>
      </Box>
      <br />
      <Divider />
      <br />
      <Box sx={{ display: { xs: "block" } }}>
        <Box sx={{ width: { xs: "100%" } }}>
          <Typography variant="h4" sx={{ width: "100%", color: thisColor }}>
            <span style={{ fontSize: "1.7rem" }}>(5)</span> Start trading!
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ width: "100%", color: thisColor }}
          >
            After you are registered and loaded with money, you can start
            purchasing shares for your personal portfolio. When performing a
            buy/sell operation, a window will open requiring filling in relevant
            details before performing the operation
            <br />
            <br /> After each purchase and sale of shares you own, you can see
            on the main page all the holdings you own, including the current
            profit status for a share.
            <br />
            <br />* Clicking on the name of the stock will display it in the
            form of a card in order to give the surfer a high experience
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
          <Box sx={{ width: "35%" }}>
            <img
              style={{
                width: "100%",
                height: "auto",
                boxShadow: "3px 3px 7px",
              }}
              src="/assets/images/shares.png"
              alt="investor in his mac"
            />
          </Box>
          <Box sx={{ width: "25%", ml: "5%" }}>
            <img
              style={{
                width: "100%",
                height: "auto",
                boxShadow: "3px 3px 7px",
              }}
              src="/assets/images/order.png"
              alt="investor in his mac"
            />
          </Box>
          <Box sx={{ width: "25%", ml: "5%" }}>
            <img
              style={{
                width: "100%",
                height: "auto",
                boxShadow: "3px 3px 7px",
              }}
              src="/assets/images/card.png"
              alt="investor in his mac"
            />
          </Box>
        </Box>
      </Box>
      <br />
      <Divider />
      <br />
      <Box sx={{ display: { xs: "block", lg: "flex" } }}>
        <Box sx={{ width: { xs: "100%", lg: "40%" } }}>
          <Typography variant="h4" sx={{ width: "100%", color: thisColor }}>
            <span style={{ fontSize: "1.7rem" }}>(5)</span> Portofilio
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ width: "100%", color: thisColor }}
          >
            The user page is a page that displays general financial data, all
            the assets available to you and how much money you have claimed so
            far for personal monitoring. <br /> Additionally, at the bottom of
            the page, your editable personal details will be displayed
          </Typography>
        </Box>
        <Box sx={{ height: "3vh" }} />
        <Box
          sx={{
            width: "60%",
            overflow: "hidden",
          }}
        >
          <Box
            onClick={handleClick}
            sx={{
              width: "100%",
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
              src="/assets/images/usercash.png"
              alt="investor in his mac"
            />
          </Box>
          <Box
            onClick={handleClick}
            sx={{
              width: "100%",
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
              src="/assets/images/userinfo.png"
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
export default AboutSplit01;
