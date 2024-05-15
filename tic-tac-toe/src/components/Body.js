import React, { useEffect, useState } from "react";
import Cell from "./Cell";

const Body = () => {
  const [counter, setCounter] = useState(0);
  const [win, setWin] = useState(false);

  const [config, setConfig] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const winningCombos = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    // win condition
    winningCombos.map((pair) => {
      const [a, b, c] = pair;

      if (
        config[Math.floor(a / 3)][a % 3] === config[Math.floor(b / 3)][b % 3] &&
        config[Math.floor(b / 3)][b % 3] === config[Math.floor(c / 3)][c % 3] &&
        config[Math.floor(a / 3)][a % 3] !== ""
      ) {
        setWin(true);
        setTimeout(() => {
          ResetGame();
          setWin(false);
        }, 1000);
      }
    });
  }, [config]);

  const ResetGame = () => {
    const updatedConfig = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    setConfig(updatedConfig);
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-200">
      <h1 className="text-4xl font-bold mb-8">
        {win
          ? counter % 2 === 0
            ? "Player 2 won"
            : "Player 1 won"
          : `Player ${(counter % 2) + 1} turn`}
      </h1>

      <div className="h-96 w-96 border-1 border-gray-800 flex flex-wrap">
        {config.flat().map((_, index) => (
          <Cell
            config={config}
            setConfig={setConfig}
            count={counter}
            setCount={setCounter}
            key={index}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
