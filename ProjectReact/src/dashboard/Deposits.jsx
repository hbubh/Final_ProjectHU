import * as React from "react";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import ROUTES from "../routes/ROUTES";

const handleLinkClicked = () => {
  window.scrollTo(0, 0);
};

const Deposits = ({ thisUser }) => {
  const [formattedDate, setFormattedDate] = React.useState("");
  React.useEffect(() => {
    const currentDate = new Date();
    setFormattedDate(
      `on ${currentDate.getDate()} ${currentDate.toLocaleString("en-US", {
        month: "long",
      })}, ${currentDate.getFullYear()}`
    );
  }, []);
  return (
    <Box>
      <Title>
        {" "}
        <span style={{ color: "darkgray" }}>Recent Deposits </span>
      </Title>
      <Typography component="p" variant="h3">
        <span style={{ color: "darkgray" }}>${thisUser.wallet}</span>
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        <span style={{ color: "darkgray" }}> {formattedDate}</span>
      </Typography>
      <div>
        <Link
          to={ROUTES.CHECKOUT}
          style={{ textDecoration: "none" }}
          color="primary"
          onClick={handleLinkClicked}
        >
          <span style={{ color: "lightskyblue" }}> Charge Wallet </span>
        </Link>
      </div>
    </Box>
  );
};
export default Deposits;
