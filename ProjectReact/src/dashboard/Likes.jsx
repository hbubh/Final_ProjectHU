import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import Title from "./Title";
import ShareCardsOrders from "./ui/SharesCardOrder";

const Likes = ({ thisUser }) => {
  const [myLikes, setLikes] = React.useState(false);
  const [thisOP, setOP] = React.useState("1");
  const [myData, setData] = React.useState([]);
  const [thisTrue2, setTrue2] = React.useState(false);
  const [sharesArry, setSharesArry] = React.useState([]);
  React.useEffect(() => {
    if (!myLikes) {
      setLikes(thisUser.myLikes);
    }
    if (myLikes) {
      for (let i of myLikes) {
        axios
          .get(`/shares/${i.shareId}`)
          .then(({ data }) => {
            const { share } = data;
            share.value = i.value;
            if (share.value > share.price[1]) {
              share.sx = { color: "red" };
            } else {
              share.sx = { color: "green" };
            }
            setSharesArry((current) => [...current, share]);
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
      <Title>My Fav-Shares </Title>
      <Table size="small" sx={{ opacity: thisOP }}>
        <TableHead>
          <TableRow>
            <TableCell>Symbol</TableCell>
            <TableCell>Subtitle</TableCell>
            <TableCell>Value when saved</TableCell>
            <TableCell>Correct Value</TableCell>
            <TableCell align="right">Optional Profit</TableCell>
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
                  <TableCell>${row.value}</TableCell>
                  <TableCell>${row.price[1]}</TableCell>
                  <TableCell sx={row.sx} align="right">
                    ${row.price[1] - row.value} Per-Share
                  </TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </React.Fragment>
  );
};
export default Likes;
