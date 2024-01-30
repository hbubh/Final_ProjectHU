import { Box } from "@mui/material";
import LayoutComponent from "./layout/LayOut";
import useAutoLogin from "./hooks/useAutoLogin";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Routes from "./routes/Router";
import { useEffect, useState } from "react";
import performActionIfHourPassed from "./setTime";
import axios from "axios";

const App = () => {
  const [doneAuth, setDoneAuth] = useState(false);
  const [stopper, setStopper] = useState(1);
  const autoLogin = useAutoLogin();
  useEffect(() => {
    setInterval(() => {
      setStopper(stopper + 1);
    }, 600000);
    const doIt = performActionIfHourPassed();
    if (doIt) {
      axios
        .get("/shares/changeprice")
        .then(({ data }) => {})
        .catch((err) => {
          console.log("err", err);
        });
    }
  }, [stopper]);
  useEffect(() => {
    (async () => {
      try {
        await autoLogin();
      } catch (err) {
        console.log(err);
      } finally {
        setDoneAuth(true);
      }
    })();
  }, []);
  useEffect(() => {
    autoLogin();
  }, []);
  return (
    <Box>
      <ToastContainer
        position="bottom-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <LayoutComponent>{doneAuth ? <Routes /> : <></>}</LayoutComponent>
    </Box>
  );
};
export default App;
