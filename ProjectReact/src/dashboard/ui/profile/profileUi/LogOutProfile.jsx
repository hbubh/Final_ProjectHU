import { Button } from "@mui/material";
import { Fragment } from "react";
import ROUTES from "../../../../routes/ROUTES";
import { authActions } from "../../../../store/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const LogOutPro = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOutClick = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.scrollTo(0, 0);
    dispatch(authActions.logout());
    navigate(ROUTES.LOGIN);
  };
  return (
    <Fragment>
      <Button
        sx={{ width: "100%" }}
        variant="contained"
        onClick={handleLogOutClick}
      >
        Log Out
      </Button>
    </Fragment>
  );
};
export default LogOutPro;
