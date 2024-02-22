import React, { useEffect, useState } from "react";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("LKR");
  const [exchangeRate, setExchangeRate] = useState();
  const [convertedAmount, setConvertedAmount] = useState();

  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  function handleFromCurrencyChange(event) {
    setFromCurrency(event.target.value);
  }

  function handleToCurrency(event) {
    setToCurrency(event.target.value);
  }

  async function fetchExchangeRate() {
    const apiResponse = await fetch(
      `https://open.er-api.com/v6/latest/${fromCurrency}`,
      {
        method: "GET",
      }
    );

    const result = await apiResponse.json();
    console.log(result);
    const calculateRate = result?.rates[toCurrency];
    setExchangeRate((amount * calculateRate).toFixed(2));
    setConvertedAmount((amount * calculateRate).toFixed(2));
  }

  useEffect(() => {
    fetchExchangeRate();
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div className="">
      <h1>Currency Converter</h1>
      <div className="">
        <input
          value={amount}
          onChange={handleAmountChange}
          type="number"
          name="amount"
          placeholder="Enter Amount"
        />
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
          <option value={"USD"}>USD</option>
          <option value={"LKR"}>LKR</option>
          <option value={"EUR"}>EUR</option>
          <option value={"AUD"}>AUD</option>
        </select>
      </div>
      <p>To</p>
      <div className="">
        <input type="text" value={convertedAmount} />
        <select value={toCurrency} onChange={handleToCurrency}>
          <option value={"USD"}>USD</option>
          <option value={"LKR"}>LKR</option>
          <option value={"EUR"}>EUR</option>
          <option value={"AUD"}>AUD</option>
        </select>
      </div>
      <p>
        Exchange Rate: 1 {fromCurrency} = {exchangeRate} {toCurrency}
      </p>
    </div>
  );
};

export default CurrencyConverter;
