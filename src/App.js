import React, { useState, useRef } from "react";
import dayjs from "dayjs";
import { Stepper, Step, StepLabel, Button, Box, Alert, Paper } from "@mui/material";
import PersonalInfoForm from "./components/ApplicationForm/PersonalInfoForm";
import TravelPreferencesForm from "./components/ApplicationForm/TravelPreferencesForm";
import HealthSafetyForm from "./components/ApplicationForm/HealthSafetyForm";
import Submition from "./components/Sumbition";

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [error, setError] = useState(false);
  const [submited, setSubmited] = useState(false);

  const personalInfoFormRef = useRef();
  const travelPreferencesFormRef = useRef();
  const healthSafetyFormRef = useRef();
  const formRefs = [
    personalInfoFormRef,
    travelPreferencesFormRef,
    healthSafetyFormRef,
  ];


  function getMaxDate() {
    const MIN_AGE = 21 
    const currentYear = new Date().getFullYear();
    const maxYear = currentYear - MIN_AGE;
    const maxDate = new Date(maxYear, 0, 1);
    return dayjs(maxDate);
  }

  const maxDate = getMaxDate()

  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: maxDate,
    nationality: "Canada",
    email: "",
    phone: "",
    departDate: dayjs(),
    returnDate: dayjs().add(5, "day"),
    accommodationPref: "Space Hotel",
    specialRequest: "",
    healthDeclaration: null,
    emergencyContactName: "",
    emergencyContactPhone: "",
    medicalConditions: "",
  });

  const handleNext = () => {
    if (!formRefs[activeStep].current.reportValidity()) {
      return;
    }

    if (activeStep === formSteps.length - 1) {
      handleSubmit();
      return;
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (formData.healthDeclaration !== "on") {
      setError("Must agree to health declaration");
    } else {
      setError(false);
      setSubmited(true);
    }
  };

  const formSteps = [
    <PersonalInfoForm
      formData={formData}
      handleChange={handleChange}
      maxDate={maxDate}
      ref={personalInfoFormRef}
    />,
    <TravelPreferencesForm
      formData={formData}
      handleChange={handleChange}
      ref={travelPreferencesFormRef}
    />,
    <HealthSafetyForm
      formData={formData}
      handleChange={handleChange}
      ref={healthSafetyFormRef}
    />,
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#bdc3c7",
      }}
    >
      <Paper elevation={3}
        sx={{
          borderRadius: 5,
          p: 5,
          mx: "auto",
          width: { lg: "35%", md: "50%", sm: "50%", xs: "75%" },
          height: "500px",
          backgroundColor: "#ecf0f1",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        {!submited && (
          <Stepper activeStep={activeStep}>
            <Step>
              <StepLabel>Personal Information</StepLabel>
            </Step>
            <Step>
              <StepLabel>Travel Preferences</StepLabel>
            </Step>
            <Step>
              <StepLabel>Health and Safety</StepLabel>
            </Step>
          </Stepper>
        )}
        {error && (
          <Alert
            severity="error"
            sx={{ backgroundColor: "rgb(247, 158, 158)", mt: 2 }}
          >
            {error}
          </Alert>
        )}
        {submited ? (
          <Submition formData={formData} />
        ) : (
          <div>
            <Box sx={{ mt: error ? 2 : 5 }}>{formSteps[activeStep]}</Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "16px",
                mb: 4,
              }}
            >
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Button onClick={handleNext}>
                {activeStep === formSteps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </div>
        )}
      </Paper>
    </Box>
  );
}

export default App;
