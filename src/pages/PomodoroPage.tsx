import { useState, useContext, useEffect, useRef } from "react";
import SettingsContext from "../context/SettingsContext";
import { Link } from "react-router-dom";
import "../App.css";

const PomodoroPage = () => {

  const audioEl = useRef<HTMLAudioElement | null>(null);

  const { settings } = useContext(SettingsContext);

  var work = settings.work;
  var rest = settings.rest;

  //intervalId is to save the setInterval from timer and can do a clearInterval of that setInterval
  const [intervalId, setIntervalId] = useState(setInterval(() => {}));
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(work);
  //toggleTime is to change the time from work to rest and vice versa
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
        counterS = 59;
      }
      //the states take value from the counters
      setMinutes(counterM);
      setSeconds(counterS);
      //seconds begin to countdown
      counterS--;
      //when the countdown equals 0, setInterval stops and the state of toggleTime changes
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

  //start or restart timer to counterM from context and start the countdown
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

  //change title and play the sound when time is 0
  useEffect(() => {
    if(seconds <= 0 && minutes === 0){
      audioEl.current?.play();
    }
    if(toggleTime){
      document.title = "Time to work | Pomodoro Clock";
    }else{
      document.title = "Time to rest | Pomodoro Clock";
    }
  }, [toggleTime]);

  return (
    <main className="container">
      <div className="clock">
        <h1>{minutes < 10 && "0"}{minutes}:{seconds < 10 && "0"}{seconds}</h1>
        <h4>{toggleTime ? "Working" : "Take a break"}</h4>
        <p className="task">
          Your task: {settings.task}<span className="fas fa-pencil-alt"></span>
        </p>
      </div>
      <div className="controls">
        {seconds <= 0 && minutes === 0
          ? <button 
              onClick={toggleTime ? handleWork : handleRest} 
              className="start">
                Start {toggleTime ? "work" : "rest"}
            </button>
          : <div className="controls-btn">
              <button 
                onClick={buttonActivate ? handlePlay : handlePause} 
                className={buttonActivate ? "fas fa-play control" : "fas fa-pause control"}>
              </button>
              <button 
                onClick={toggleTime ? handleWork : handleRest} 
                className="fas fa-redo-alt control">
              </button>
            </div>
        }
      </div>
      <audio ref={audioEl}>
        <source src="/audio/alarm.mp3" type="audio/mpeg"/>
        Your browser does not support the audio element.
      </audio>
      <div className="back">
        <Link to="/settings">
          Back to settings <span className="fas fa-cog back-cog"></span>
        </Link>
      </div>
      <div className="socials">
        <a
          href="https://twitter.com/isaijesus02"
          target="_blank"
          rel="noreferrer noopener"
          id="twitter"
          className="fab fa-twitter social"
        ></a>
        <a
          href="https://www.instagram.com/isaijesus23/"
          target="_blank"
          rel="noreferrer noopener"
          id="instagram"
          className="fab fa-instagram social"
        ></a>
        <a
          href="https://github.com/isaijesus"
          target="_blank"
          rel="noreferrer noopener"
          id="github"
          className="fab fa-github social"
        ></a>
      </div>
      <h1 className="author">Pomodoro clock by Isai Jesus</h1>
    </main>
  );
};

export default PomodoroPage;
