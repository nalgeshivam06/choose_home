import React from 'react'
import VerticalLinearStepper from './VerticalLinearStepper'

function Leftbox({activeStep,setActiveStep}) {
  return (
    <div className="container1">
      <VerticalLinearStepper
       activeStep={activeStep}
       setActiveStep={setActiveStep}
      />
    </div>
  )
}

export default Leftbox

