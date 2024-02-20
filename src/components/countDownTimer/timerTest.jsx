import CountdownTimer from ".";

const TimerTest = () => {
  function handleTimeFinish() {
    console.log("Once timmer is finished API call trigger and save data on DB");
  }
  return (
    <div>
      <h1>Countdown Timer</h1>
      <CountdownTimer initialTime={5} onTimeFinish={handleTimeFinish} />
    </div>
  );
};

export default TimerTest;
