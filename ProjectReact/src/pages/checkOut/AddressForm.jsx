import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const AddressForm = ({ handleInputsChange1, inputsValue1 }) => {
  const handleInputs = (e) => {
    handleInputsChange1(e);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="first"
            name="firstName"
            value={inputsValue1.first}
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={handleInputs}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="last"
            name="lastName"
            label="Last name"
            value={inputsValue1.last}
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={handleInputs}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="Email"
            label="Email"
            value={inputsValue1.email}
            fullWidth
            variant="standard"
            onChange={handleInputs}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="city"
            name="city"
            label="City"
            fullWidth
            value={inputsValue1.city}
            autoComplete="shipping address-level2"
            onChange={handleInputs}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            value={inputsValue1.state}
            label="State/Province/Region"
            fullWidth
            onChange={handleInputs}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            value={inputsValue1.zip}
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={handleInputs}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="country"
            name="country"
            label="Country"
            value={inputsValue1.country}
            fullWidth
            onChange={handleInputs}
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AddressForm;
