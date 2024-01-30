import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import DeleteUser from "../profile/profileUi/DeleteUser";
import EditProfile from "../profile/profileUi/EditProfile";
import LogOutPro from "../profile/profileUi/LogOutProfile";
import ROUTES from "../../../routes/ROUTES";
import CircularProgress from "@mui/material/CircularProgress";
import UserInfo from "./profileUi/UserInfo";
import TableCharge from "./profileUi/TableCharge";
let y = 0;
const Profile = () => {
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  const thisTheme = useSelector((bigPie) => bigPie.themeSlice.darkTheme);
  const [thisWallet, setWallet] = useState(<CircularProgress />);
  const [thisCharged, setCharged] = useState(<CircularProgress />);
  const [thisMyShares, setMyShares] = useState("");
  const [thisFirstName, setFirstName] = useState(
    <CircularProgress color="secondary" />
  );
  const [thisLastName, setLastName] = useState("");
  const [thisPhone, setPhone] = useState(<CircularProgress />);
  const [thisEmail, setEmail] = useState(<CircularProgress />);
  const [thisAdd, setAdd] = useState(<CircularProgress />);
  const [thisCreate, setCreate] = useState("");
  const [thisId, setId] = useState("");
  const [thisPro, setPro] = useState(<CircularProgress />);
  const [thisBus, setBus] = useState(<CircularProgress />);
  const [thisAdmin, setAdmin] = useState("");
  const [thisUrl, setUrl] = useState("");
  const [thisAlt, setAlt] = useState("");
  const [thisDisplay, setDisplay] = useState("none");
  const [thisDisplay1, setDisplay1] = useState("none");
  const navigate = useNavigate();

  useEffect(() => {
    if (userData && userData._id) {
      axios
        .get(`/users/${userData._id}`)
        .then(({ data }) => {
          const { user } = data;
          setFirstName(user.name.first);
          setLastName(user.name.last);
          setWallet(user.wallet);
          setMyShares(user.myShares);
          setCharged(user.charged);
          setPhone(user.phone);
          setEmail(user.email);
          setCreate(user.createdAt);
          setAdd(
            `${user.address.country}, ${user.address.city}, ${user.address.street}, ${user.address.houseNumber}`
          );
          setId(user._id);
          setUrl(user.image.url);
          setAlt(user.image.alt);
          {
            user.isPro ? setPro("Yes   .......$15/mo") : setPro("No");
          }
          {
            user.isBusiness ? setBus("Yes   ......$30/mo") : setBus("No");
          }
          {
            user.isBusiness ? setDisplay("none") : setDisplay("inline-block");
          }
          {
            user.isPro ? setDisplay1("none") : setDisplay1("inline-block");
          }
          {
            user.isAdmin ? setAdmin("Yes") : setAdmin("No");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn, userData]);

  const handleBuzUpgrade = () => {
    window.scrollTo(50, 50);
    navigate(ROUTES.BUZZPLAN);
  };
  const handleProUpgrade = () => {
    window.scrollTo(50, 50);
    navigate(ROUTES.PROPLAN);
  };

  return (
    <Box
      sx={{
        paddingTop: "5%",
        backgroundImage:
          "url('https://data.1freewallpapers.com/download/lake-mountains-forest-reflection-landscape.jpg')",
        width: "100%",
        backgroundSize: "cover",
      }}
    >
      <Grid container sx={{ width: "100%", padding: "5%", paddingTop: "2%" }}>
        <Typography
          variant="h3"
          sx={{
            marginTop: "5%",
            marginBottom: "2%",
            display: "inline-block",
            width: "100%",
            fontFamily: "inherit",
            textTransform: "uppercase",
            color: "black",
            textAlign: "center",
          }}
        >
          <span style={{ fontWeight: "bold" }}> {thisFirstName}</span>: User
          Profile
        </Typography>
        <TableCharge
          thisWallet={thisWallet}
          thisMyShares={thisMyShares}
          thisCharged={thisCharged}
          thisPro={thisPro}
          thisBus={thisBus}
          thisTheme={thisTheme}
          thisId={thisId}
        />
        <Paper
          sx={{
            padding: "3%",
            display: "flex",
            width: "100%",
            mt: "2%",
            mb: "2%",
            bgcolor: thisTheme ? "rgb(0,0,0,0.7)" : "rgb(255,255,255,0.6)",
          }}
        >
          <UserInfo
            thisFirstName={thisFirstName}
            thisLastName={thisLastName}
            thisPhone={thisPhone}
            thisEmail={thisEmail}
            thisAdd={thisAdd}
            thisCreate={thisCreate}
            thisId={thisId}
            thisPro={thisPro}
            thisBus={thisBus}
            handleBuzUpgrade={handleBuzUpgrade}
            handleProUpgrade={handleProUpgrade}
            thisDisplay1={thisDisplay1}
            thisDisplay={thisDisplay}
            thisAdmin={thisAdmin}
          />
          <Grid item sx={{ width: { xs: "100%", md: "40%" } }}>
            <Box
              sx={{
                width: { xs: "80%", md: "70%" },
                height: "auto",
                padding: "20px",
                ml: "15%",
                borderRadius: "50px",
                mt: "20%",
              }}
            >
              <Box sx={{ width: { xs: "100%", md: "100%" } }}>
                {thisUrl !== "" ? (
                  <img
                    style={{
                      width: "100%",
                      height: "auto",
                      transition: "all 1s",
                      border: "2px solid black",
                      marginBottom: "2%",
                    }}
                    src={thisUrl}
                    alt={thisAlt}
                  />
                ) : (
                  ""
                )}

                <LogOutPro />
                <EditProfile thisAdmin={userData.isAdmin} thisId={thisId} />
                <DeleteUser thisAdmin={userData.isAdmin} thisId={thisId} />
              </Box>
            </Box>
          </Grid>
        </Paper>
      </Grid>
    </Box>
  );
};
export default Profile;
