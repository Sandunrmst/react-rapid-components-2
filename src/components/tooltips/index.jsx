import React, { useState } from "react";

const Tooltip = ({ children, content, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  let timeout;

  function handleShowTooltip() {
    timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay || 500); //default it take 500 seccond if we didn't pass any value for delay
  }

  function handleHideTooltip() {
    clearTimeout(timeout);
    setIsVisible(false);
  }

  return (
    <div
      className="bg-orange-100 w-[10%] m-auto rounded-xl"
      //   onMouseEnter={() => setIsVisible(true)}
      //   onMouseLeave={() => setIsVisible(false)}
      onMouseEnter={() => handleShowTooltip(true)}
      onMouseLeave={() => handleHideTooltip(false)}
    >
      {children}
      {isVisible ? (
        <div className="bg-orange-400 p-4 rounded-xl">{content}</div>
      ) : null}
    </div>
  );
};

export default Tooltip;
