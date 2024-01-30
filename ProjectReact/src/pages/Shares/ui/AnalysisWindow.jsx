import { Button, Box, Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import ShareChart from "./ShareChart";

const AnalysisWindow = ({ myData, ClickX }) => {
  const [thisTag, setTag] = React.useState("");
  const [thisPrice, setPrice] = React.useState("");
  const thisTheme = useSelector((bigPie) => bigPie.themeSlice.darkTheme);

  const handleClickX = () => {
    ClickX();
  };
  return (
    <Box
      sx={{
        position: "absolute",
        width: "95%",
        height: "auto",
        mt: "20vh",
        ml: "2.5%",
        border: "3px solid black",
        borderRadius: "10px",
        boxSizing: "border-box",
        zIndex: "10",
      }}
    >
      <Box
        bgcolor={thisTheme ? "grey" : "darkgray"}
        color={thisTheme ? "black" : "black"}
        sx={{
          width: "100%",
          padding: "10%",
          borderRadius: "10px",
          paddingTop: "2%",
        }}
      >
        <Button onClick={handleClickX} sx={{ ml: "-10%" }}>
          X
        </Button>
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Analyst analysis:
          <span
            style={{
              fontWeight: "300",
              borderBottom: `2px solid ${thisTheme ? "black" : "white"} `,
            }}
          >
            {myData.title}
          </span>
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ textAlign: "center", paddingTop: "3%" }}
        >
          *The Analysts' analysis is based on the information given to the
          analyst team and according to their professional judgment. Our system
          updates its analysis every few seconds and it is important to keep up
          to date with any changes. In addition, predictions should not be taken
          as certainties. The market always surprises even the best!
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ textAlign: "center", paddingTop: "3%", fontWeight: "bold" }}
        >
          According to the latest analysis of our system, the{" "}
          <span
            style={{ color: "blueviolet", borderBottom: "1px solid black" }}
          >
            {" "}
            {myData.title}{" "}
          </span>
          share is in a change indicating that the share price currently in{" "}
          <span
            style={{ color: "blueviolet", borderBottom: "1px solid black" }}
          >
            ${myData.price[1]}
          </span>{" "}
          will change the trend to {thisPrice} price and the recommended action
          according to our report he:
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ textAlign: "center", paddingTop: "3%" }}
        >
          {thisTag}
        </Typography>
        <Box sx={{ height: { xs: "2vh", lg: "5vh" } }} />
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 300,
            bgcolor: "black",
            boxShadow: "-6px 6px 5px",
            color: "black",
            opacity: "0.8",
          }}
        >
          <ShareChart thisShare={myData} setTag={setTag} setPrice={setPrice} />
        </Paper>
      </Box>
    </Box>
  );
};
export default AnalysisWindow;
