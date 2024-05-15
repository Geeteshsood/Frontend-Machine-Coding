import React, { useEffect, useState } from "react";

const Body = () => {
  const [progress, setProgress] = useState(20);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 5;
        return newProgress <= 100 ? newProgress : 10;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-12 w-100 relative bg-gray-300 border border-black rounded-3xl m-20  overflow-hidden">
      <span
        className="absolute w-100 left-1/2 top-1/4 z-10"
        style={{ color: progress > 49 ? "white" : "black" }}
      >
        {progress}%
      </span>
      <div
        className="absolute h-full bg-green-600 z-0"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
};

export default Body;
