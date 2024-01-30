// import * as React from "react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { toast } from "react-toastify";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import axios from "axios";
import { Alert } from "@mui/material";
import { validateLogin } from "../../Validation/logInValidation";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import useAutoLogin from "../../hooks/useAutoLogin";
import { storeToken } from "./ui/setRemember.js";
import ROUTES from "../../routes/ROUTES.jsx";

const LoginPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [thisOP, setOP] = useState("0");
  const [passwordValue, setPasswordValue] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const navigate = useNavigate();
  const [errorsState, setErrorsState] = useState(null);
  const [thisAble, setAble] = React.useState(true);
  useEffect(() => {
    setTimeout(() => {
      setOP("1");
    }, 1500);
  }, []);
  const autoLogin = useAutoLogin();
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const joiResponse = validateLogin({
        email: emailValue,
        password: passwordValue,
      });
      setErrorsState(joiResponse);
      if (joiResponse) return;
      let { data } = await axios.post("/users/login", {
        email: emailValue,
        password: passwordValue,
      });
      storeToken(data, rememberMe);
      toast.success("You logged in successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      autoLogin(true);
      navigate(ROUTES.HOME);
    } catch (err) {
      toast.warn(` ${err.response.data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  window.scrollTo(0, 0);
  const handleEmailInputChange = (e) => {
    setEmailValue(e.target.value);
  };
  const handlePasswordInputChange = (e) => {
    setPasswordValue(e.target.value);
    setAble(false);
  };
  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };
  const handleRegister = () => {
    navigate(ROUTES.REGISTER);
  };

  return (
    <Grid container component="main" sx={{ height: "95vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        md={12}
        sx={{
          backgroundImage: "url(https://picsum.photos/1500/1000?grayscale)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      />
      <Grid item xs={12} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
            mt: "-90vh",
            ml: "10%",
            maxWidth: "50vw",
            border: "5px solid black",
            padding: "3%",
            borderRadius: "20px",
            bgcolor: "rgb(0, 0, 0, 0.7)",
            color: "white",
            transition: "all 2s",
            opacity: thisOP,
          }}
        >
          <Avatar
            sx={{
              m: 1,
              bgcolor: "black",
              padding: "4%",
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ fontWeight: "300" }}>
            LOGIN
          </Typography>
          <Box
            onSubmit={handleSubmit}
            component="form"
            noValidate
            sx={{ mt: 1, color: "white" }}
          >
            <TextField
              sx={{ bgcolor: "rgb(255, 255, 255, 0.4)" }}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={emailValue}
              onChange={handleEmailInputChange}
            />
            {errorsState && errorsState.email && (
              <Alert sx={{ width: "80%", ml: "10%" }} severity="warning">
                {errorsState.email}
              </Alert>
            )}
            <TextField
              sx={{ bgcolor: "rgb(255, 255, 255, 0.4)" }}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={passwordValue}
              onChange={handlePasswordInputChange}
            />
            {errorsState && errorsState.password && (
              <Alert sx={{ width: "80%", ml: "10%" }} severity="warning">
                {errorsState.password}
              </Alert>
            )}

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              onChange={handleRememberMeChange}
              checked={rememberMe}
            />
            <Button
              type="submit"
              disabled={thisAble}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item>
                <Link onClick={handleRegister} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
