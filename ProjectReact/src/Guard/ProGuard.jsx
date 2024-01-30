import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";

const ProGuard = ({ children }) => {
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);

  if (userData && userData.isPro) {
    return children;
  } else {
    return <Navigate to={ROUTES.LOGIN} replace={true} />;
  }
};
export default ProGuard;
