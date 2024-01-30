import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ROUTES from "../../../routes/ROUTES";
import { authActions } from "../../../store/authSlice";

const LogOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOutClick = () => {
    localStorage.clear("token");
    sessionStorage.clear("token");
    window.scrollTo(0, 0);
    dispatch(authActions.logout());
    navigate(ROUTES.HOME);
  };

  return (
    <ListItemButton onClick={handleLogOutClick} sx={{ bgcolor: "grey" }}>
      <ListItemIcon>
        <LogoutIcon sx={{ color: "black" }} />
      </ListItemIcon>
      <ListItemText primary="LogOut" sx={{ color: "black" }} />
    </ListItemButton>
  );
};
export default LogOut;
