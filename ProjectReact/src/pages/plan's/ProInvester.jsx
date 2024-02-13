import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { Typography, Box } from "@mui/material";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { toast } from "react-toastify";
import ChartForPlan from "./ui/ChartForPlan";
import { useNavigate } from "react-router-dom";
import Comments from "../../layout/main/ui/Comments";
import ROUTES from "../../routes/ROUTES";
import axios from "axios";
import { authActions } from "../../store/authSlice";
import TextField from "@mui/material/TextField";

const ProInvester = () => {
  const [inputEmail, setEmail] = React.useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [disAble, setAble] = React.useState(true);
  const handlePro = () => {
    axios
      .patch("users/plan/pro", { email: inputEmail })
      .then(({ data }) => {
        toast("You are InverstorPro! Re Login to get Access", {
          position: "top-right",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        localStorage.clear("token");
        sessionStorage.clear("token");
        window.scrollTo(0, 0);
        dispatch(authActions.logout());
        navigate(ROUTES.LOGIN);
      })
      .catch((err) => {
        toast(` ${err.response.data.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log(err);
      });
  };
  const handleEmailInputChange = (e) => {
    setEmail(e.target.value);
    setAble(false);
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: { md: "100vh", lg: "auto" },
        padding: "5%",
        bgcolor: "black",
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
      <ChartForPlan />
      <Card
        sx={{
          width: "100%",
          mt: { md: "90%", lg: "40%" },
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
          <TextField
            sx={{
              width: "120%",
              border: "2px solid black",
              borderRadius: "20px",
            }}
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email"
            type="email"
            variant="filled"
            id="email"
            autoComplete="current-email"
            value={inputEmail}
            onChange={handleEmailInputChange}
          />
          <Button
            size="large"
            variant="contained"
            disabled={disAble}
            onClick={handlePro}
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
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProInvester;
