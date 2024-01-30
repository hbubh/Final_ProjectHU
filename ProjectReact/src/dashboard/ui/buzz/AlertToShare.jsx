import { Alert, Box, Grid } from "@mui/material";

const AlertToShare = ({ errorsState }) => {
  return (
    <Grid
      item
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "90%",
          marginLeft: "5%",
          borderBottom: "15px solid darkgray",
          paddingBottom: "15px",
        }}
      >
        {errorsState && errorsState.title && (
          <Alert
            sx={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
            severity="warning"
          >
            {errorsState.title}{" "}
          </Alert>
        )}

        {errorsState && errorsState.subtitle && (
          <Alert
            sx={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
            severity="warning"
          >
            {errorsState.subtitle}{" "}
          </Alert>
        )}

        {errorsState && errorsState.description && (
          <Alert
            sx={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
            severity="warning"
          >
            {errorsState.description}{" "}
          </Alert>
        )}

        {errorsState && errorsState.phone && (
          <Alert
            sx={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
            severity="warning"
          >
            {errorsState.phone}{" "}
          </Alert>
        )}

        {errorsState && errorsState.email && (
          <Alert
            sx={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
            severity="warning"
          >
            {errorsState.email}{" "}
          </Alert>
        )}

        {errorsState && errorsState.web && (
          <Alert
            sx={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
            severity="warning"
          >
            {errorsState.web}{" "}
          </Alert>
        )}

        {errorsState && errorsState.url && (
          <Alert
            sx={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
            severity="warning"
          >
            {errorsState.url}{" "}
          </Alert>
        )}

        {errorsState && errorsState.alt && (
          <Alert
            sx={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
            severity="warning"
          >
            {errorsState.alt}{" "}
          </Alert>
        )}

        {errorsState && errorsState.state && (
          <Alert
            sx={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
            severity="warning"
          >
            {errorsState.state}{" "}
          </Alert>
        )}

        {errorsState && errorsState.country && (
          <Alert
            sx={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
            severity="warning"
          >
            {errorsState.country}{" "}
          </Alert>
        )}

        {errorsState && errorsState.city && (
          <Alert
            sx={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
            severity="warning"
          >
            {errorsState.city}{" "}
          </Alert>
        )}

        {errorsState && errorsState.street && (
          <Alert
            sx={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
            severity="warning"
          >
            {errorsState.street}{" "}
          </Alert>
        )}

        {errorsState && errorsState.houseNumber && (
          <Alert
            sx={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
            severity="warning"
          >
            {errorsState.houseNumber}{" "}
          </Alert>
        )}

        {errorsState && errorsState.zip && (
          <Alert
            sx={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
            severity="warning"
          >
            {errorsState.zip}{" "}
          </Alert>
        )}
      </Box>
    </Grid>
  );
};
export default AlertToShare;
