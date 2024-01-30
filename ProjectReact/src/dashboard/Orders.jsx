import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import { Link } from "react-router-dom";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import Title from "./Title";
import ROUTES from "../routes/ROUTES";
import ShareCardsOrders from "./ui/SharesCardOrder";

const Orders = ({ thisUser }) => {
  const [myShares, setShares] = React.useState(false);
  const [thisOP, setOP] = React.useState("1");
  const [myData, setData] = React.useState([]);
  const [thisTrue2, setTrue2] = React.useState(false);
  const [sharesArry, setSharesArry] = React.useState([]);
  React.useEffect(() => {
    if (!myShares) {
      setShares(thisUser.myShares);
    }
    if (myShares) {
      for (let i of myShares) {
        axios
          .get(`/shares/${i.shareId}`)
          .then(({ data }) => {
            const { share } = data;
            share.costs = i.costs;
            share.pcs = i.pcs;
            for (let x of sharesArry) {
              if (x._id === share._id) {
              }
            }
            setSharesArry((current) => [...current, share]);
            if (share.price[1] * share.pcs - share.costs <= 0) {
              share.sx = { color: "red" };
            } else {
              share.sx = { color: "green" };
            }
          })
          .catch((err) => {
            console.log("err", err);
          });
      }
    }
  }, [thisUser]);
  const ClickX = () => {
    setTrue2(false);
    setOP("1");
  };

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
    <React.Fragment>
      {thisTrue2 ? <ShareCardsOrders myData={myData} ClickX={ClickX} /> : <></>}
      <Title>My stock portfolio</Title>
      <Table size="small" sx={{ opacity: thisOP }}>
        <TableHead>
          <TableRow>
            <TableCell>Symbol</TableCell>
            <TableCell>Subtitle</TableCell>
            <TableCell>Numbers Of Shares</TableCell>
            <TableCell>Costs</TableCell>
            <TableCell>Value</TableCell>
            <TableCell align="right">Profit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sharesArry.length > 0
            ? sharesArry.map((row) => (
                <TableRow key={row._id}>
                  <TableCell>
                    <Button
                      variant="text"
                      onClick={handleShareScreen}
                      sx={{ color: "darkblue" }}
                      value={row._id}
                    >
                      {row.title}
                    </Button>
                  </TableCell>
                  <TableCell>{row.subtitle}</TableCell>
                  <TableCell>{row.pcs} pcs</TableCell>
                  <TableCell>${row.costs}</TableCell>
                  <TableCell>${row.price[1] * row.pcs}</TableCell>
                  <TableCell sx={row.sx} align="right">
                    ${row.price[1] * row.pcs - row.costs}
                  </TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
      <Link to={ROUTES.SHARES} style={{ textDecoration: "none" }}>
        <ListSubheader component="div" inset sx={{ color: "maroon" }}>
          Click here to: Creating a new buy/sell order
        </ListSubheader>
      </Link>
    </React.Fragment>
  );
};
export default Orders;
