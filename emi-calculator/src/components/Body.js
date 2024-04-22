import React, { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";

const Body = () => {
  const [asset, setAsset] = useState(0);
  const [interest, setInterest] = useState(0);
  const [processingFee, setProcessingFee] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(0);
  const [loan, setLoan] = useState(0);

  useEffect(() => {
    const P = asset - downPayment;
    const R = parseInt(interest) / 1200;
    const N = tenure * 12;

    if (N === 0) return;

    const temp = (1 + R) ** N;
    const amount = P * R * (temp / (temp - 1));

    setLoan(amount);
  }, [asset, interest, processingFee, downPayment, tenure]);

  return (
    <div>
      <h1>EMI Calculator</h1>
      <h4>Total Cost of Asset</h4>
      <input onChange={(e) => setAsset(e?.target?.value)} />
      <h4>Interest Rate(in %)</h4>
      <input onChange={(e) => setInterest(e?.target?.value)}></input>
      <h4>Processing Fee (in %)</h4>
      <input onChange={(e) => setProcessingFee(e?.target?.value)}></input>
      <h4>Down Payment</h4>
      <h5>
        Total Down Payment - {parseInt(downPayment * (1 + processingFee / 100))}
      </h5>
      <Slider
        defaultValue={0}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={(e, value) => setDownPayment(value)}
        max={asset}
      />
      <h4>Loan Per Month</h4>
      <h5>Total Loan Amount - {parseInt(loan) * tenure * 12}</h5>
      <Slider
        value={parseInt(loan)}
        defaultValue={0}
        aria-label="Default"
        valueLabelDisplay="auto"
        max={asset / 10}
      />

      <h4>Tenure</h4>
      <Slider
        defaultValue={0}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={(e, value) => setTenure(value)}
      />
    </div>
  );
};

export default Body;
