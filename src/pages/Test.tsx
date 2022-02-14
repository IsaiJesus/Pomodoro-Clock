import { useState } from "react";

const Test = () => {

  var work = 2;
  var rest = 1;

  //intervalId is to save the setInterval from timer and can do a clearInterval of that setInterval
  const [intervalId, setIntervalId] = useState(setInterval(() => {}));
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(work);
  const [toggleTime, setToggleTime] = useState(true);
  //this is for the active buttons
  const [buttonActivate, setButtonActivate] = useState(true);

  //There are counters because the state of each variable doesn't work if I update it directly
  var counterS = seconds;
  var counterM = minutes;

  //start countdown function, and when the pause is active, the time is the same
  const handlePlay = () => {
    const timer = setInterval(() => {
      //when the seconds are less than 0, the seconds go back to 59s and the minutes are subtracted by 1
      if (counterS < 0) {
        counterM--;
        counterS = 5;
      }
      //the states take value from the counters
      setMinutes(counterM);
      setSeconds(counterS);
      //seconds begin to countdown
      counterS--;
      //when the countdown equals 0, setInterval stops
      if (counterS < 0 && counterM === 0) {
        clearInterval(timer);
        setToggleTime(!toggleTime);
      }
    }, 1000);
    //state to do the setInterval global
    setIntervalId(timer);
    setButtonActivate(false);
  };

  //pause timer for the counterdown
  const handlePause = () => {
    clearInterval(intervalId);
    setButtonActivate(true);
  };

  //reset time to initial time and start the countdown
  const handleWork = () => {
    counterS = 0;
    counterM = work;
    clearInterval(intervalId);
    handlePlay();
  };

  const handleRest = () => {
    counterS = 0;
    counterM = rest;
    clearInterval(intervalId);
    handlePlay();
  }

  return (
    <div>
      <div>
        <h1>{toggleTime ? "Work" : "Rest"}</h1>
        <h1>
          {minutes < 10 && "0"}{minutes}:{seconds < 10 && "0"}{seconds}
        </h1>
        {buttonActivate 
        ? <button onClick={handlePlay}>Play</button> 
        : <button onClick={handlePause}>Pause</button>}
        <button onClick={toggleTime ? handleWork : handleRest}>Start {toggleTime ? "work" : "rest"}</button>
      </div>
    </div>
  );
};

export default Test;
