import React, { useState } from "react";
import Cell from "./Cell";
import "../index.css";

const Body = () => {
  const [order, setOrder] = useState([]);
  const [deactivating, setDeactivating] = useState(false);

  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const deactivateCells = () => {
    setDeactivating(true);

    const timer = setInterval(() => {
      setOrder((curOrder) => {
        const newOrder = curOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setDeactivating(false);
        }

        return newOrder;
      });
    }, 2000);
  };

  const activateCells = (index) => {
    const updatedOrder = [...order, index];
    setOrder(updatedOrder);

    if (
      updatedOrder.length === config.flat().filter((val) => val === 1).length
    ) {
      deactivateCells();
    }
  };

  return (
    <div className="wrapper">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${config[0].length}, 1fr)`,
        }}
      >
        {config
          .flat(1)
          .map((value, index) =>
            value === 1 ? (
              <Cell
                key={index}
                filled={order.includes(index)}
                onClick={() => activateCells(index)}
                isDisabled={order.includes(index) || deactivating}
              />
            ) : (
              <span key={index} />
            )
          )}
      </div>
    </div>
  );
};

export default Body;
