import React, { forwardRef } from "react";
import dayjs from 'dayjs';
import {
  TextField,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const TravelPreferencesForm = forwardRef((props, ref) => {
  const { formData, handleChange } = props;
  const { departDate, returnDate, accommodationPref, specialRequest } =
    formData;

  const handleAccomodationChange = (e) => {
    handleChange({
      target: { name: "accommodationPref", value: e.target.value },
    });
  };

  return (
    <form ref={ref}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          marginBottom: 2,
          justifyContent: "space-between",
        }}
      >
        <DatePicker
          label={"Departure Date *"}
          name={"departDate"}
          value={departDate}
          onChange={(date) => {
            handleChange({ target: { name: "departDate", value: dayjs(date) } });
          }}
          sx={{ width: "45%" }}
        />

        <DatePicker
          label={"Return Date *"}
          name={"returnDate"}
          value={returnDate}
          onChange={(date) => {
            handleChange({ target: { name: "returnDate", value: dayjs(date) } });
          }}
          shouldDisableDate={(date) => {
            return dayjs(date).isBefore(departDate)
          }}
          sx={{ width: "45%" }}
        />
      </Box>

      <FormControl sx={{ marginBottom: 2, width: "100%" }}>
        <InputLabel id="accommodationPref-label">
          Accommodation Preference
        </InputLabel>
        <Select
          label="Accommodation Preference"
          labelId="accommodationPref-label"
          name="accommodationPref"
          value={accommodationPref}
          onChange={handleAccomodationChange}
        >
          <MenuItem value={"Space Hotel"}>Space Hotel</MenuItem>
          <MenuItem value={"Martian Base"}>Martian Base</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Special Request"
        placeholder="Add any special requests you may need"
        name="specialRequest"
        value={specialRequest}
        onChange={handleChange}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
    </form>
  );
});

export default TravelPreferencesForm;
