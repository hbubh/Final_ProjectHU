import { Alert, Box, Grid } from "@mui/material";

const AlertToEdit = ({ errorsState }) => {
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
        {errorsState && errorsState.first && (
          <Alert
            sx={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
            severity="warning"
          >
            {errorsState.first}{" "}
          </Alert>
        )}

        {errorsState && errorsState.middle && (
          <Alert
            sx={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
            severity="warning"
          >
            {errorsState.middle}{" "}
          </Alert>
        )}

        {errorsState && errorsState.last && (
          <Alert
            sx={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
            severity="warning"
          >
            {errorsState.last}{" "}
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
export default AlertToEdit;
