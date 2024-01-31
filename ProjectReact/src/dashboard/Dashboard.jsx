import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Divider from "@mui/material/Divider";
import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  adminListItems,
  buzzList,
  mainListItems,
  proList,
  secondaryListItems,
} from "./ListItem";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import { setUserObj, userObj } from "./ui/objectUser";
import Drawer from "./ui/drawer";
import MediaCard from "./ui/cardComponent";

function Copyright(props) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        INVESTIONS-HOUSE
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const DashboardT = () => {
  const [open, setOpen] = React.useState(true);
  const [thisUser, setUser] = React.useState(userObj);
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  const thisTheme = useSelector((bigPie) => bigPie.themeSlice.darkTheme);
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  React.useEffect(() => {
    if (loggedIn) {
      axios
        .get(`/users/${userData._id}`)
        .then(({ data }) => {
          const { user } = data;
          setUser(setUserObj(user));
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  }, [loggedIn, userData]);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          {!thisUser.isAdmin ? null : adminListItems}
          <Divider sx={{ my: 1 }} />
          {mainListItems}
          <Divider sx={{ my: 1 }} />
          {!thisUser.isBusiness ? null : secondaryListItems}

          <Divider sx={{ my: 1 }} />
          {thisUser.myShares ? (
            !thisUser.isBusiness || !thisUser.isPro ? (
              <React.Fragment>
                <ListSubheader component="div" inset>
                  Upgrade's Offer
                </ListSubheader>
                {thisUser.isPro ? null : proList}
                {thisUser.isBusiness ? null : buzzList}
              </React.Fragment>
            ) : null
          ) : (
            <></>
          )}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
          backgroundImage:
            "url('https://th.bing.com/th/id/R.e814906d2edc29907cd6e09af3d8750c?rik=PpFSes7m7KTb2Q&pid=ImgRaw&r=0')",
          backgroundSize: "cover",
        }}
      >
        <Toolbar />
        <Container
          maxWidth="lg"
          sx={{
            mt: 4,
            mb: 4,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: thisTheme ? "black" : "white",
              textAlign: "center",
              padding: "20px",
              fontSize: { xs: "2.5rem" },
              marginTop: { xs: "0%", sm: "0", md: "0", lg: "0" },
            }}
          >
            Wellcome Back <br />
            <span style={{ textTransform: "uppercase", fontWeight: "bold" }}>
              {thisUser.name.first} {thisUser.name.last}
            </span>
          </Typography>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 270,
                  bgcolor: "rgb(173, 216, 230,0.8)",
                  boxShadow: "-6px 6px 5px",
                  color: "black",
                }}
              >
                <Chart thisUser={thisUser} />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 270,
                  bgcolor: "rgb(0,0,0,0.7)",
                  boxShadow: "-6px 6px 5px",
                  color: "black",
                }}
              >
                <Deposits thisUser={thisUser} />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <Orders thisUser={thisUser} />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: thisTheme ? "rgb(0,0,0,0.9)" : "aliceblue",
                  border: "12px solid lightskyblue",
                }}
              >
                <MediaCard thisTheme={thisTheme} />
              </Paper>
            </Grid>
          </Grid>
          <Copyright sx={{ pt: 4 }} />
        </Container>
      </Box>
    </Box>
  );
};

export default DashboardT;
