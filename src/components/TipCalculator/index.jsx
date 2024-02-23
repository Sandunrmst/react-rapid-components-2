import { useState } from "react";

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState(null);
  const [tipPercentage, setTipPercentage] = useState(10);
  const [splitCount, setSplitCount] = useState(1);
  const [tipAmount, setTipAmount] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  function handleCalculateTip() {
    if (
      !billAmount ||
      billAmount <= 0 ||
      !tipPercentage ||
      tipPercentage <= 0
    ) {
      setErrorMsg(
        "Please enter valid values for Bill ammount & Tip Percentage"
      );
      return;
    }

    const bill = parseFloat(billAmount);
    const tip = (bill * tipPercentage) / 100;
    const totalAmount = bill + tip;
    const tipAmountPerPerson = tip / splitCount;
    const totalAmountPerPerson = totalAmount / splitCount;

    setTipAmount({
      totalAmount: totalAmount.toFixed(2),
      tipPerPerson: tipAmountPerPerson.toFixed(2),
      totalPerPerson: totalAmountPerPerson.toFixed(2),
    });
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-3">Tip Calculator</h1>
      <div className="mb-2">
        <label className="text-left">Bill Amount:</label>
        <input
          onChange={(event) => setBillAmount(event.target.value)}
          value={billAmount}
          className="border px-2 py-1 rounded-[5px] ml-2"
          type="number"
        />
      </div>
      <div className="mb-2">
        <label className="text-left">Tip Percentage:</label>
        <input
          onChange={(event) => setTipPercentage(event.target.value)}
          value={tipPercentage}
          className="border px-2 py-1 rounded-[5px] ml-2"
          type="number"
        />
      </div>
      <div className="mb-2">
        <label className="text-left">Number of People:</label>
        <input
          onChange={(event) => setSplitCount(event.target.value)}
          value={splitCount}
          className="border px-2 py-1 rounded-[5px] ml-2"
          type="number"
        />
      </div>

      <button
        className="bg-orange-500 px-2 py-2 rounded-md my-2"
        onClick={handleCalculateTip}
      >
        Calculate Tip
      </button>
      {tipAmount ? (
        <div>
          <p>Total Amount : {tipAmount.totalAmount}</p>
          <p>Tip Per Person : {tipAmount.tipPerPerson}</p>
          <p>Total Amount Per Person : {tipAmount.totalPerPerson}</p>
        </div>
      ) : null}
    </div>
  );
};

export default TipCalculator;
