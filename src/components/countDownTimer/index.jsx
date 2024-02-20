import React, { useEffect, useRef, useState } from "react";

const CountdownTimer = ({ initialTime, onTimeFinish }) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef();

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(intervalRef.current);
            setIsRunning(false);

            if (onTimeFinish) {
              onTimeFinish();
            }
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning, onTimeFinish]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  console.log(minutes, seconds);

  return (
    <div className="">
      <p>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </p>
    </div>
  );
};

export default CountdownTimer;
