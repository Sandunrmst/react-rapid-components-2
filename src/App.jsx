import { useState } from "react";
import "./App.css";
import ProductPage from "./components/pagination/productPage";
import DigitalClock from "./components/digitalClock";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold  text-orange-800">Product List</h1>

      <ProductPage />
      <DigitalClock />
    </>
  );
}

export default App;
