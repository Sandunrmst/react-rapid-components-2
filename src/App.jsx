import { useState } from "react";
import "./App.css";
import ProductPage from "./components/pagination/productPage";
import DigitalClock from "./components/digitalClock";
import CountdownTimer from "./components/countDownTimer";
import TimerTest from "./components/countDownTimer/timerTest";
import ProgressTest from "./components/progressBar/progressTest";
import RandomQuoteGenerator from "./components/randomQuoteGen";
import TooltipTest from "./components/tooltips/test";
import CurrencyConverter from "./components/currencyconverter";

function App() {
  return (
    <>
      {/* <ProductPage /> */}
      {/* <DigitalClock /> */}
      {/* <TimerTest /> */}
      {/* <ProgressTest /> */}
      {/* <RandomQuoteGenerator /> */}
      {/* <TooltipTest />  */}
      <CurrencyConverter />
    </>
  );
}

export default App;
