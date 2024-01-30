import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import ROUTES from "../../../routes/ROUTES";

const NewsMain = () => {
  const handleLinkClicked = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Link to={ROUTES.NEWS} onClick={handleLinkClicked}>
      <List
        sx={{
          ml: "81%",
          mt: "110%",
          position: "absolute",
          width: "18%",
          bgcolor: "background.paper",
          display: { md: "none", lg: "block" },
        }}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Yahoo Logo"
              src="https://th.bing.com/th/id/OIP.4jBBN7S_or7OKRdv_ePJ2wAAAA?w=474&h=263&rs=1&pid=ImgDetMain"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Invest Oil this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {
                  "   The increase in oil prices continues following the war in Ukraine..."
                }
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Times Logo"
              src="https://creativesupply.com/wp-content/uploads/2020/06/Telegraph.png"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Only AI for me"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {
                  "  Investors continue to risk big money in the environment AI..."
                }
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="WSJ Logo"
              src="https://images.squarespace-cdn.com/content/v1/63e19af69f41c44ebb406fd7/b0dc01a6-6ff9-4f29-b70e-011aea7d6fad/WSJ-Logo.png"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Tesla Go Down"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {"  The car manufacturer Tesla reports a decrease in sales..."}
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="TheMarker Logo"
              src="https://res.cloudinary.com/sherutnet/image/upload/f_auto,q_auto/mini_logos/TheMarker.png"
            />
          </ListItemAvatar>
          <ListItemText
            primary="IPhone Still the King"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Inon Genish
                </Typography>
                {
                  "  The sales status of iPhone 15 continues to soar day by day!"
                }
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </Link>
  );
};
export default NewsMain;
