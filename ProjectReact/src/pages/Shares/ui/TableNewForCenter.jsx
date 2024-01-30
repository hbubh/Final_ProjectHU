import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button, Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
let arr = [];
const TableNewShares = ({ rows, handleOrder, thisOP }) => {
  React.useEffect(() => {
    const rowsCopy = [...rows];
    const sortedArray = rowsCopy.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    arr = sortedArray.slice(0, 3);
  }, [rows]);
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
  const handleClick = (e) => {
    handleOrder(e);
  };

  return (
    <Box
      sx={{
        width: "49%",
        ml: "0.5%",
        mt: "5%",
        border: "2px solid black",
        boxShadow: "0 -3px 10px",
        opacity: thisOP,
      }}
    >
      <TableContainer
        sx={{
          width: "100%",
        }}
      >
        <Typography
          variant="h5"
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
          NEW - SHARES
        </Typography>

        <Table sx={{ maxWidth: "100%" }}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Symbol</StyledTableCell>
              <StyledTableCell align="center">Opening</StyledTableCell>
              <StyledTableCell align="center">Value</StyledTableCell>
              <StyledTableCell align="center">CreatedAt</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {arr.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
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
                  {row.createdAt}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableNewShares;
