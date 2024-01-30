import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Divider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AlertToShare from "./AlertToShare";
import ROUTES from "../../../routes/ROUTES";
import ShareComponent from "./ShareComponent";

const TamplateEdit = ({ handleCreateCardClick, errorsState, idCard }) => {
  const [thisAble, setAble] = React.useState(true);
  const [inputsValue, setInputValue] = useState({
    title: "",
    subtitle: "",
    phone: "",
    email: "",
    description: "",
    web: "",
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
      .get("/shares/" + idCard)
      .then(({ data }) => {
        const { share } = data;
        const newData = {
          title: share.title,
          subtitle: share.subtitle,
          description: share.description,
          phone: share.phone,
          email: share.email,
          web: share.web,
          url: share.image.url,
          alt: share.image.alt,
          state: share.address.state,
          country: share.address.country,
          city: share.address.city,
          street: share.address.street,
          houseNumber: share.address.houseNumber,
          zip: +share.address.zip,
        };
        setInputValue(newData);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);
  let request = {
    title: inputsValue.title,
    subtitle: inputsValue.subtitle,
    description: inputsValue.description,
    phone: inputsValue.phone,
    email: inputsValue.email,
    web: inputsValue.web,
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
  const arr = [
    { id: "title", label: "Title", require: true, value: inputsValue.title },
    {
      id: "subtitle",
      label: "Subtitle",
      require: true,
      value: inputsValue.subtitle,
    },
    { id: "phone", label: "Phone", require: true, value: inputsValue.phone },
    { id: "email", label: "Email", require: true, value: inputsValue.email },
    {
      id: "description",
      label: "Description",
      require: true,
      value: inputsValue.description,
    },
    { id: "web", label: "Web", require: false, value: inputsValue.web },
    { id: "url", label: "IMG-Url", require: false, value: inputsValue.url },
    { id: "alt", label: "Alt", require: false, value: inputsValue.alt },
    { id: "state", label: "State", require: false, value: inputsValue.state },
    {
      id: "country",
      label: "Country",
      require: true,
      value: inputsValue.country,
    },
    { id: "city", label: "City", require: true, value: inputsValue.city },
    { id: "street", label: "Street", require: true, value: inputsValue.street },
    {
      id: "houseNumber",
      label: "HouseNumber",
      require: true,
      value: inputsValue.houseNumber,
    },
    { id: "zip", label: "Zip", require: false, value: inputsValue.zip },
  ];
  const handleInputChange = (e) => {
    setInputValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
    setAble(false);
  };
  const handleCreateCardClickS = () => {
    handleCreateCardClick(request, inputsValue);
  };
  return (
    <React.Fragment>
      <Box display={"flex"} sx={{ paddingTop: "3%" }}>
        <Box sx={{ width: "60%" }}>
          <Container>
            {arr.map((ta) => (
              <TextField
                sx={{
                  marginLeft: "1%",
                  marginTop: "2%",
                  width: { xs: "90%", md: "45%" },
                }}
                variant="outlined"
                id={ta.id}
                label={ta.label}
                value={ta.value}
                required={ta.require}
                key={ta.label}
                onChange={handleInputChange}
              />
            ))}
            <Box sx={{ width: "100%", padding: "10px" }}>
              <AlertToShare errorsState={errorsState} />
              <Button
                variant="outlined"
                sx={{
                  mt: 2,
                  marginRight: "1%",
                  width: { xs: "100%", md: "70%" },
                  ml: "0%",
                  bgcolor: "lightskyblue",
                  color: "blue",
                }}
                onClick={handleCreateCardClickS}
                disabled={thisAble}
              >
                Get Share!
              </Button>
              <Link to={ROUTES.HOME}>
                <Button
                  variant="outlined"
                  sx={{
                    mt: 2,
                    width: { xs: "90%", md: "25%" },
                    ml: "0%",
                    bgcolor: "navy",
                    color: "gray",
                  }}
                >
                  Discrad
                </Button>
              </Link>
            </Box>
          </Container>
        </Box>
        <Box sx={{ width: "40%", padding: "10px", paddingTop: "2%" }}>
          <Divider>
            <Typography variant="h4" sx={{ mb: 1, padding: "10px", pb: "0px" }}>
              Preview
            </Typography>
          </Divider>

          <ShareComponent inputsValue={inputsValue} />
        </Box>
      </Box>
    </React.Fragment>
  );
};
export default TamplateEdit;
