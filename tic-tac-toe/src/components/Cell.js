import React, { useState } from "react";

const Cell = ({ config, setConfig, count, index, setCount }) => {
  const handleClick = () => {
    let char = "X";

    count % 2 === 0 ? (char = "X") : (char = "O");

    setCount(count + 1);

    const updatedConfig = [...config];
    updatedConfig[Math.floor(index / 3)][index % 3] = char;
    setConfig(updatedConfig);
  };

  return (
    <div
      onClick={handleClick}
      className="h-1/3 w-1/3 border-2 border-black flex justify-center items-center text-4xl"
    >
      {config[Math.floor(index / 3)][index % 3]}
    </div>
  );
};

export default Cell;
