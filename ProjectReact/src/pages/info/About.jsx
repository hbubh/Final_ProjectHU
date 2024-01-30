import { Typography, Paper, Divider, Box } from "@mui/material";
import AboutSplit1 from "./ui/AboutSplit1";
import AboutSplit from "./ui/AboutSplit";
import AboutSplit01 from "./ui/AboutSplit01";
const About = () => {
  return (
    <Paper
      sx={{
        padding: "5%",
        paddingTop: "10%",
        width: "80%",
        ml: "10%",
        bgcolor: "aliceblue",
        color: "black",
      }}
    >
      <Divider>
        <Typography
          variant="h1"
          sx={{ width: "100%", textAlign: "center", fontWeight: "300" }}
        >
          About Us..
        </Typography>
      </Divider>
      <br />
      <br />
      <br />
      <Typography
        variant="h4"
        sx={{ width: "100%", textAlign: "center", fontWeight: "300" }}
      >
        Welcome to{" "}
        <span style={{ fontWeight: "bold" }}> Investions House </span>, the
        online hub for investments and portfolio management!
      </Typography>
      <br />
      <br />
      <br />
      <Box sx={{ display: { xs: "block", lg: "flex" } }}>
        <Box sx={{ width: { xs: "100%", lg: "60%" }, textAlign: "center" }}>
          <Typography variant="h4" sx={{ width: "100%" }}>
            Our Mission
          </Typography>
          <Typography variant="subtitle1" sx={{ width: "100%" }}>
            At <span style={{ fontWeight: "bold" }}> Investions House </span>,
            we believe in creating an engaging and informative experience for
            every user. We've designed the platform to allow you to experience
            the feeling of investing and managing your portfolio in an intuitive
            and personalized way.
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
              border: "4px solid black",
              boxShadow: "3px 3px 7px",
            }}
            src="https://th.bing.com/th/id/OIP.4szjucGI3angD3_r1EdGVAHaEK?rs=1&pid=ImgDetMain"
            alt="investion up/down"
          />
        </Box>
      </Box>
      <br />
      <br />
      <br />
      <Box sx={{ height: "5vh" }} />
      <AboutSplit />
      <AboutSplit01 />
      <AboutSplit1 />
      <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <Box sx={{ display: { xs: "block", lg: "flex" } }}>
        <Box sx={{ width: { xs: "100%", lg: "60%" } }}>
          <Box sx={{ height: "6vh" }} />
          <Typography variant="h4" sx={{ width: "100%" }}>
            Demo and Security
          </Typography>
          <Typography variant="subtitle1" sx={{ width: "100%" }}>
            We want to emphasize that all actions on{" "}
            <span style={{ fontWeight: "bold" }}> Investions House </span>, are
            simulated, and real money is not involved. The information and tools
            provided are for practice and excitement purposes only.
          </Typography>
        </Box>

        <Box
          sx={{
            width: "35%",
            overflow: "hidden",
          }}
        >
          <Box sx={{ height: "6vh" }} />
          <img
            style={{
              width: "30%",
              height: "auto",
              marginLeft: "10%",
            }}
            src="https://th.bing.com/th/id/OIP.2mITE1LLyoObSgUlIR98DwAAAA?w=450&h=450&rs=1&pid=ImgDetMain"
            alt="demo cash"
          />
        </Box>
      </Box>
    </Paper>
  );
};
export default About;
