import { Box, Paper, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AdminTable from "./AdminTable";
import { toast } from "react-toastify";

const Admin = () => {
  const [myData, setData] = useState("");
  const [thisDis, setDis] = useState(true);
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  useEffect(() => {
    axios
      .get("/users")
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        toast.info(`Unsuccess Get a data, ${err.response.data} `, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  }, [loggedIn, thisDis]);
  return (
    <Box
      sx={{
        paddingTop: "5%",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: "100%",
          height: "100%",
          padding: "30px",
        }}
      >
        <Box display={"flex"}>
          <Typography
            variant="h2"
            sx={{
              padding: "10px",
              borderBottom: "2px solid ",
              width: "40%",
              mb: "1%",
              textAlign: "left",
            }}
          >
            Admin Area
          </Typography>
          <Box
            sx={{
              width: "10%",
              height: "auto",
              marginLeft: "40%",
              paddingBottom: "10px",
              borderBottom: "2px solid ",
              marginBottom: "1%",
              display: { xs: "none", md: "none", lg: "block" },
            }}
          >
            {" "}
            <img
              style={{ width: "100%", height: "auto" }}
              src="https://media.istockphoto.com/id/521573879/vector/unknown-person-silhouette-whith-red-tie.jpg?s=612x612&w=0&k=20&c=HBVG_8UkMLTqtTJuDktqe4d2_fNex27CfEhdiiXJzTs="
              alt="Admin Logo"
            />
          </Box>
        </Box>
        <AdminTable thisDis={thisDis} setDis={setDis} data={myData} />
      </Paper>
    </Box>
  );
};
export default Admin;
