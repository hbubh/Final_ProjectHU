import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TableCell from "@mui/material/TableCell";
import { PieChart } from "@mui/x-charts/PieChart";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

export default function TableCharge({
  thisWallet,
  thisMyShares,
  thisCharged,
  thisPro,
  thisBus,
  thisTheme,
  thisId,
}) {
  const [arry, setArry] = React.useState([]);
  const [sharesValue, setX] = React.useState(0);
  const [i, setI] = React.useState(0);
  const [y, setY] = React.useState(0);

  React.useEffect(() => {
    if (!thisId) return;
    if (y) return;
    for (let i of thisMyShares) {
      if (!i.shareId) return;
      let cost = i.costs;
      setI((current) => (current += cost));
      axios
        .get("/shares/" + i.shareId)
        .then(({ data }) => {
          const { share } = data;

          let z = share.price[1] * i.pcs;
          let shareObj = {
            id: share._id,
            value: z,
            label: "Share: " + share.title,
          };
          setArry((current) => [...current, shareObj]);
          setX((current) => (current += z));
          setY(1);
        })
        .catch((err) => {
          console.log(err);
        });
      let shareObj = {
        id: "walletID",
        value: thisWallet,
        label: "CashFlow",
      };
      setArry(() => [shareObj]);
    }
  }, [thisCharged]);
  return (
    <React.Fragment>
      <TableContainer
        component={Paper}
        sx={{
          bgcolor: thisTheme ? "rgb(0,0,0,0.9)" : "rgb(255,255,255,0.8)",
        }}
      >
        <Typography
          variant="h6"
          padding={"2%"}
          textAlign={"center"}
          fontFamily={"sans-serif"}
        >
          Personal-Cash-Flow
        </Typography>
        <Table sx={{ minWidth: 650 }} size="large" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Subscribers</TableCell>
              <TableCell align="center">Cash</TableCell>
              <TableCell align="center">All Shares Value</TableCell>
              {thisBus !== "No" ? (
                <TableCell align="center" sx={{ color: "blueviolet" }}>
                  Income from the sale of shares
                </TableCell>
              ) : (
                <></>
              )}
              <TableCell align="center">Total Value</TableCell>
              <TableCell align="center">Charged</TableCell>
              <TableCell align="center">Profit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">
                {thisPro !== "No" ? (
                  <span style={{ color: "blueviolet" }}>
                    InverserPro <br />
                  </span>
                ) : (
                  <span>
                    Basic Investor <br />
                  </span>
                )}
                {thisBus !== "No" ? (
                  <span style={{ color: "blueviolet" }}>Business</span>
                ) : (
                  ""
                )}
              </TableCell>
              <TableCell align="center">${thisWallet}</TableCell>
              <TableCell align="center">${sharesValue}</TableCell>
              {thisBus !== "No" ? (
                <TableCell align="center" sx={{ color: "blueviolet" }}>
                  ${i + thisWallet - thisCharged}
                </TableCell>
              ) : (
                <></>
              )}
              <TableCell align="center">${sharesValue + thisWallet}</TableCell>
              <TableCell align="center">${thisCharged}</TableCell>
              <TableCell align="center">
                <span style={{ color: "green", fontWeight: "bold" }}>
                  ${sharesValue + thisWallet - thisCharged}
                </span>{" "}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {thisMyShares.length !== 0 ? (
        <Box
          component={Paper}
          sx={{
            width: "90%",
            ml: "5%",
            padding: "10px",
            paddingTop: "5%",
            mt: "3%",
            bgcolor: thisTheme ? "rgb(0,0,0,0.7)" : "rgb(255,255,255,0.6)",
          }}
        >
          <Typography variant="h5" textAlign={"center"}>
            {" "}
            Your incoming distribution
          </Typography>
          <PieChart
            series={[
              {
                data: arry.map((ta) => ta),
              },
            ]}
            width={700}
            height={400}
            sx={{
              padding: "3%",
            }}
          />
        </Box>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}
