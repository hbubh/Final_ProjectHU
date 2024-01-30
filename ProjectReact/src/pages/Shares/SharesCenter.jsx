import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button, Box, Typography, Grid } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableHotShares from "./ui/TableHotForCenter";
import TableNewShares from "./ui/TableNewForCenter";
import axios from "axios";
import { useSelector } from "react-redux";
import OrderWindow from "./ui/OrderWindow";
import AnalysisWindow from "./ui/AnalysisWindow";
import useQueryParams from "../../hooks/UseQuery";
import ShareCards from "./ui/SharesCard";

const SharesCenter = () => {
  const [thisShares, setShares] = React.useState([]);
  const [y, setY] = React.useState([]);
  const [myData, setData] = React.useState([]);
  const [thisID, setID] = React.useState("");
  const [initialDataFromServer, setInitialDataFromServer] = React.useState([]);
  const [thisAble, setAble] = React.useState(true);
  const [thisTrue, setTrue] = React.useState(false);
  const [thisTrue1, setTrue1] = React.useState(false);
  const [thisTrue2, setTrue2] = React.useState(false);
  const [thisOP, setOP] = React.useState("1");
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  const query = useQueryParams();

  React.useEffect(() => {
    if (loggedIn) {
      setID(userData._id);
      setAble(false);
    }
  }, [loggedIn, userData]);

  React.useEffect(() => {
    axios
      .get("/shares")
      .then(({ data }) => {
        setInitialDataFromServer(data);
        setShares(data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [setShares]);

  React.useEffect(() => {
    if (!initialDataFromServer || !initialDataFromServer.length) return;

    const arr = initialDataFromServer;
    const filter = query.filter ? query.filter : "";
    setShares(arr.filter((share) => share.title.startsWith(filter)));
  }, [query, setShares, initialDataFromServer]);

  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "black",
      color: "white",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const handleOrder = (e) => {
    window.scrollTo(0, 150);
    let id = e.target.value;
    axios
      .get(`/shares/${id}`)
      .then(({ data }) => {
        const { share } = data;
        setData(share);
        setTrue(true);
        setOP("0.3");
      })
      .catch((err) => {
        console.log("err", err);
      });
    let x = 0;
    for (let i of e.target.innerHTML) {
      setY((...current) => current + i);
      x++;
      if (x >= 4) {
        break;
      }
    }
  };
  const handleAnalysis = (e) => {
    window.scrollTo(0, 120);
    let id = e.target.value;
    axios
      .get(`/shares/${id}`)
      .then(({ data }) => {
        const { share } = data;
        setData(share);
        setTrue1(true);
        setOP("0.3");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const ClickX = () => {
    setTrue(false);
    setTrue1(false);
    setTrue2(false);
    setOP("1");
    setY("");
  };

  const StyledTableCellValue = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "black",
      color: "white",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(() => ({
    backgroundColor: "hover",
  }));

  let LineStatus;
  let thisColor = "black";
  const createData = (name, open, value, _id, owners, createdAt, userId) => {
    let holds = 0;
    if (value >= open) {
      thisColor = "green";
      LineStatus = "success";
    } else {
      thisColor = "red";
      LineStatus = "error";
    }
    for (let i of owners) {
      if (i.userId === thisID) {
        holds = i.pcs;
      }
    }
    return {
      name,
      open,
      value,
      thisColor,
      LineStatus,
      _id,
      holds,
      createdAt,
      owners,
      userId,
    };
  };
  const rows = [];
  const rowsHots = [];

  for (let share of thisShares) {
    rows.push(
      createData(
        share.title,
        share.price[0],
        share.price[1],
        share._id,
        share.owners,
        share.createdAt,
        share.userId
      )
    );
    let i = [share.owners.length, share._id];
    rowsHots.push(i);
  }
  const handleShareScreen = (e) => {
    window.scrollTo(0, 0);
    let id = e.target.value;
    axios
      .get(`/shares/${id}`)
      .then(({ data }) => {
        const { share } = data;
        setData(share);
        setTrue2(true);
        setOP("0.3");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <Box paddingTop={"3%"} paddingBottom={"3%"}>
      {thisTrue ? <OrderWindow myData={myData} y={y} ClickX={ClickX} /> : <></>}
      {thisTrue1 ? <AnalysisWindow myData={myData} ClickX={ClickX} /> : <></>}
      {thisTrue2 ? <ShareCards myData={myData} ClickX={ClickX} /> : <></>}
      <TableContainer
        sx={{
          width: "100%",
          opacity: thisOP,
          transition: "all 1s",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "white",
            bgcolor: "black",
            width: "100%",
            textAlign: "center",
            fontWeight: "600",
            padding: "2%",
            fontFamily: "-moz-initial",
          }}
        >
          SHARE - CENTER
        </Typography>

        <Table sx={{ maxWidth: "100%" }}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Symbol</StyledTableCell>
              <StyledTableCell align="center">Opening</StyledTableCell>
              <StyledTableCell align="center">Value</StyledTableCell>
              <StyledTableCell align="center">Analysis</StyledTableCell>
              <StyledTableCell align="center">Hold</StyledTableCell>
              <StyledTableCell align="center">Order</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                  <Button
                    variant="text"
                    disabled={!loggedIn}
                    onClick={handleShareScreen}
                    sx={{ color: "darkblue", textShadow: "13px 13px 9px" }}
                    value={row._id}
                  >
                    {row.name}
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="center">${row.open}</StyledTableCell>
                <StyledTableCellValue
                  align="center"
                  sx={{ color: row.thisColor, fontWeight: "bold" }}
                >
                  ${row.value}
                  <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
                    <LinearProgress color={row.LineStatus} />
                  </Stack>
                </StyledTableCellValue>
                <StyledTableCell align="center">
                  {userData && userData.isPro ? (
                    <Button
                      variant="outlined"
                      onClick={handleAnalysis}
                      value={row._id}
                    >
                      Watch Analysis
                    </Button>
                  ) : (
                    "For InvesterPro"
                  )}
                </StyledTableCell>
                <StyledTableCell align="center">{row.holds}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="outlined"
                    onClick={handleOrder}
                    disabled={thisAble}
                    value={row._id}
                  >
                    Buy.
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={handleOrder}
                    disabled={thisAble}
                    value={row._id}
                  >
                    Sell
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display="flex">
        <TableHotShares rows={rows} handleOrder={handleOrder} thisOP={thisOP} />
        <TableNewShares rows={rows} handleOrder={handleOrder} thisOP={thisOP} />
      </Box>
    </Box>
  );
};

export default SharesCenter;
