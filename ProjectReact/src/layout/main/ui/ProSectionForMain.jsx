import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Typography, Box } from "@mui/material";

import StarHalfIcon from "@mui/icons-material/StarHalf";
import Comments from "./Comments";
import ROUTES from "../../../routes/ROUTES";

const ProSecMain = () => {
  const handleLinkClicked = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Box
      sx={{
        position: "absolute",
        marginTop: { md: "260%", lg: "175%" },
        width: "100%",
      }}
    >
      <Typography
        gutterBottom
        variant="h3"
        component="div"
        sx={{ fontWeight: "700", color: "lightskyblue", ml: "10%" }}
      >
        Upgrade To InvesterPro
        <StarHalfIcon /> <br />
        And Get Access to new Skills
      </Typography>
      <Comments />
      <StarHalfIcon
        sx={{
          position: "absolute",
          color: "blueviolet",
          mt: "-17%",
          width: "20%",
          height: "auto",
          opacity: "0.2",
        }}
      />
      <Card
        sx={{
          width: "75%",
          ml: "20%",
          mt: "5%",
          bgcolor: "darkgrey",
          border: "3px solid white",
          opacity: "0.7",
        }}
      >
        <CardMedia
          component="img"
          alt="investMan"
          height="170"
          image="https://globalexportise.com/wp-content/uploads/2017/07/modelo-competitivo-mercados-exterior.jpg"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "700", textAlign: "center" }}
          >
            InvesterPro
            <StarHalfIcon />
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontWeight: "400", textAlign: "center" }}
          >
            Upgrade today to our Pro subscription to get full access to all the
            tools
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            to={ROUTES.REGISTER}
            style={{ textDecoration: "none", width: "100%" }}
            onClick={handleLinkClicked}
          >
            <Button
              size="large"
              variant="contained"
              sx={{
                width: "80%",
                bgcolor: "black",
                color: "white",
                ml: "10%",
                borderRadius: "20px",
              }}
            >
              Lets Do It
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProSecMain;
