import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import {
  mainListItemsNavSide,
  secondaryListItemsNavSide,
} from "./ListItemNavSide";

import LogOut from "./LogOut";

const SlideNav = () => {
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (top, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [top]: open });
  };

  const list = (top) => (
    <Box
      sx={{
        width: 250,
        bgcolor: "darkgray",
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(top, false)}
    >
      {loggedIn ? <LogOut /> : secondaryListItemsNavSide}
      {mainListItemsNavSide}
    </Box>
  );

  return (
    <div>
      {[`Side Menu`].map((top) => (
        <React.Fragment key={top}>
          <Button onClick={toggleDrawer(top, true)}>{top}</Button>
          <Drawer
            top={top}
            open={state[top]}
            onClose={toggleDrawer(top, false)}
          >
            {list(top)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SlideNav;
