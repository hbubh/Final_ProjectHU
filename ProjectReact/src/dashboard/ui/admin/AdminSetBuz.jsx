import * as React from "react";
import Paper from "@mui/material/Paper";
import { Button, CircularProgress, TextField, Typography } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

const circle = <CircularProgress />;
const AdminSetBuz = ({ setDis, thisDis }) => {
  const [thisValue, setVlue] = React.useState("");
  const [thisAble, setAble] = React.useState(true);
  const [thisCircle, setCircle] = React.useState(
    " Upgrade User To Busniess Plan"
  );

  const handleChangeInput = (e) => {
    setVlue(e.target.value);
    setAble(false);
  };
  const handleSetBuzClick = async () => {
    try {
      console.log("hi");
      const dataFromServer = await axios.patch(`/users/${thisValue}`);
      console.log(dataFromServer);
      setCircle(circle);
      toast(`You Upgrade User: ${thisValue} to Busniess successfully . `, {
        position: "top-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setDis(!thisDis);
      setTimeout(() => {
        setCircle(" Upgrade User To Busniess Plan");
      }, 3000);
    } catch (err) {
      toast.info(`Unsuccess data error, ${err.response.data} `, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  return (
    <Paper
      sx={{
        mt: "10%",
        padding: "30px",
        textAlign: "center",
        border: "1px solid black",
      }}
    >
      <Typography variant="h5" sx={{ padding: "10px", mb: "3%" }}>
        {thisCircle}
      </Typography>
      <TextField
        variant="outlined"
        label="USER ID"
        value={thisValue}
        onChange={handleChangeInput}
        sx={{ padding: "10px", ml: "3%", width: { xs: "70%", md: "40%" } }}
      />
      <Button
        variant="contained"
        sx={{ padding: "10px", ml: "5%", mt: "2%" }}
        onClick={handleSetBuzClick}
        disabled={thisAble}
      >
        Set Busniess Plan
      </Button>
    </Paper>
  );
};
export default AdminSetBuz;
