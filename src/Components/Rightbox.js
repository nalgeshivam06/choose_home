import React from 'react'
import Imagebox from './Imagebox'
import Imagebox2 from './Imagebox2';
import Buttonsimg from './Buttonsimg';

function Rightbox({activeStep,setActiveStep}) {
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
      <button className="nextprevbtn leftbtn "disabled={activeStep === 0}onClick={handleBack}><strong>Previous Question</strong> </button>
      <button className="nextprevbtn rightbtn" onClick={handleNext}><strong>Next Question</strong></button>
   
    </div>
  )
}

export default Rightbox




























