import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import axios from "axios";
import ROUTES from "../../../routes/ROUTES";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "black",
    color: "white",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

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

const createData = (name, open, value) => {
  let thisColor;
  let LineStatus;

  if (value >= open) {
    thisColor = "green";
    LineStatus = "success";
  } else {
    thisColor = "red";
    LineStatus = "error";
  }

  return { name, open, value, thisColor, LineStatus };
};

const SharesMain = () => {
  const [rows, setRow] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("/shares")
      .then(({ data }) => {
        const newData = data
          .map((i) => createData(i.title, i.price[0], i.price[1]))
          .slice(0, 3);
        setRow(newData);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const handleLinkClicked = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link to={ROUTES.SHARES} onClick={handleLinkClicked}>
      <TableContainer
        sx={{
          ml: "82%",
          mt: "75%",
          position: "absolute",
          width: "18%",
          display: { md: "none", lg: "block" },
        }}
      >
        <Box
          sx={{
            padding: "4px",
            textAlign: "center",
            fontWeight: "bold",
            borderBottom: "1px solid black",
            width: "90%",
          }}
        >
          What Popular Today?
        </Box>
        <Box sx={{ mt: "15%" }} />
        <Table sx={{ maxWidth: "20%" }}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Symbol</StyledTableCell>
              <StyledTableCell align="right">Opening</StyledTableCell>
              <StyledTableCell align="right">Value</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.open}</StyledTableCell>
                <StyledTableCellValue
                  align="right"
                  sx={{ color: row.thisColor, fontWeight: "bold" }}
                >
                  {row.value}
                  <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
                    <LinearProgress color={row.LineStatus} />
                  </Stack>
                </StyledTableCellValue>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Link>
  );
};

export default SharesMain;
