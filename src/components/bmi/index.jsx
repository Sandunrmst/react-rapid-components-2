import { useState } from "react";

function BMICalculator() {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [bmi, setBMI] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  function calculateBmi() {
    if (!height || !weight) {
      setErrorMsg("Please enter both height and weight");
      return;
    }

    const numericHeight = parseFloat(height);
    const numericWeight = parseFloat(weight);

    if (
      isNaN(numericHeight) ||
      isNaN(numericWeight) ||
      numericHeight <= 0 ||
      numericWeight <= 0
    ) {
      setErrorMsg(
        "Please enter valid numeric values for both height and weight"
      );
      return;
    }

    const calculateHeightInMeters = numericHeight / 100;
    const calculateBmiValue = (
      numericWeight /
      (calculateHeightInMeters * calculateHeightInMeters)
    ).toFixed(2);

    setBMI(calculateBmiValue);
    setErrorMsg("");
  }

  console.log(bmi);

  return (
    <div className="max-w-[500px] m-auto">
      <h1 className="mt-[30px] mb-[30px]">BMI Calculator</h1>
      <div className="mb-[20px]">
        <label className="mb-[10px] block mr-[10px]">Height (cm):</label>
        <input
          className="p-[10px]"
          onChange={(event) => setHeight(event.target.value)}
          type="number"
          value={height}
        />
      </div>
      <div className="mb-[20px]">
        <label>Weight (kg):</label>
        <input
          onChange={(event) => setWeight(event.target.value)}
          type="number"
          value={weight}
        />
      </div>
      <button
        className="px-[20px] py-[12px] bg-[#f3f800] text-2xl font-bold cursor-pointer mb-[30px]"
        onClick={calculateBmi}
      >
        Calculate BMI
      </button>
      {errorMsg ? (
        <p className="font-extrabold text-[30px]">{errorMsg}</p>
      ) : null}
      {errorMsg !== "" ? null : (
        <p className="font-extrabold text-[30px]">
          {bmi < 18.5
            ? "Underweight"
            : bmi >= 18.5 && bmi < 24.9
            ? "Normal Weight"
            : bmi >= 25 && bmi < 29.9
            ? "Overweight"
            : "Obese"}
        </p>
      )}
    </div>
  );
}

export default BMICalculator;
