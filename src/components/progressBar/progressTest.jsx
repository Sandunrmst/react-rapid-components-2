import React, { useState } from "react";
import StepProgressBar from ".";

const ProgressTest = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["step 1", "step 2", "step 3", "step 4", "step 5"];
  return (
    <div className="">
      <h1>Step Progress Bar</h1>
      <StepProgressBar
        steps={steps}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
    </div>
  );
};

export default ProgressTest;
