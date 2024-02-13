import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ROUTES from "../../../routes/ROUTES";
import { useSelector } from "react-redux";
const GaleryMain = () => {
  const thisTheme = useSelector((bigPie) => bigPie.themeSlice.darkTheme);
  const handleLinkClicked = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Box
      sx={{
        mt: { xs: "0", lg: "-7%" },
        width: "100%",
        transform: "skew(00deg, -30deg)",
        ml: "28%",
        padding: "5%",
      }}
    >
      <Box sx={{ width: "100%", mt: "10%", display: "flex" }} />
      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          boxShadow: "3px 3px 9px",
        }}
      >
        <img
          style={{
            width: "60%",
            height: "auto",
            border: "2px solid black",
            borderRight: "none",
            boxShadow: "0px 1px 10px",
          }}
          src="https://static.polityka.pl/_resource/res/path/c0/d0/c0d02ec0-ca85-4afd-bf4f-8c56f66113d7_f1400x900"
          alt="imgOfWallstreet"
        />
        <Box
          bgcolor={thisTheme ? "black" : "white"}
          color={thisTheme ? "white" : "black"}
          sx={{
            width: "40%",
            height: "auto",
            padding: "3%",
            fontSize: "1.3rem",
            fontFamily: "-moz-initial",
            textAlign: "center",
          }}
        >
          <Box sx={{ height: "2%" }} />
          Welcome to our investment site! We are happy to open a window for you
          to a whole world of sensations and adventures. Investments is not only
          a natural and beautiful place, but also a place that encourages sports
          activities and adventures. Through our website, you will be able to
          find useful information, relevant articles and special offers for
          various investment activities. Come discover our variety and enter the
          world of investments - a place where every moment is an experience!
          <Box sx={{ mt: "2%" }} />
          <Link
            onClick={handleLinkClicked}
            to={ROUTES.ABOUT}
            style={{ textDecoration: "none" }}
          >
            <Button variant="outlined">Go Read About Us</Button>
          </Link>
        </Box>
      </Box>
      <Box sx={{ width: "100%", mt: "10%", display: "flex" }} />
      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          boxShadow: "-1px -1px 5px",
        }}
      >
        <Box
          bgcolor={thisTheme ? "black" : "white"}
          color={thisTheme ? "white" : "black"}
          sx={{
            width: "60%",
            height: "auto",
            padding: "3%",
            fontSize: "1.5rem",
            fontFamily: "-moz-initial",
            textAlign: "justify",
          }}
        >
          <Box sx={{ height: "10%" }} />
          Maintain a code of conduct. The goal of all of us is to maximize
          profits*, to have fun and not to harm our ethical values.
          <Box sx={{ mt: "2%" }} />
          <Link
            onClick={handleLinkClicked}
            to={ROUTES.POLICY}
            style={{ textDecoration: "none" }}
          >
            <Button variant="text">To Website Policy Click Here</Button>
          </Link>
          <Box sx={{ fontSize: "0.8rem", mt: "15%" }}>
            *The entire site is only a demo and does not have the possibility of
            real investments
          </Box>
        </Box>
        <img
          style={{
            width: "40%",
            height: "auto",
            border: "2px solid black",
            borderLeft: "none",
            boxShadow: "0px -1px 10px",
          }}
          src="https://th.bing.com/th/id/OIP.Hv9v6PVMuAi2MF2_OjzMNwHaEr?w=272&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="imgOfWallstreet"
        />
      </Box>
      <Box sx={{ width: "100%", mt: "10%", display: "flex" }} />
      <Box sx={{ width: "100%", height: "3%" }} />
      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          boxShadow: "3px 3px 6px",
        }}
      >
        <img
          style={{
            width: "60%",
            height: "auto",
            border: "2px solid black",
            boxShadow: "0px 1px 10px",
            borderRight: "none",
          }}
          src="https://th.bing.com/th/id/R.b554cef05971f8cb9b986e65fec28fd3?rik=J0stSgbKDhsiKA&pid=ImgRaw&r=0"
          alt="imgOfWallstreet"
        />
        <Box
          bgcolor={thisTheme ? "black" : "white"}
          color={thisTheme ? "white" : "black"}
          sx={{
            width: "40%",
            height: "auto",
            padding: "3%",
            fontSize: "1.3rem",
            fontFamily: "-moz-initial",
            textAlign: "justify",
          }}
        >
          <Box sx={{ height: "10%" }} />
          The results cannot lie! With us we are more spacious, enjoy more.
          Enjoy a unique team of analysts that gives you full control over all
          the large amount of information you have to manage
          <Box sx={{ mt: "2%" }} />
          <Link
            onClick={handleLinkClicked}
            to={ROUTES.LOGIN}
            style={{ textDecoration: "none" }}
          >
            <Button variant="text">Lets Start!</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default GaleryMain;
