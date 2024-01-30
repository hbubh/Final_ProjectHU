import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

const Comments = () => {
  return (
    <List
      sx={{
        mt: "3%",
        width: "40%",
        bgcolor: "background.paper",
        ml: "40%",
        borderRadius: "25px",
      }}
    >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="NewsPaper"
            src="https://th.bing.com/th/id/OIP.p3NDgZxKocNuZyeACS4WFQHaHa?rs=1&pid=ImgDetMain"
          />
        </ListItemAvatar>
        <ListItemText
          primary="All the information in your hand"
          secondary={
            <React.Fragment>
              {"Get the most updated articles every day"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="analysis"
            src="https://th.bing.com/th/id/OIP.1IRIOv-IHOsxF7jwV8SzWgHaHa?rs=1&pid=ImgDetMain"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Advanced technical analysis"
          secondary={
            <React.Fragment>{"Get full analysis from our pros"}</React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Buy&Sell"
            src="https://th.bing.com/th/id/OIP.B1qIzhT3xwZ4xeLG6hYsKgAAAA?rs=1&pid=ImgDetMain"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Perform unlimited actions"
          secondary={
            <React.Fragment>
              {" Everything is available at your disposal at any moment"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
};

export default Comments;
