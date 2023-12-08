import React from 'react'
import Imagebox from './Imagebox'
import Button from '@mui/material/Button'
import Imagebox2 from './Imagebox2';
import Buttonsimg from './Buttonsimg';

function Rightbox({activeStep,setActiveStep}) {
//  const [activeStep, setActiveStep] = React.useState(0);

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
    <div className="container2">
      { activeStep===0 ?(
        <>
       
         <Imagebox/>
         <Imagebox/>
         <Imagebox/>
         <Imagebox/>         
         <Imagebox/>
         <Imagebox/>
         <Imagebox/>
         <Imagebox/>
         <Imagebox/>         
         <Imagebox/>
         <Imagebox/>
        </>
      ) :activeStep === 1 ? (
        <>
          <Imagebox2/>
          <Imagebox2/>
          <Imagebox2/>
        </>
      ) : activeStep === 2 ? (
        <>
         <Buttonsimg/>
         
        </>

      ) : (
        <>
        
        </>
        
      )}
      {/* <div className='btnbox' > */}
      {/* <div className='buttonbox' > */}
      <button className="nextprevbtn leftbtn "disabled={activeStep === 0}onClick={handleBack}><strong>Previous Question</strong> </button>
      <button className="nextprevbtn rightbtn" onClick={handleNext}><strong>Next Question</strong></button>
   
    </div>
  )
}

export default Rightbox




























