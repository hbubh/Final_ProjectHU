import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import AdminSetBuz from "./AdminSetBuz";
import AdminSetDelete from "./AdminSetDelete";
import AdminSetEdit from "./AdminSetEdit";

const columns = [
  { id: "_id", label: "ID", minWidth: 180 },
  { id: "first", label: "Name", minWidth: 150 },
  {
    id: "email",
    label: "Email",
    minWidth: 210,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "phone",
    label: "Phone",
    minWidth: 140,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "isBusiness",
    label: "Buz Plan",
    minWidth: 90,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "createdAt",
    label: "Created At",
    minWidth: 200,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];
const AdminTable = ({ data, thisDis, setDis }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const arr2 = [];

  const createData = (_id, first, email, phone, isBusiness, createdAt) => {
    return { _id, first, email, phone, isBusiness, createdAt };
  };
  for (let user of data) {
    if (user.isBusiness === false) {
      user.isBusiness = "No";
    } else if (user.isBusiness === true) {
      user.isBusiness = "Yes";
    }
    arr2.push(
      createData(
        user._id,
        user.name.first + " " + user.name.last,
        user.email,
        user.phone,
        user.isBusiness,
        user.createdAt
      )
    );
  }
  createData();
  const handleShowUseClick = (e) => {};

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    top: 0,
                    minWidth: column.minWidth,
                    backgroundColor: "white",
                    position: "sticky",
                    textAlign: "left",
                    boxShadow: "2px 0px 5px",
                    color: "black",
                    width: "100%",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {/*  <ChangeStatusAdmin thisDis={thisDis} myData={myData} /> */}
            {arr2
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((arr2) => {
                return (
                  <React.Fragment>
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={arr2.email}
                    >
                      {columns.map((column) => {
                        const value = arr2[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            TableRow
                            onClick={handleShowUseClick}
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  </React.Fragment>
                );
              })}
          </TableBody>
        </Table>

        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={arr2.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
      <AdminSetBuz setDis={setDis} thisDis={thisDis} />
      <AdminSetEdit setDis={setDis} thisDis={thisDis} />
      <AdminSetDelete setDis={setDis} thisDis={thisDis} />
    </Paper>
  );
};
export default AdminTable;
