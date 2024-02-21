import { useState } from "react";
import "./App.css";
import ProductPage from "./components/pagination/productPage";
import DigitalClock from "./components/digitalClock";
import CountdownTimer from "./components/countDownTimer";
import TimerTest from "./components/countDownTimer/timerTest";
import ProgressTest from "./components/progressBar/progressTest";
import RandomQuoteGenerator from "./components/randomQuoteGen";

function App() {
  return (
    <>
      {/* <ProductPage /> */}
      {/* <DigitalClock /> */}
      {/* <TimerTest /> */}
      {/* <ProgressTest /> */}
      <RandomQuoteGenerator />
    </>
  );
}

export default App;
