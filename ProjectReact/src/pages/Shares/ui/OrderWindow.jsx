import { Button, Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ROUTES from "../../../routes/ROUTES";
import { useSelector } from "react-redux";

const OrderWindow = ({ myData, y, ClickX }) => {
  const [input, setInput] = React.useState(Number);
  const [inputEmail, setEmail] = React.useState("");
  const [thisWallet, setWallet] = React.useState(null);
  const [thisCost, setCost] = React.useState(5);
  const [thisPro, setPro] = React.useState("(User- BasicInvester)");
  const navigate = useNavigate();
  const [disAble, setAble] = React.useState(true);
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  const thisTheme = useSelector((bigPie) => bigPie.themeSlice.darkTheme);

  useEffect(() => {
    if (!userData._id) return;
    axios.get("/users/" + userData._id).then(({ data }) => {
      const { user } = data;
      setWallet(user.wallet);
    });
  }, [userData]);

  useEffect(() => {
    if (userData && userData.isPro) {
      setCost(0);
      setPro(" (User- InvestorPro)");
    }
  }, [userData]);

  let type = "";
  if (y === "Sell") {
    type = "sell";
  } else {
    type = "buy";
  }
  const handleClickOrder = () => {
    axios
      .patch(`users/wallet/${type}Share`, {
        email: inputEmail,
        shares: {
          share: myData._id,
          num: input,
        },
        costs: input * myData.price[1],
      })
      .then(({ data }) => {
        toast(`You  ${type}ing Successfuly!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        ClickX();
        navigate(ROUTES.HOME);
      })
      .catch((err) => {
        console.log(err);
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

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleEmailInputChange = (e) => {
    setEmail(e.target.value);
    setAble(false);
  };
  const handleClickX = () => {
    ClickX();
  };
  return (
    <Box
      sx={{
        position: "absolute",
        width: "50%",
        height: "auto",
        mt: "20vh",
        ml: "25%",
        border: "3px solid black",
        borderRadius: "20px",
        boxSizing: "border-box",
        zIndex: "10",
      }}
    >
      <Box
        /*  bgcolor={thisTheme ? "grey" : "darkgray"} */

        color={thisTheme ? "white" : "white"}
        sx={{
          width: "100%",
          padding: "10%",
          borderRadius: "20px",
          paddingTop: "2%",
          backgroundImage:
            "url('https://static.twentyoverten.com/5d4b084639d62f73a1d95a45/myOokoKjoa/market-background.jpg')",
          backgroundSize: "cover",
        }}
      >
        <Button onClick={handleClickX} sx={{ ml: "-10%" }}>
          X
        </Button>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Order-Type: {y}{" "}
          <span
            style={{
              fontWeight: "300",
              borderBottom: `2px solid ${thisTheme ? "black" : "white"} `,
            }}
          >
            {myData.title}
          </span>
        </Typography>
        <Box sx={{ height: { xs: "2vh", lg: "5vh" } }} />
        <Box display={"flex"} sx={{ boxSizing: "border-box" }}>
          <Box
            sx={{
              width: "55%",
              bgcolor: "rgb(0,0,0,0.7)",
              padding: "3%",
              ml: "-3%",
            }}
          >
            <Typography variant="subtitle3" sx={{ width: "100%" }}>
              • Share:{" "}
              <span style={{ fontWeight: "bold" }}>{myData.title}</span> <br />•
              Subtitle:{" "}
              <span style={{ fontWeight: "bold" }}>{myData.subtitle}</span>{" "}
              <br />• description:
              <span style={{ fontWeight: "bold" }}>
                {" "}
                {myData.description}
              </span>{" "}
              <br />• Price per Share:{" "}
              <span style={{ color: "green", fontWeight: "bold" }}>
                ${myData.price[1]}{" "}
              </span>{" "}
              <br />
            </Typography>
            <TextField
              sx={{
                width: "95%",
                bgcolor: "darkgray",
              }}
              margin="normal"
              variant="filled"
              required
              fullWidth
              name="pcs"
              label={`${y} units (number)`}
              type="number"
              id="pcs"
              value={input}
              onChange={handleInputChange}
            />{" "}
            <br />
            <TextField
              sx={{
                width: "95%",
                bgcolor: "darkgray",
              }}
              margin="normal"
              variant="filled"
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
            <Box sx={{ height: { xs: "2vh", lg: "4vh" } }} />
            <Typography variant="h5">
              Order Costs: ${thisCost}{" "}
              <span style={{ fontWeight: "300", fontSize: "1rem" }}>
                {thisPro}
              </span>
            </Typography>
            <Box sx={{ height: { xs: "2vh", lg: "2vh" } }} />
            <Typography variant="h5">
              Total Price: ${myData.price[1] * input + thisCost}
            </Typography>
            <Box sx={{ height: { xs: "2vh", lg: "4vh" } }} />
            {type === "buy" ? (
              <Typography variant="body1">My Wallet: ${thisWallet}</Typography>
            ) : (
              <></>
            )}
            <Button
              onClick={handleClickOrder}
              disabled={disAble}
              variant="contained"
              sx={{ bgcolor: "white", color: "black" }}
            >
              ORDER!
            </Button>
          </Box>
          <Box
            sx={{
              width: "40%",
              ml: "3%",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "auto-20%",
                border: `2px solid ${thisTheme ? "black" : "white"}`,
                boxShadow: "3px 3px 7px",
                borderRadius: "10px",
              }}
              src={myData.image.url}
              alt={myData.image.alt}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default OrderWindow;
