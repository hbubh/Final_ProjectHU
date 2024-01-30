import { Box, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PopUpBuz from "./PopUpBuz";
import { useDispatch } from "react-redux";
import axios from "axios";
import ROUTES from "../../../../routes/ROUTES";
import { toast } from "react-toastify";
import { useState } from "react";
import { authActions } from "../../../../store/authSlice";

const circle = <CircularProgress sx={{ ml: "50%" }} />;
const ProfileSetBuz = ({ thisId, thisPop, cancelBuz }) => {
  const [thisCircle, setCircle] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleBuzClick = async () => {
    try {
      let id = thisId;
      let dataFromServer = await axios.patch(`/users/${id}`);
      setCircle(circle);
      toast.success("You Upgrade your User to Busniess successfully . ", {
        position: toast.POSITION.TOP_CENTER,
      });
      setTimeout(() => {
        dispatch(authActions.logout());
        navigate(ROUTES.HOME);
      }, 4000);
    } catch (err) {
      toast.info(`Unsuccess data error, ${err.response.data.message} `, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  const handleCancelClick = () => {
    cancelBuz();
  };
  return (
    <Box sx={{ display: thisPop }}>
      <PopUpBuz createBuz={handleBuzClick} cancelBuz={handleCancelClick} />
      {thisCircle}
    </Box>
  );
};
export default ProfileSetBuz;
