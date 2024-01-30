import { Typography, Paper, Divider, Box } from "@mui/material";
import React from "react";

const AboutSplit1 = () => {
  return (
    <React.Fragment>
      <Typography
        variant="h3"
        sx={{ width: "60%", textAlign: "center", fontWeight: "300" }}
      >
        What We Offer
      </Typography>
      <br />
      <br />
      <Box sx={{ display: { xs: "block", lg: "flex" } }}>
        <Box sx={{ width: { xs: "100%", lg: "60%" } }}>
          <Typography variant="h4" sx={{ width: "100%" }}>
            <span style={{ fontSize: "1.7rem" }}>(1)</span> Basic Invester
          </Typography>
          <Typography variant="subtitle1" sx={{ width: "100%" }}>
            As a regular user, you can create a free account and practice
            trading stocks in a simulated environment. Stay updated with
            financial news from around the world and receive daily market
            updates.
          </Typography>
        </Box>
        <Box sx={{ height: "3vh" }} />
        <Box
          sx={{
            width: "35%",
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
            src="https://th.bing.com/th/id/OIP.36rTRQ30kCXr5gfM-laiGAHaE8?w=650&h=434&rs=1&pid=ImgDetMain"
            alt="investor in his mac"
          />
        </Box>
      </Box>
      <br />
      <br />
      <Box
        sx={{
          display: {
            xs: "block",
            lg: "flex",
            borderTop: "1px solid black",
            paddingTop: "50px",
            paddingBottom: "50px",
          },
        }}
      >
        <Box
          sx={{
            width: "50%",
            overflow: "hidden",
          }}
        >
          <Box sx={{ height: "5vh" }} />
          <img
            style={{
              width: "100%",
              height: "auto",
            }}
            src="/assets/images/anylis.png"
            alt="this is Jordan"
          />
        </Box>
        <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
          <Box sx={{ height: "3vh" }} />
          <Typography
            variant="h4"
            sx={{ width: "100%", textAlign: { xs: "none", lg: "center" } }}
          >
            <span style={{ fontSize: "1.7rem" }}>(2)</span> InvesterPro
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ width: "100%", textAlign: { xs: "none", lg: "center" } }}
          >
            Professional users benefit from advanced tools such as analyst
            analysis and special graphs adapted for technical analysis. Get an
            edge with advanced information and position yourself as a
            professional stock investor. And perform buying and selling
            operations without an operation fee that a Basic user pays
          </Typography>
        </Box>
        <Box sx={{ height: "3vh" }} />
      </Box>
      <br />
      <br />
      <Box
        sx={{
          display: {
            xs: "block",
            lg: "flex",
            borderTop: "1px solid black",
            paddingTop: "20px",
          },
        }}
      >
        <Box sx={{ height: "3vh" }} />
        <Box
          sx={{
            width: "50%",
            overflow: "hidden",
          }}
        >
          <img
            style={{
              width: "80%",
              height: "auto",
              marginLeft: "10%",
              border: "4px solid black",
            }}
            src="/assets/images/create.png"
            alt="a share"
          />
          <img
            style={{
              width: "80%",
              height: "auto",
              marginLeft: "10%",
              border: "4px solid black",
            }}
            src="/assets/images/myshares.png"
            alt="a share"
          />
        </Box>
        <Box sx={{ width: { xs: "100%", lg: "45%" }, ml: "5%" }}>
          <Box sx={{ height: "3vh" }} />
          <Typography variant="h4" sx={{ width: "100%" }}>
            <span style={{ fontSize: "1.7rem" }}>(3)</span> Business -
            Organizations
          </Typography>
          <Box sx={{ height: "2vh" }} />
          <Typography variant="subtitle1" sx={{ width: "80%" }}>
            Business users can open an account and enjoy special tools. Ability
            to produce shares and sell them to the website users who believe in
            the growth of your shares. In your personal share management area,
            you will be able to examine the change in the price of each share
            and receive an in-depth graphical analysis of it
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
};
export default AboutSplit1;
