import React from "react";

const StepProgressBar = ({ steps, activeStep, setActiveStep }) => {
  function handlePreviousStep() {
    setActiveStep((prevSetp) => Math.max(prevSetp - 1, 0));
  }

  function handleNextStep() {
    setActiveStep((prevSetp) => Math.min(prevSetp + 1, steps.length - 1));
  }

  function calculateCurrentStepWidth() {
    return `${(100 / (steps.length - 1)) * activeStep}%`;
  }

  return (
    <div>
      <div className="flex justify-between w-[80%] items-center m-auto bg-slate-300 rounded-[8px] p-10">
        {steps && steps.length > 0
          ? steps.map((stepItem, index) => (
              <div
                className={`${
                  index <= activeStep ? "bg-[#4caf50] text-slate-50" : ""
                } 'flex flex-grow h-[100%] items-center justify-center font-semibold bg-[#2196f3] p-5' `}
                style={{ width: calculateCurrentStepWidth() }}
                key={index}
              >
                {stepItem}
              </div>
            ))
          : null}{" "}
      </div>

      <div>
        <div className="flex justify-center items-center gap-10 my-0 mx-20 mt-4">
          <button
            className="bg-orange-500 p-5 rounded-md font-semibold"
            disabled={activeStep === 0}
            onClick={handlePreviousStep}
          >
            Previous Step
          </button>
          <button
            className="bg-orange-500 p-5 rounded-md font-semibold"
            disabled={activeStep === steps.length - 1}
            onClick={handleNextStep}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepProgressBar;
