import { useContext } from "react";
import SettingsContext from "../context/SettingsContext";
import { Link } from "react-router-dom";
import "../App.css";

const PomodoroPage = () => {

  const { settings } = useContext(SettingsContext);

  return (
    <main className="container">
      <div className="clock">
        <h1>05:00</h1>
        <h4>Working...</h4>
        <p className="task">
          Your task: {settings.task}<span className="fas fa-pencil-alt"></span>
        </p>
      </div>
      <div className="controls">
        <button className="fas fa-redo-alt control"></button>
        <button className="fas fa-play control"></button>
        <button className="fas fa-stop control"></button>
      </div>
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
