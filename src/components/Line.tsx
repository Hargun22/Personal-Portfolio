import React from "react";

const Line = ({ width = "w-full" }: { width?: string }) => {
  return <div className={`h-0.5 ${width} bg-gradient-rainblue`} />;
};

export default Line;
