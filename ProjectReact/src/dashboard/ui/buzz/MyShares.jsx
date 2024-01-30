import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/ROUTES";
import * as React from "react";
import { useSelector } from "react-redux";
import MyShareT from "./MySharesCardT";
import BasicPie from "./ChartForBuz";

const MyShares = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const [optinalTitle, noneTitle] = useState(
    "So Go creat your first Share right now!!"
  );

  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/shares/my-shares")
      .then(({ data }) => {
        if (!data.shares) {
          noneTitle("");
        }
        setDataFromServer(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loggedIn]);
  const handleDeleteCard = async (_id) => {
    try {
      const { data } = await axios.delete("/shares/" + _id);
      setDataFromServer((dataFromServerCopy) =>
        dataFromServerCopy.filter((card) => card._id !== _id)
      );
      toast.info("Success to Share Delete !", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (err) {
      toast.info(`Unsuccess data error, ${err.response.data} `, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const handleEditCard = (id) => {
    navigate(`${ROUTES.EDIT}/${id}`);
  };
  const handleCreateClick = () => {
    navigate(`${ROUTES.CREATE}`);
  };

  return (
    <Container
      sx={{
        padding: "20px",
        minHeight: "95vh",
        paddingTop: "10%",
      }}
    >
      <Divider>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            padding: "10px",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          MY SHARES
        </Typography>
      </Divider>
      <Typography
        variant="h6"
        sx={{ textAlign: "center", padding: "10px", mb: "5%" }}
      >
        Here you can see the shares you created, and edit them. {optinalTitle}
      </Typography>
      {dataFromServer.length ? (
        <BasicPie dataFromServer={dataFromServer} />
      ) : null}

      <Grid container spacing={8}>
        {dataFromServer.length
          ? dataFromServer.map((share) => (
              <MyShareT
                key={share._id}
                share={share}
                handleEditCard={handleEditCard}
                handleDeleteCard={handleDeleteCard}
              />
            ))
          : null}
      </Grid>
      <Button
        variant="contained"
        onClick={handleCreateClick}
        sx={{ mt: "2%", width: "60%", ml: "20%" }}
      >
        Create A New Share
      </Button>
    </Container>
  );
};
export default MyShares;
