import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ShareComponent({ inputsValue }) {
  const [expanded, setExpanded] = React.useState(false);
  const price = inputsValue.price;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ bgcolor: "aliceblue", color: "black" }}>
      <CardHeader
        sx={{ bgcolor: "lightskyblue" }}
        avatar={
          <Typography
            sx={{ bgcolor: "darkblue", padding: "3px", color: "darkgray" }}
            aria-label="recipe"
          >
            Issuance of a share
          </Typography>
        }
        title={inputsValue.title}
        subheader={inputsValue.subtitle}
      />
      <CardMedia
        component="img"
        height="194"
        image={inputsValue.url}
        alt={inputsValue.alt}
      />
      <CardContent>
        <Typography variant="body2" color="black">
          {inputsValue.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <LocalOfferIcon />
        <span style={{ fontWeight: "500", borderBottom: "1px solid black" }}>
          Tag Price:
        </span>{" "}
        {price}$
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon sx={{ bgcolor: "black", color: "white" }} />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph sx={{ fontWeight: "bold" }}>
            Deatilis About Creator:
          </Typography>
          <Typography paragraph>
            <span
              style={{ fontWeight: "500", borderBottom: "1px solid black" }}
            >
              Phone:
            </span>{" "}
            {inputsValue.phone} <br />
            <span
              style={{ fontWeight: "500", borderBottom: "1px solid black" }}
            >
              Email:
            </span>{" "}
            {inputsValue.email}
          </Typography>
          <Typography paragraph>
            <Typography paragraph sx={{ fontWeight: "bold" }}>
              Address-Deatilis:
            </Typography>
            <span
              style={{ fontWeight: "500", borderBottom: "1px solid black" }}
            >
              State:
            </span>{" "}
            {inputsValue.state} <br />
            <span
              style={{ fontWeight: "500", borderBottom: "1px solid black" }}
            >
              Country:
            </span>{" "}
            {inputsValue.country} <br />
            <span
              style={{ fontWeight: "500", borderBottom: "1px solid black" }}
            >
              Strret:
            </span>{" "}
            {inputsValue.street} <br />
            <span
              style={{ fontWeight: "500", borderBottom: "1px solid black" }}
            >
              House Number:
            </span>{" "}
            {inputsValue.houseNumber} <br />
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
