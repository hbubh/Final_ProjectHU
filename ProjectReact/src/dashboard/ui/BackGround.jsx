import { Box } from "@mui/material";

const BackGround = () => {
  return (
    <Box
      sx={{
        position: "sticky",
        width: "50%",
        height: "100%",
        overflow: "hidden",
        zIndex: "5",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "15vh",
          bgcolor: "darkblue",
          transform: "skew(00deg, 50deg)",
        }}
      />
    </Box>
  );
};
export default BackGround;
