import Card from "@mui/material/Card";
import EditIcon from "@mui/icons-material/Edit";
import { Grid, Typography } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import CardActions from "@mui/material/CardActions";
import Divider from "@mui/material/Divider";
import Collapse from "@mui/material/Collapse";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { toast } from "react-toastify";

const MyShareT = ({ share, handleEditCard, handleDeleteCard }) => {
  const [expanded, setExpanded] = React.useState(false);
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);

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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleEditCards = () => {
    if (userData.isAdmin) {
      toast.info("Admin Cannot Edit Share's", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    } else {
      handleEditCard(share._id);
    }
  };
  const handleDeleteCards = (e) => {
    if (userData.isAdmin) {
      toast.info("Admin Cannot Delete Share's", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    } else {
      handleDeleteCard(share._id);
    }
  };
  return (
    <Grid item xs={12}>
      <Card xs={6} sx={{ bgcolor: "aliceblue", color: "black" }}>
        <CardHeader
          sx={{ bgcolor: "lightskyblue" }}
          title={share.title}
          subheader={share.subtitle}
        />
        <CardMedia
          component="img"
          height="194"
          image={share.image.url}
          alt={share.image.alt}
        />
        <CardContent>
          <Typography variant="body2" color="black">
            {share.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <LocalOfferIcon />
          <span
            style={{
              fontWeight: "500",
              borderBottom: "1px solid black",
            }}
          >
            Tag Price:
          </span>{" "}
          ${share.price[1]} <span style={{ width: "50%" }}></span>{" "}
          <IconButton onClick={handleEditCards}>
            <EditIcon sx={{ color: "black" }} />
          </IconButton>
          <IconButton onClick={handleDeleteCards}>
            <DeleteIcon sx={{ color: "black" }} />
          </IconButton>
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
                style={{
                  fontWeight: "500",
                  borderBottom: "1px solid black",
                }}
              >
                Phone:
              </span>{" "}
              {share.phone} <br />
              <span
                style={{
                  fontWeight: "500",
                  borderBottom: "1px solid black",
                }}
              >
                Email:
              </span>{" "}
              {share.email}
            </Typography>
            <Typography paragraph>
              <Typography paragraph sx={{ fontWeight: "bold" }}>
                Address-Deatilis:
              </Typography>
              <span
                style={{
                  fontWeight: "500",
                  borderBottom: "1px solid black",
                }}
              >
                State:
              </span>{" "}
              {share.address.state} <br />
              <span
                style={{
                  fontWeight: "500",
                  borderBottom: "1px solid black",
                }}
              >
                Country:
              </span>{" "}
              {share.address.country} <br />
              <span
                style={{
                  fontWeight: "500",
                  borderBottom: "1px solid black",
                }}
              >
                Street:
              </span>{" "}
              {share.address.street} <br />
              <span
                style={{
                  fontWeight: "500",
                  borderBottom: "1px solid black",
                }}
              >
                House Number:
              </span>{" "}
              {share.address.houseNumber} <br /> <br />
              <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                {share.owners.length > 0 ? (
                  <span style={{}}>
                    <span
                      style={{
                        fontWeight: "500",
                        borderBottom: "1px solid black",
                      }}
                    >
                      Owners: <br />
                    </span>
                    {share.owners.map((user) => (
                      <span key={user.userId}>
                        {" "}
                        <br />
                        Pcs: {user.pcs} , <br />
                        user ID: {user.userId} <br /> <br />
                        <Divider />
                      </span>
                    ))}
                  </span>
                ) : (
                  "no owners yet.."
                )}
              </Typography>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};
export default MyShareT;
