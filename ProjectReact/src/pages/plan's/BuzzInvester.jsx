import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Typography, Box } from "@mui/material";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import CommentsBuzz from "../../layout/main/ui/CommentsBuzz";
import TextField from "@mui/material/TextField";
import { authActions } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import ROUTES from "../../routes/ROUTES";
import { useDispatch } from "react-redux";

const BuzzInvester = () => {
  const [inputEmail, setEmail] = React.useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [disAble, setAble] = React.useState(true);
  const handlePro = () => {
    axios
      .patch("users/plan/buz", { email: inputEmail })
      .then(({ data }) => {
        toast("You are InverstorBusiness! Re Login to get Access", {
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
      });
  };
  const handleEmailInputChange = (e) => {
    setEmail(e.target.value);
    setAble(false);
  };
  return (
    <Box
      sx={{
        padding: "5%",
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
          ml: { md: "0", lg: "35%" },
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
          width: "100%",
          mt: { md: "20%", lg: "5%" },
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
            id="email"
            autoComplete="current-email"
            value={inputEmail}
            onChange={handleEmailInputChange}
          />
          <Button
            size="large"
            onClick={handlePro}
            disabled={disAble}
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
        </CardActions>
      </Card>
    </Box>
  );
};

export default BuzzInvester;
