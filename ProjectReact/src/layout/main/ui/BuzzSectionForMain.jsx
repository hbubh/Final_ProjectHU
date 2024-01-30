import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Typography, Box } from "@mui/material";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { Link } from "react-router-dom";
import CommentsBuzz from "./CommentsBuzz";
import ROUTES from "../../../routes/ROUTES";

const BuzzSecMain = () => {
  const handleLinkClicked = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Box
      sx={{
        position: "absolute",
        marginTop: { md: "360%", lg: "230%" },
        width: "100%",
      }}
    >
      <Typography
        gutterBottom
        variant="h3"
        component="div"
        sx={{
          fontWeight: "300",
          color: "maroon",
          ml: "35%",
          textAlign: "center",
        }}
      >
        Owners of Public Companies: You Have come to the{" "}
        <span style={{ fontWeight: "bold" }}>right place</span>
      </Typography>
      <CommentsBuzz />
      <StarHalfIcon
        sx={{
          position: "absolute",
          color: "black",
          mt: "-17%",
          width: "20%",
          height: "auto",
          ml: "70%",
          opacity: "0.4",
        }}
      />
      <Card
        sx={{
          width: "75%",
          ml: "5%",
          mt: "5%",
          bgcolor: "lightskyblue",
          border: "3px solid white",
          opacity: "0.7",
        }}
      >
        <CardMedia
          component="img"
          alt="investMan"
          height="170"
          image="https://th.bing.com/th/id/R.09dbeac2674ae0e8edc546099e64f9b0?rik=Bx65sFTgJE02EA&riu=http%3a%2f%2fidealfinance.lk%2fwp-content%2fuploads%2f2016%2f06%2fInvestors-.jpg&ehk=PsbE1YHdj2nUy3U%2fSxVwHGA3Qn%2bFuuKOlMZHGrrYEdk%3d&risl=&pid=ImgRaw&r=0"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "700", textAlign: "center" }}
          >
            BusinessPro
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

export default BuzzSecMain;
