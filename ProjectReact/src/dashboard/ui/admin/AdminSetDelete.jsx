import * as React from "react";
import Paper from "@mui/material/Paper";
import { Button, CircularProgress, TextField, Typography } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

const circle = <CircularProgress />;
const AdminSetDelete = ({ setDis, thisDis }) => {
  const [thisValue, setVlue] = React.useState("");
  const [thisCircle, setCircle] = React.useState(" Delete User!");
  const [thisAble, setAble] = React.useState(true);

  const handleChangeInput = (e) => {
    setVlue(e.target.value);
    setAble(false);
  };
  const handleSetBuzClick = async () => {
    try {
      let dataFromServer = await axios.delete(`/users/${thisValue}`);
      setCircle(circle);
      toast(`You Delete User: ${thisValue} successfully . `, {
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
        setCircle(" Delete User!");
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
        mt: "3%",
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
        Delete
      </Button>
    </Paper>
  );
};
export default AdminSetDelete;
