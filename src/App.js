import React from 'react';
import './App.css';
import Leftbox from './Components/Leftbox';
import Rightbox from './Components/Rightbox';


function App() {
    const [activeStep, setActiveStep] = React.useState(0);
    
    const handleStepChange = (step) =>{
      setActiveStep(step)
    }
  return (
   <>
   <div className="container22">
   <Leftbox
   activeStep={activeStep}
   />
   <Rightbox
   activeStep={activeStep}
   setActiveStep={handleStepChange}
   />
   
   </div>
 
 
  </>

  );
}

export default App;
