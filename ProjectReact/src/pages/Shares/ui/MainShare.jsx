import AnalysisWindow from "./AnalysisWindow";
import { Button, Box, Typography } from "@mui/material";
import OrderWindow from "./OrderWindow";
import ShareCards from "./SharesCard";
import TableHotShares from "./TableHotForCenter";
import Table from "@mui/material/Table";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableNewShares from "./TableNewForCenter";

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
                    variant="text"
                    disabled={!loggedIn}
                    onClick={handleShareScreenClick}
                    sx={{
                      color: "darkblue",
                      width: "80%",
                      border: "1px solid navy",
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
