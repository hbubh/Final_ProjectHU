import * as React from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { useSelector } from "react-redux";
import useQueryParams from "../../hooks/UseQuery";
import MainShare from "./ui/MainShare";

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
    let like = false;
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
      like,
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
    <MainShare
      thisTrue={thisTrue}
      myData={myData}
      y={y}
      ClickX={ClickX}
      thisTrue1={thisTrue1}
      thisTrue2={thisTrue2}
      thisOP={thisOP}
      rows={rows}
      loggedIn={loggedIn}
      handleShareScreen={handleShareScreen}
      userData={userData}
      StyledTableCellValue={StyledTableCellValue}
      StyledTableCell={StyledTableCell}
      StyledTableRow={StyledTableRow}
      handleAnalysis={handleAnalysis}
      handleOrder={handleOrder}
      thisAble={thisAble}
    />
  );
};

export default SharesCenter;
