import React, { useState } from "react";

function ProgressBar() {
  const [progressPercent, setProgressPercent] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  function handleProgressPercentage(event) {
    setProgressPercent(event.target.value);
    if (event.target.value > 100) {
      setErrorMsg("Please enter a value less than 100");
    } else {
      setErrorMsg("");
    }
  }

  return (
    <div className="flex flex-col gap-10 items-center mt-[30px]">
      <h1>Custom Progress Bar</h1>
      <div className="progress-bar">
        <div className="w-[200px] h-[30px] rounded-[40px] bg-[#cdcdcd] text-yellow-400 relative z-1">
          {progressPercent >= 0 && progressPercent <= 100 ? (
            <div
              style={{ width: `${progressPercent}%` }}
              className="h-[30px] grid rounded-[20px] m-auto bg-blue-500 text-blue-300 absolute z-10 transition-all duration-1500 ease-in-out delay-300"
            >
              {progressPercent}
            </div>
          ) : (
            <p>{errorMsg}</p>
          )}
        </div>
      </div>
      <div className="input-container">
        <label>Input Percentage :</label>
        <input
          onChange={handleProgressPercentage}
          type="number"
          value={progressPercent}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
