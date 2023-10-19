import React, { forwardRef } from "react";
import { Checkbox, TextField, Box } from "@mui/material";

const HealthSafetyForm = forwardRef((props, ref) => {
  const { formData, handleChange } = props;
  const {
    healthDeclaration,
    emergencyContactName,
    emergencyContactPhone,
    medicalConditions,
  } = formData;

  return (
    <form ref={ref}>
      <TextField
        label="Emergency Contact Full Name"
        name="emergencyContactName"
        value={emergencyContactName}
        onChange={handleChange}
        fullWidth
        required
        sx={{ marginBottom: 2 }}
      />

      <TextField
        label="Emergency Contact Phone"
        name="emergencyContactPhone"
        type="tel"
        value={emergencyContactPhone}
        onChange={handleChange}
        inputProps={{ pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}" }}
        placeholder="123-456-7890"
        fullWidth
        required
        sx={{ marginBottom: 2 }}
      />

      <TextField
        label="Medical Conditions"
        name="medicalConditions"
        value={medicalConditions}
        onChange={handleChange}
        fullWidth
        sx={{ marginBottom: 2 }}
      />

      <Box sx={{ marginBottom: 2 }}>
        <Checkbox
          name="healthDeclaration"
          checked={healthDeclaration}
          onChange={handleChange}
        />
        I agree to the health declaration.
      </Box>
    </form>
  );
});

export default HealthSafetyForm;
