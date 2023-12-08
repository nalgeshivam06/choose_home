import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import StepButton from '@mui/material/StepButton';
const steps = [
  {
    label: 'Which Rooms are you shopping for new Flooring ?',
  },
  {
    label: 'What Does Your Day to Day Activity Level Look Like ? ',
   
  },
  {
    label: 'What Does Your Budget ?',
   
  },
  {
    label: '',
   
  },
];

export default function VerticalLinearStepper({activeStep,setActiveStep}) {
 // const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400,  }}>
   
       <Stepper nonLinear activeStep={activeStep}  orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label} completed={false}>
            <StepButton color="inherit" >
              {activeStep >=index ? label.label:""}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}