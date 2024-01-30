import { Container, Grid, Typography, Divider } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ROUTES from "../../../routes/ROUTES";
import { toast } from "react-toastify";
import { useState } from "react";
import { validateShare } from "../../../Validation/shareValidation";
import TamplateEdit from "./TamplteToEdit";

const EditSharePage = () => {
  const [errorsState, setErrorsState] = useState(null);
  const navigate = useNavigate();
  const { _id } = useParams();

  const handleCreateCardClickS = async (request, inputsValue) => {
    try {
      const joiResponse = validateShare(inputsValue);
      setErrorsState(joiResponse);
      if (joiResponse) return;
      const { data } = await axios.put("/shares/" + _id, request);
      navigate(ROUTES.MYSHARES);
      toast.success(" Your Share is Updated !", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (err) {
      toast.warn(`There is A Problem, Error: ${err.response.data} `, {
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
        Share - Edit
      </Typography>
      <Typography
        variant="body1"
        sx={{ mb: 1, padding: "3px", ml: "7px", textAlign: "center" }}
      >
        Put a new values in the correct input
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Grid container flexDirection={"column"} spacing={2}>
        <TamplateEdit
          handleCreateCardClick={handleCreateCardClickS}
          errorsState={errorsState}
          idCard={_id}
        />
      </Grid>
    </Container>
  );
};
export default EditSharePage;
