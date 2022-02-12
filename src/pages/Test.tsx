import { useState } from "react";

const Test = () => {

  const [intervalId, setIntervalId] = useState(setInterval(() => {}));
  const [seconds, setSeconds] = useState(15);
  const [minutes, setMinutes] = useState(1);
  const [buttonActivate, setButtonActivate] = useState(true);

  //There are counters because the state of each variable doesn't work if I update it directly
  var counterS = seconds;
  var counterM = minutes;

  const handlePlay = () => {
    const timer = setInterval(() => {
      if (counterS < 0) {
        counterM--;
        counterS = 15;
      }
      setMinutes(counterM);
      setSeconds(counterS);
      counterS--;
      if (counterS < 0 && counterM === 0) {
        clearInterval(timer);
      }
    }, 1000);
    setIntervalId(timer);
    setButtonActivate(false);
  };

  const handlePause = () => {
    clearInterval(intervalId);
    setButtonActivate(true);
  };

  const handleRestart = () => {
    counterS = 15;
    counterM = 1;
    handlePlay();
  };

  return (
    <div>
      {buttonActivate && <button onClick={handlePlay}>Play</button>}
      {buttonActivate && <button onClick={handleRestart}>Restart</button>}
      {!buttonActivate && <button onClick={handlePause}>Pause</button>}
      <h1>
        {minutes < 10 && "0"}
        {minutes}:{seconds < 10 && "0"}
        {seconds}
      </h1>
    </div>
  );
};

export default Test;
