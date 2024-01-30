import { Box, Button, Grid, Typography } from "@mui/material";
const UserInfo = ({
  thisFirstName,
  thisLastName,
  thisPhone,
  thisEmail,
  thisAdd,
  thisCreate,
  thisId,
  thisPro,
  thisBus,
  handleBuzUpgrade,
  handleProUpgrade,
  thisDisplay1,
  thisDisplay,
  thisAdmin,
}) => {
  const handleBuz = () => {
    handleBuzUpgrade();
  };
  const handlePro = () => {
    handleProUpgrade();
  };
  return (
    <Grid
      item
      sx={{
        width: { xs: "100%", md: "60%" },
        transition: "all 1s",
        paddingBottom: "5%",
      }}
    >
      <Typography
        sx={{
          width: "100%",
          textAlign: "center",
          fontWeight: "300",
        }}
        variant="h4"
      >
        - User Info -
      </Typography>
      <Box
        sx={{
          width: "25%",
          padding: "15px",
          display: "inline-block",
        }}
      ></Box>{" "}
      <Typography
        sx={{
          marginTop: "2%",
          borderBottom: "0.5px solid black",
          fontSize: "19pt",
        }}
        variant="subtitle2"
      >
        • Name:{" "}
        <Typography sx={{ display: "inline" }}>
          {thisFirstName} {thisLastName}
        </Typography>
      </Typography>
      <Typography
        sx={{
          marginTop: "2%",
          borderBottom: "0.5px solid black",
          fontSize: "19pt",
        }}
        variant="subtitle2"
      >
        • Phone: <Typography sx={{ display: "inline" }}>{thisPhone}</Typography>
      </Typography>
      <Typography
        sx={{
          marginTop: "2%",
          borderBottom: "0.5px solid black",
          fontSize: "19pt",
        }}
        variant="subtitle2"
      >
        • Email: <Typography sx={{ display: "inline" }}>{thisEmail}</Typography>
      </Typography>
      <Typography
        sx={{
          marginTop: "2%",
          borderBottom: "0.5px solid black",
          fontSize: "19pt",
        }}
        variant="subtitle2"
      >
        • Address: <Typography sx={{ display: "inline" }}>{thisAdd}</Typography>
      </Typography>
      <Typography
        sx={{
          marginTop: "2%",
          borderBottom: "0.5px solid black",
          fontSize: "19pt",
        }}
        variant="subtitle2"
      >
        • User Created:{" "}
        <Typography sx={{ display: "inline" }}>{thisCreate}</Typography>
      </Typography>
      <Typography
        sx={{
          marginTop: "2%",
          borderBottom: "0.5px solid black",
          fontSize: "19pt",
        }}
        variant="subtitle2"
      >
        • User ID: <Typography sx={{ display: "inline" }}>{thisId}</Typography>
      </Typography>
      <Typography
        sx={{
          marginTop: "2%",
          borderBottom: "0.5px solid black",
          fontSize: "19pt",
        }}
        variant="subtitle2"
      >
        • Pro Plan:{" "}
        <Typography sx={{ display: "inline" }}>
          {thisPro}{" "}
          <Button
            onClick={handlePro}
            sx={{
              display: thisDisplay1,
              bgcolor: "lightgrey",
              color: "blue",
              ml: "2%",
            }}
            variant="outlined"
          >
            Upgrade
          </Button>
        </Typography>
      </Typography>
      <Typography
        sx={{
          marginTop: "2%",
          borderBottom: "0.5px solid black",
          fontSize: "19pt",
        }}
        variant="subtitle2"
      >
        • Business Plan:{" "}
        <Typography sx={{ display: "inline" }}>
          {thisBus}{" "}
          <Button
            onClick={handleBuz}
            sx={{
              display: thisDisplay,
              bgcolor: "lightgrey",
              color: "blue",
              ml: "2%",
            }}
            variant="outlined"
          >
            Upgrade
          </Button>
        </Typography>
      </Typography>
      <Typography
        sx={{
          marginTop: "2%",
          borderBottom: "0.5px solid black",
          fontSize: "19pt",
        }}
        variant="subtitle2"
      >
        • Admin Plan:{" "}
        <Typography sx={{ display: "inline" }}>{thisAdmin}</Typography>
      </Typography>
    </Grid>
  );
};

export default UserInfo;
