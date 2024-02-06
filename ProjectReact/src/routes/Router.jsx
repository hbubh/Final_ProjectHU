import { Route, Routes } from "react-router-dom";
import ROUTES from "./ROUTES";
import MainPage from "../layout/main/ui/MainPage";
import RegisterPage from "../pages/ConnectUser/Register";
import LoginPage from "../pages/ConnectUser/LogIn";
import CheckOut from "../pages/checkOut/checkOut";
import Plans from "../pages/plan's/Plan's";
import ProInvester from "../pages/plan's/ProInvester";
import BuzzInvester from "../pages/plan's/BuzzInvester";
import SharesCenter from "../pages/Shares/SharesCenter";
import Blog from "../pages/news/Blog";
import Policy from "../pages/info/Policy";
import About from "../pages/info/About";
import DashboardT from "../dashboard/Dashboard";
import { useSelector } from "react-redux";
import CreateShare from "../dashboard/ui/buzz/CreateShare";
import MyShares from "../dashboard/ui/buzz/MyShares";
import EditSharePage from "../dashboard/ui/buzz/EditCompenet";
import Profile from "../dashboard/ui/profile/Profile";
import EditUserPage from "../dashboard/ui/profile/profileUi/setEditProfile";
import Admin from "../dashboard/ui/admin/Admin";
import AuthGuard from "../Guard/AuthGuard";
import BizzGuard from "../Guard/BizGuard";
import AdminGuard from "../Guard/AdminGuard";
import NotFound from "../pages/404/NotFound";

const Router = () => {
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  return (
    <Routes>
      <Route path={ROUTES.PLANS} element={<Plans />} />
      <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
      <Route path={ROUTES.SHARES} element={<SharesCenter />} />
      <Route path={ROUTES.NEWS} element={<Blog />} />
      <Route path={ROUTES.POLICY} element={<Policy />} />
      <Route path={ROUTES.ABOUT} element={<About />} />
      <Route
        path={ROUTES.HOME}
        element={loggedIn ? <DashboardT /> : <MainPage />}
      />
      <Route
        path={ROUTES.REGISTER}
        element={loggedIn ? <DashboardT /> : <RegisterPage />}
      />
      <Route
        path={ROUTES.LOGIN}
        element={loggedIn ? <DashboardT /> : <LoginPage />}
      />
      <Route
        path={ROUTES.CHECKOUT}
        element={
          <AuthGuard>
            <CheckOut />
          </AuthGuard>
        }
      />
      <Route
        path={ROUTES.PROPLAN}
        element={
          <AuthGuard>
            <ProInvester />
          </AuthGuard>
        }
      />
      <Route
        path={ROUTES.BUZZPLAN}
        element={
          <AuthGuard>
            <BuzzInvester />
          </AuthGuard>
        }
      />

      <Route
        path={ROUTES.CREATE}
        element={
          <AuthGuard>
            <BizzGuard>
              <CreateShare />
            </BizzGuard>
          </AuthGuard>
        }
      />
      <Route
        path={ROUTES.MYSHARES}
        element={
          <AuthGuard>
            <BizzGuard>
              <MyShares />
            </BizzGuard>
          </AuthGuard>
        }
      />
      <Route
        path={ROUTES.PROFILE}
        element={
          <AuthGuard>
            <Profile />
          </AuthGuard>
        }
      />
      <Route
        path={ROUTES.ADMIN}
        element={
          <AuthGuard>
            <AdminGuard>
              <Admin />
            </AdminGuard>
          </AuthGuard>
        }
      />
      <Route
        path={`${ROUTES.EDITPROFILE}/:_id`}
        element={
          <AuthGuard>
            <EditUserPage />
          </AuthGuard>
        }
      />
      <Route
        path={`${ROUTES.EDIT}/:_id`}
        element={
          <AuthGuard>
            <BizzGuard>
              <EditSharePage />
            </BizzGuard>
          </AuthGuard>
        }
      />
      <Route
        path={ROUTES.DASHBOARD}
        element={
          <AuthGuard>
            <DashboardT />
          </AuthGuard>
        }
      />
    </Routes>
  );
};
export default Router;
