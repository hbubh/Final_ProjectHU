import AnalysisWindow from "./AnalysisWindow";
import { Button, Box, Typography } from "@mui/material";
import OrderWindow from "./OrderWindow";
import ShareCards from "./SharesCard";
import TableHotShares from "./TableHotForCenter";
import Table from "@mui/material/Table";
import { toast } from "react-toastify";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import axios from "axios";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableNewShares from "./TableNewForCenter";
import React from "react";

const MainShare = ({
  thisTrue,
  myData,
  y,
  ClickX,
  thisTrue1,
  thisTrue2,
  thisOP,
  rows,
  loggedIn,
  handleShareScreen,
  userData,
  StyledTableCellValue,
  StyledTableCell,
  StyledTableRow,
  handleAnalysis,
  handleOrder,
  thisAble,
}) => {
  const [reload, setReload] = React.useState(true);
  const [reload1, setReload1] = React.useState(true);
  React.useEffect(() => {
    if (!userData || !rows.length) return;
    axios
      .get("/users/" + userData._id)
      .then(({ data }) => {
        const { user } = data;
        console.log(user.myLikes);
        for (let i of rows) {
          for (let z of user.myLikes) {
            if (i._id === z.shareId) {
              i.like = true;
            }
          }
        }
        setReload1((state) => !state);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [userData, rows, reload]);

  React.useEffect(() => {
    if (reload1) return;
    setReload((state) => !state);
  }, [reload1]);

  const handleLike = async (e) => {
    let info = "";
    try {
      const { data } = await axios.patch("/users/likeShare/" + userData._id, {
        shareId: e.target.value,
      });
      for (let row of rows) {
        if (row._id === e.target.value) {
          row.like = !row.like;
          if (row.like === true) {
            info = "Save this Share in Fav-list";
          } else {
            info = "Remove this Share from Fav-list";
          }
        }
      }
      setReload((state) => !state);
      toast.info(`You ${info}  successfully`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleOrderClick = (e) => {
    handleOrder(e);
  };
  const handleAnalysisClick = (e) => {
    handleAnalysis(e);
  };
  const handleShareScreenClick = (e) => {
    handleShareScreen(e);
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
          SHARE'S - CENTER
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
                    value={row._id}
                    onClick={handleLike}
                    disabled={!loggedIn}
                    sx={{
                      color: row.like ? "red" : "grey",
                    }}
                  >
                    ♥️
                  </Button>{" "}
                  |
                  <Button
                    variant="text"
                    disabled={!loggedIn}
                    onClick={handleShareScreenClick}
                    sx={{
                      color: "darkblue",
                    }}
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
                      variant="text"
                      onClick={handleAnalysisClick}
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
                    variant="text"
                    onClick={handleOrderClick}
                    disabled={thisAble}
                    value={row._id}
                  >
                    Buy.
                  </Button>
                  <Button
                    variant="text"
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
export default MainShare;
