import { Box, Button } from "@mui/material";
import axios from "axios";
import ROUTES from "../../../../routes/ROUTES";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import React, { Fragment } from "react";
import PopUpDelete from "./PopUpDelete";
import { authActions } from "../../../../store/authSlice";
let x = 0;
const DeleteUser = ({ thisId, thisAdmin }) => {
  const navigate = useNavigate();
  const [thisDisplay, setDisplay] = React.useState("none");
  const dispatch = useDispatch();
  const [thisOp, setOp] = React.useState("1");

  const handleDeleteClick = () => {
    window.scrollTo(0, 0);
    setDisplay("block");
    setOp("0");
  };
  const handleCancelDelete = () => {
    setDisplay("none");
    setOp("1");
  };
  const handleDeleteDone = async () => {
    try {
      let id = thisId;
      let data = await axios.delete(`/users/${id}`);
      localStorage.clear();
      sessionStorage.clear();
      toast.info("You Delete Your User successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      x = 1;
      navigate(ROUTES.HOME);
      dispatch(authActions.logout());
    } catch (err) {
      toast.info(`Unsuccess data error, `, {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log(err);
    }
  };

  return (
    <Fragment>
      <Box sx={{ display: thisDisplay }}>
        <PopUpDelete
          createDel={handleDeleteDone}
          cancelDel={handleCancelDelete}
        />
      </Box>
      <Button
        variant="contained"
        disabled={thisAdmin}
        sx={{
          opacity: thisOp,
          transition: "all 0.5s",
          bgcolor: "black",
          color: "white",
          mt: "2%",
          width: "100%",
        }}
        onClick={handleDeleteClick}
      >
        Delete User
      </Button>
    </Fragment>
  );
};
export default DeleteUser;
