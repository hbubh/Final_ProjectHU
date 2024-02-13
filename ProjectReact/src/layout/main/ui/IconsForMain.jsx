import AppRegistrationTwoToneIcon from "@mui/icons-material/AppRegistrationTwoTone";
import { Box, Typography } from "@mui/material";
import LockOpenTwoToneIcon from "@mui/icons-material/LockOpenTwoTone";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Link } from "react-router-dom";
import ROUTES from "../../../routes/ROUTES";
import StackedLineChartOutlinedIcon from "@mui/icons-material/StackedLineChartOutlined";

const IconsMain = ({ conOP }) => {
  const handleLinkClicked = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Box
      sx={{
        ml: "85%",
        mt: "32%",
        transition: "all 1s",
        position: "absolute",
        opacity: "0.5",
        display: { md: "none", lg: "block" },
      }}
    >
      <Link
        onClick={handleLinkClicked}
        to={ROUTES.REGISTER}
        sx={{ textDecoration: "none" }}
      >
        <Box sx={{ display: "flex" }}>
          <AppRegistrationTwoToneIcon
            sx={{
              fontSize: "4rem",
              bgcolor: "beige",
              border: "2px solid white",
              borderRadius: "10px",
            }}
          />
          <Typography variant="subtitle1" sx={{ color: "white", ml: "5%" }}>
            Register
          </Typography>
        </Box>
      </Link>
      <Link
        onClick={handleLinkClicked}
        to={ROUTES.LOGIN}
        sx={{ textDecoration: "none" }}
      >
        <Box sx={{ display: "flex", mt: "50%" }}>
          <LockOpenTwoToneIcon
            sx={{
              fontSize: "4rem",
              padding: "5px",
              borderRadius: "10px",
              border: "2px solid white",
              color: "beige",
            }}
          />
          <Typography variant="subtitle1" sx={{ color: "white", ml: "5%" }}>
            LogIn
          </Typography>
        </Box>
      </Link>
      <Link
        onClick={handleLinkClicked}
        to={ROUTES.ABOUT}
        sx={{ textDecoration: "none" }}
      >
        <Box sx={{ display: "flex", mt: "50%" }}>
          <InfoOutlinedIcon
            sx={{
              fontSize: "4rem",
              padding: "5px",
              borderRadius: "10px",
              border: "2px solid white",
              color: "beige",
            }}
          />
          <Typography variant="subtitle1" sx={{ color: "white", ml: "5%" }}>
            About
          </Typography>
        </Box>
      </Link>
      <Link
        onClick={handleLinkClicked}
        to={ROUTES.SHARES}
        sx={{ textDecoration: "none" }}
      >
        <Box sx={{ display: "flex", mt: "50%" }}>
          <StackedLineChartOutlinedIcon
            sx={{
              fontSize: "4rem",
              padding: "5px",
              borderRadius: "10px",
              border: "2px solid white",
              color: "beige",
            }}
          />
          <Typography variant="subtitle1" sx={{ color: "white", ml: "5%" }}>
            Stock Today
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};
export default IconsMain;
