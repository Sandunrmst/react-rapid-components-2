import React, { useEffect, useState } from "react";

const RandomQuoteGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState(null);

  async function fetchQuote() {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://api.quotable.io/quotes/random", {
        method: "GET",
      });
      const result = await apiResponse.json();

      console.log(result);

      if (result && result.length > 0) {
        setLoading(false);
        setQuote(result[0]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  function handleRefresh() {
    fetchQuote();
  }

  if (loading) {
    return <h3>Loading.... </h3>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-rose-600">
        Random Quote Generator
      </h1>
      <div className="bg-slate-50 p-4 rounded-xl w-[50%] flex flex-col justify-center m-auto">
        <p className="text-2xl">"{quote?.author}"</p>
        <p className="text-xl ">{quote?.content}</p>
      </div>
      <button
        className="bg-orange-500 p-2 rounded-md mt-2 font-semibold"
        onClick={handleRefresh}
      >
        Refresh
      </button>
    </div>
  );
};

export default RandomQuoteGenerator;
