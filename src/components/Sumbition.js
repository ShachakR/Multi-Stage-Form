import React from "react";
import { Grid, Box, Typography } from "@mui/material";

const Submition = ({ formData }) => {
  return (
    <Box sx ={{ overflowY: "auto", overflowX: "hidden" }}>
      <Typography variant="h6" gutterBottom color="primary">
        Thank you for applying.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Full Name:</Typography>
          <Typography variant="body1">{formData.fullName}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Date of Birth:</Typography>
          <Typography variant="body1">{formData.dateOfBirth.toLocaleDateString("en-US")}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Nationality:</Typography>
          <Typography variant="body1">{formData.nationality}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Email:</Typography>
          <Typography variant="body1">{formData.email}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Phone:</Typography>
          <Typography variant="body1">{formData.phone}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Departure Date:</Typography>
          <Typography variant="body1">
            {formData.departDate.toLocaleDateString("en-US")}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Return Date:</Typography>
          <Typography variant="body1">
            {formData.returnDate.toLocaleDateString("en-US")}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Accommodation Preference:</Typography>
          <Typography variant="body1">{formData.accommodationPref}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Special Request:</Typography>
          <Typography variant="body1">{formData.specialRequest}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Health Declaration:</Typography>
          <Typography variant="body1">
            {formData.healthDeclaration ? "Yes" : "No"}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Emergency Contact Name:</Typography>
          <Typography variant="body1">
            {formData.emergencyContactName}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Emergency Contact Phone:</Typography>
          <Typography variant="body1">
            {formData.emergencyContactPhone}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">Medical Conditions:</Typography>
          <Typography variant="body1">{formData.medicalConditions}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Submition;
