import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";

const AdminGuard = ({ children }) => {
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);

  if (userData && userData.isAdmin) {
    return children;
  } else {
    console.log(userData);
    return <Navigate to={ROUTES.LOGIN} replace={true} />;
  }
};
export default AdminGuard;
