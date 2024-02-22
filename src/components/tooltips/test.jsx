import React from "react";
import Tooltip from ".";

const TooltipTest = () => {
  return (
    <div>
      <h1>Tooltip</h1>
      <Tooltip
        delay={1000}
        content={"Tooltip Content"}
        children={<p>Hover Move</p>}
      />
    </div>
  );
};

export default TooltipTest;
