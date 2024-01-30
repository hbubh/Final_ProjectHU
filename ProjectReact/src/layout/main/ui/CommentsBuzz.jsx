import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

const CommentsBuzz = () => {
  return (
    <List
      sx={{
        mt: "3%",
        width: "40%",
        bgcolor: "background.paper",
        ml: "20%",
        borderRadius: "25px",
      }}
    >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Buzz System"
            src="https://th.bing.com/th/id/OIP.Gh69t_oN676v1r79vFKjpQHaHa?w=211&h=211&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          />
        </ListItemAvatar>
        <ListItemText
          primary="All the Power in your hand"
          secondary={
            <React.Fragment>
              {"Get the most Powerful tools for your company"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Buy&Sell"
            src="https://th.bing.com/th/id/R.c700f512dae03e706bf825613812d8cf?rik=kCLIvMNIzwXffw&pid=ImgRaw&r=0"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Perform unlimited actions"
          secondary={
            <React.Fragment>
              {" Issue shares for your organization through us"}
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
    </List>
  );
};

export default CommentsBuzz;
