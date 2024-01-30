import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import ROUTES from "../../routes/ROUTES";
import AlertToRgister from "./ui/AlertToRgister";
import { validateRegister } from "../../Validation/registerValidation";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import registerSplit from "./ui/RegisterSpilt";
import rgisterAble from "./ui/RegisterAble";
const dataReq = [];
const RegisterPage = () => {
  const [errorsState, setErrorsState] = useState(null);
  const [thisAble, setAble] = useState(true);
  const navigate = useNavigate();
  const [inputsValue, setInputsValue] = useState({
    first: "",
    middle: "",
    last: "",
    email: "",
    password: "",
    phone: "",
    url: "",
    alt: "",
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
  });
  let request = {
    name: {
      first: inputsValue.first,
      middle: inputsValue.middle,
      last: inputsValue.last,
    },
    phone: inputsValue.phone,
    email: inputsValue.email,
    password: inputsValue.password,
    image: {
      url: inputsValue.url,
      alt: inputsValue.alt,
    },
    address: {
      state: inputsValue.state,
      country: inputsValue.country,
      city: inputsValue.city,
      street: inputsValue.street,
      houseNumber: inputsValue.houseNumber,
      zip: +inputsValue.zip,
    },
  };
  const arr = registerSplit(inputsValue);

  const handleInputsChange = (e) => {
    setInputsValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
    rgisterAble(inputsValue, setAble);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const joiResponse = validateRegister(inputsValue);
      setErrorsState(joiResponse);
      if (joiResponse) return;
      const { data } = await axios.post("/users", request);

      dataReq.push(data);
      toast.success(
        "Success Register A User: " +
          inputsValue.first +
          " " +
          inputsValue.last,
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
      navigate(ROUTES.LOGIN);
    } catch (err) {
      toast.warn(` ${err.response.data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  const handleLogIn = () => {
    navigate(ROUTES.LOGIN);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Avatar
        sx={{
          bgcolor: "black",
          color: "white",
          width: "100%",
          mt: "4%",
          borderRadius: "0 0 100px 100px",
          padding: "5%",
        }}
      >
        <HowToRegIcon sx={{ fontSize: "5rem" }} />
        Sign up
      </Avatar>

      <Grid container sx={{ mt: "5%" }}>
        <Grid item sx={{ width: "80%", ml: "10%" }}>
          <Grid container spacing={2}>
            {arr.map((input) => (
              <Grid item key={input.name} sx={{ width: "50%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  name={input.name}
                  required={input.require}
                  fullWidth
                  id={input.id}
                  label={input.label}
                  type={input.name}
                  autoFocus
                  value={input.value}
                  onChange={handleInputsChange}
                />{" "}
              </Grid>
            ))}
          </Grid>
        </Grid>
        <AlertToRgister errorsState={errorsState} />
      </Grid>
      <Button
        onClick={handleSubmit}
        disabled={thisAble}
        fullWidth
        variant="contained"
        sx={{ ml: "10%", mb: 2, width: "80%" }}
      >
        Sign Up
      </Button>
      <Grid item sx={{ padding: "10px", width: "50%", ml: "40%" }}>
        <Link variant="body2" onClick={handleLogIn}>
          Already have an account? Sign in
        </Link>
      </Grid>
    </Box>
  );
};

export default RegisterPage;
