import React from 'react'
import VerticalLinearStepper from './VerticalLinearStepper'

function Leftbox({activeStep}) {
  return (
    <div className="container1">
      <VerticalLinearStepper
       activeStep={activeStep}
      />
    </div>
  )
}

export default Leftbox

