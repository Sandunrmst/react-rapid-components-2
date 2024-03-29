import { useState } from "react";
import "./App.css";
import ProductPage from "./components/pagination/productPage";
import DigitalClock from "./components/digitalClock";
import CountdownTimer from "./components/countDownTimer";
import TimerTest from "./components/countDownTimer/timerTest";
// import ProgressTest from "./components/progressBar/progressTest";
import RandomQuoteGenerator from "./components/randomQuoteGen";
import TooltipTest from "./components/tooltips/test";
import CurrencyConverter from "./components/currencyconverter";
import FilterProducts from "./components/filterProducts";
import TipCalculator from "./components/TipCalculator";
import MusicPlayer from "./components/musicPlayer";
import ProgressBar from "./components/progressBar";
import BMICalculator from "./components/bmi";
import ButtonRippleEffect from "./components/button-ripple-effect";
import DragAndDrop from "./components/drag-and-drop";
import FormValidation from "./components/formValidation";
import FileUpload from "./components/file-upload";
import Quiz from "./components/quiz-app";

function App() {
  return (
    <>
      {/* <ProductPage /> */}
      {/* <DigitalClock /> */}
      {/* <TimerTest /> */}
      {/* <ProgressTest /> */}
      {/* <RandomQuoteGenerator /> */}
      {/* <TooltipTest />  */}
      {/* <CurrencyConverter /> */}
      {/* <FilterProducts /> */}
      {/* <TipCalculator /> */}
      {/* <MusicPlayer /> */}
      {/* <ProgressBar /> */}
      {/* <BMICalculator /> */}
      {/* <ButtonRippleEffect /> */}
      {/* <DragAndDrop /> */}
      {/* <FormValidation /> */}
      {/* <FileUpload /> */}
      <Quiz />
    </>
  );
}

export default App;
