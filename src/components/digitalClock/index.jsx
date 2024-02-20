import React, { useEffect } from "react";
import { useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="mt-10">
      <h1 className="font-bold text-3xl text-orange-700">Digital Clock</h1>

      <div className="flex justify-center gap-2 flex-col">
        <div className="text-4xl font-semibold text-blue-500">
          <span>{time.getHours().toString().padStart(2, "0")}</span>:
          <span>{time.getMinutes().toString().padStart(2, "0")}</span>:
          <span>{time.getSeconds().toString().padStart(2, "0")}</span>
        </div>
        <div className="text-2xl">
          {time.toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;
