import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import { toast } from "react-toastify";
import { chargeAble, chargeAble2 } from "./ui/chargeAble";
import axios from "axios";
import ROUTES from "../../routes/ROUTES";

const steps = ["Personal Information", "Payment details", "Review your order"];
const Checkout = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const navigate = useNavigate();
  const [thisAble, setAble] = React.useState(true);
  const [thisOP, setOP] = React.useState(0);
  const thisTheme = useSelector((bigPie) => bigPie.themeSlice.darkTheme);
  const [inputsValue, setInputsValue] = React.useState({
    change: "",
  });
  const [inputsValue1, setInputsValue1] = React.useState({
    first: "",
    last: "",
    email: "",
    state: "",
    country: "",
    city: "",
    zip: "",
  });

  const chregeMe = async () => {
    try {
      let dataFromServer = await axios.patch("/users/wallet/charge", {
        wallet: inputsValue.change,
        email: inputsValue1.email,
      });
      toast(`You are charge your wallet: $${inputsValue.change}!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate(ROUTES.HOME);
    } catch (err) {
      toast(` ${err.response.data.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const handleInputsChange1 = (e) => {
    setInputsValue1((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
    chargeAble(inputsValue, setAble);
  };
  const handleInputsChange = (e) => {
    setInputsValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
    chargeAble2(inputsValue, setAble);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <AddressForm
            setAble={setAble}
            handleInputsChange1={handleInputsChange1}
            inputsValue1={inputsValue1}
          />
        );
      case 1:
        return (
          <PaymentForm
            setAble={setAble}
            handleInputsChange={handleInputsChange}
            inputsValue={inputsValue}
          />
        );
      case 2:
        return <Review inputsValue={inputsValue} inputsValue1={inputsValue1} />;
      default:
        throw new Error("Unknown step");
    }
  }
  React.useEffect(() => {
    setTimeout(() => {
      setOP("1");
    }, 1500);
  }, []);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setAble(true);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
    setAble(true);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Box component="main" sx={{ width: "100vw" }}>
        <Box
          sx={{
            backgroundImage: "url(https://picsum.photos/1500/1000?grayscale)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: { xs: "100vh", lg: "150vh" },
            width: "100vw",
          }}
        />
        <Paper
          variant="outlined"
          sx={{
            position: "absolute",
            transition: "all 2s",
            opacity: thisOP,
            width: { xs: "60%", lg: "40%" },
            bgcolor: !thisTheme ? "rgb(255,255,255,0.8)" : "rgb(0,0,0,0.8)",
            height: "auto",
            mt: { xs: "-90vh", lg: "-130vh" },
            padding: "3%",
            ml: { xs: "20vw", lg: "50vw" },
          }}
        >
          <Box sx={{ width: "100%", display: "flex", mb: "8%" }}>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ width: "100%", height: "30%" }} />
              <Typography
                component="h1"
                variant="h5"
                sx={{ fontWeight: "bold" }}
                align="center"
              >
                Deposit funds
              </Typography>
              <Typography
                component="h1"
                variant="subtitle2"
                sx={{}}
                align="center"
              >
                Charge Your Wallet anywhere, anytimy
              </Typography>
            </Box>
          </Box>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={
                    activeStep === steps.length - 1 ? chregeMe : handleNext
                  }
                  disabled={activeStep === steps.length - 1 ? false : thisAble}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Box>
    </React.Fragment>
  );
};
export default Checkout;
