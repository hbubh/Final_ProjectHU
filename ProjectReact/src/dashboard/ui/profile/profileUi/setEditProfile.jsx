import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import ROUTES from "../../../../routes/ROUTES";
import EditUserSplit from "../../../../pages/ConnectUser/ui/EditUserSpilt";
import EditUserAble from "../../../../pages/ConnectUser/ui/EditUserAble";
import { validateEditUser } from "../../../../Validation/EditUserValidation";
import AlertToEdit from "../../../../pages/ConnectUser/ui/AlertToEdit";

const dataReq = [];
const EditUserPage = () => {
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  const [errorsState, setErrorsState] = useState(null);
  const [thisAble, setAble] = useState(true);
  const navigate = useNavigate();
  const { _id } = useParams();
  const [inputsValue, setInputsValue] = useState({
    first: "",
    middle: "",
    last: "",
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
  useEffect(() => {
    axios
      .get(`/users/${_id}`)
      .then(({ data }) => {
        const { user } = data;
        setInputsValue({
          first: user.name.first,
          middle: user.name.middle,
          last: user.name.last,
          phone: user.phone,
          url: user.image.url,
          alt: user.image.alt,
          state: user.address.state,
          country: user.address.country,
          city: user.address.city,
          street: user.address.street,
          houseNumber: user.address.houseNumber,
          zip: +user.address.zip,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);
  let request = {
    name: {
      first: inputsValue.first,
      middle: inputsValue.middle,
      last: inputsValue.last,
    },
    phone: inputsValue.phone,
    image: {
      url: inputsValue.url,
      alt: inputsValue.alt,
    },
    address: {
      state: inputsValue.state,
      country: inputsValue.country,
      city: inputsValue.city,
      street: inputsValue.street,
      houseNumber: `${inputsValue.houseNumber}`,
      zip: +inputsValue.zip,
    },
  };
  const arr = EditUserSplit(inputsValue);

  const handleInputsChange = (e) => {
    setInputsValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
    EditUserAble(inputsValue, setAble);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const joiResponse = validateEditUser(inputsValue);
      setErrorsState(joiResponse);
      if (joiResponse) return;
      const { data } = await axios.put(`/users/${_id}`, request);
      dataReq.push(data);
      toast.success(
        "Success Edit A User: " + inputsValue.first + " " + inputsValue.last,
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
      navigate(ROUTES.PROFILE);
    } catch (err) {
      toast.warn(` ${err.response.data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleCancel = () => {
    navigate(ROUTES.PROFILE);
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
        Edit User
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
        <AlertToEdit errorsState={errorsState} />
      </Grid>
      <Button
        onClick={handleSubmit}
        disabled={thisAble}
        fullWidth
        variant="contained"
        sx={{ ml: "10%", mb: 0.5, width: "80%" }}
      >
        Done
      </Button>
      <Button
        onClick={handleCancel}
        fullWidth
        variant="contained"
        sx={{
          ml: "25%",
          mb: 2,
          width: "50%",
          bgcolor: "black",
          color: "white",
        }}
      >
        Cancel
      </Button>
    </Box>
  );
};

export default EditUserPage;
