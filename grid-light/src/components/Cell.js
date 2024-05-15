import React from "react";
import "../index.css";

const Cell = ({ filled, onClick, isDisabled }) => {
  return (
    <button
      type="button"
      className={filled ? "cell cell-active" : "cell"}
      onClick={onClick}
      disabled={isDisabled}
    />
  );
};

export default Cell;
