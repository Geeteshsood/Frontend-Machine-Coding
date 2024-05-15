import { useState } from "react";
import "./App.css";

function App() {
  const [cnt, setCnt] = useState(0);

  const data = ["Customer Info", "Shipping Info", "Payment", "Delivered"];
  const info = [
    "Provide your Contact details",
    "Enter your shipping address",
    "Complete Payment for your order",
    "Your Order has been delivered",
  ];

  return (
    <div className="flex flex-col justify-center items-center space-y-9">
      <h1 className="font-bold text-5xl">Checkout</h1>
      <div className="flex">
        {data.map((val, index) => (
          <div
            key={index}
            className={`m-4 ${
              index < cnt
                ? "bg-green-500"
                : index === cnt
                ? "bg-blue-300"
                : "bg-white"
            } h-16 w-40 flex justify-center items-center`}
          >
            {val}
          </div>
        ))}
      </div>
      <div className="text-2xl text-blue-700">{info[cnt]}</div>
      {cnt < data.length - 1 && (
        <button
          className="bg-black text-white h-8 w-20 mt-5 rounded-lg"
          onClick={() => {
            setCnt(cnt + 1);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
}

export default App;
