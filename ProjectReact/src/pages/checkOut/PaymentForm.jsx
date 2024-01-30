import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const PaymentForm = ({ handleInputsChange, inputsValue }) => {
  const handleInputs = (e) => {
    handleInputsChange(e);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="change"
            label="Change to Cash"
            helperText="How much cash you want to charge? only numbers"
            fullWidth
            value={inputsValue.change}
            variant="standard"
            onChange={handleInputs}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PaymentForm;
