import React, { forwardRef } from "react";
import dayjs from 'dayjs';
import { TextField, FormControl, InputLabel, Select, MenuItem,  } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const PersonalInfoForm = forwardRef((props, ref) => {
  const { formData, handleChange } = props;
  const { fullName, dateOfBirth, nationality, email, phone } = formData;

  const dateChange = (date) => {
    handleChange({ target: { name: "dateOfBirth", value: new Date(date) } });
  }

  const handleNationalityChange = (e) => {
    handleChange({
      target: { name: "nationality", value: e.target.value },
    });
  };

  const MIN_AGE = 21 

  function getMaxDate() {
    const currentYear = new Date().getFullYear();
    const maxYear = currentYear - MIN_AGE;
    const maxDate = new Date(maxYear, 0, 1);
    return dayjs(maxDate);
  }

  return (
    <form ref={ref}>
      <TextField
        label="Full Name"
        name="fullName"
        value={fullName}
        onChange={handleChange}
        fullWidth
        required
        inputProps={{ maxLength: 30 }}
        sx={{ marginBottom: 2 }}
      />

      <DatePicker
        label={"Date of Birth *"}
        name={"dateOfBirth"}
        value={dateOfBirth === "" ? getMaxDate() : dateOfBirth}
        onChange={dateChange}
        maxDate={getMaxDate()}
        fullWidth
        sx={{ marginBottom: 2, width: "100%" }}
      />

    <FormControl sx={{ marginBottom: 2, width: "100%" }}>
      <InputLabel id="nationality-label">Nationality</InputLabel>
      <Select
        label="Nationality"
        labelId="nationality-label"
        name="nationality"
        value={nationality}
        onChange={handleNationalityChange}
      >
        <MenuItem value={"United States"}>United States</MenuItem>
        <MenuItem value={"Canada"}>Canada</MenuItem>
        <MenuItem value={"United Kingdom"}>United Kingdom</MenuItem>
        {/* Add more nationality options as needed */}
      </Select>
    </FormControl>

      <TextField
        label="Email"
        name="email"
        type="email"
        value={email}
        onChange={handleChange}
        fullWidth
        required
        sx={{ marginBottom: 2 }}
      />

      <TextField
        label="Phone"
        name="phone"
        type="tel"
        value={phone}
        onChange={handleChange}
        inputProps={{ pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}" }}
        placeholder="123-456-7890"
        fullWidth
        required
        sx={{ marginBottom: 2 }}
      />

    </form>
  );
});

export default PersonalInfoForm;
