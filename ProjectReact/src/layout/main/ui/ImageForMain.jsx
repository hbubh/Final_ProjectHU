import { Box } from "@mui/material";
import React, { useEffect } from "react";
const ImageMain = ({ conOP }) => {
  const [thisTrans, setTrans] = React.useState("");
  const [thisTrans2, setTrans2] = React.useState("");
  const [thisTrans3, setTrans3] = React.useState("");

  useEffect(() => {
    setTimeout(() => {
      setTrans("translate(-120px,120px)");
      setTrans2("translate(-120px,-220px)");
      setTrans3("translate(-150px,100px)");
    }, 2000);
  }, []);
  return (
    <Box>
      <Box
        sx={{
          position: "absolute",
          transition: "transform 7s , opacity 1s",
          transform: `${thisTrans3} skew(00deg, 7deg)`,
          opacity: conOP,
          width: "30%",
          height: "auto",
          mt: "-7%",
          ml: "75%",
        }}
      >
        <img
          style={{ width: "100%", height: "auto" }}
          src="https://media.istockphoto.com/id/1180977804/photo/atmospheric-spooky-halloween-smoke-abstract-haze-fog-background.jpg?s=612x612&w=0&k=20&c=Voyi4lDUbigbNqLZIRFs_PX8gXLs0KnQB2chpVUxPY8="
          alt="background"
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          transition: "transform 7s , opacity 1s",
          transform: `${thisTrans2} skew(00deg, 5deg)`,
          opacity: conOP,
          width: "30%",
          height: "auto",
          mt: "27%",
          ml: "70%",
        }}
      >
        <img
          style={{ width: "100%", height: "auto" }}
          src="https://media.istockphoto.com/id/1180977804/photo/atmospheric-spooky-halloween-smoke-abstract-haze-fog-background.jpg?s=612x612&w=0&k=20&c=Voyi4lDUbigbNqLZIRFs_PX8gXLs0KnQB2chpVUxPY8="
          alt="background"
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          transition: "transform 7s , opacity 1s",
          transform: thisTrans,
          opacity: conOP,
          width: "30%",
          height: "auto",
          ml: "50%",
          mt: "-15%",
        }}
      >
        <img
          style={{ width: "100%", height: "auto" }}
          src="https://media.istockphoto.com/id/1180977804/photo/atmospheric-spooky-halloween-smoke-abstract-haze-fog-background.jpg?s=612x612&w=0&k=20&c=Voyi4lDUbigbNqLZIRFs_PX8gXLs0KnQB2chpVUxPY8="
          alt="background"
        />
      </Box>
    </Box>
  );
};
export default ImageMain;
