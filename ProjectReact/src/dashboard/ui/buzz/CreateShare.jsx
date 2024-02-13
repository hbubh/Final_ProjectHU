import { Container, Grid, Typography, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import ROUTES from "../../../routes/ROUTES";
import Tamplate from "./Tamplte";
import { validateShare } from "../../../Validation/shareValidation";

const CreateShare = () => {
  const [errorsState, setErrorsState] = useState(null);
  const navigate = useNavigate();
  const handleCreateCardClickS = async (request, inputsValue) => {
    try {
      const joiResponse = validateShare(inputsValue);
      setErrorsState(joiResponse);
      if (joiResponse) {
        console.log(joiResponse);
        return;
      }
      const { data } = await axios.post("/shares", request);
      navigate(ROUTES.MYSHARES);
      toast.success(" Your Share is Created !", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (err) {
      toast.warn(`There is A Problem, Error: ${err.response.data.message} `, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };
  return (
    <Container sx={{ padding: "50px", paddingTop: "5%" }}>
      <Typography
        variant="h2"
        sx={{ mb: 1, padding: "10px", pb: "0px", textAlign: "center" }}
      >
        Create New-Share
      </Typography>
      <Typography
        variant="body1"
        sx={{ mb: 1, padding: "3px", ml: "14px", textAlign: "center" }}
      >
        Put a new values in the correct input <br />
        <span style={{ fontWeight: "300", fontSize: "0.8rem" }}>
          *All shares start at $300 value
        </span>{" "}
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Grid container flexDirection={"column"} spacing={2}>
        <Tamplate
          handleCreateCardClick={handleCreateCardClickS}
          errorsState={errorsState}
        />
      </Grid>
    </Container>
  );
};
export default CreateShare;
