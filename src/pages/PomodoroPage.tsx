import '../App.css';

const PomodoroPage = () => {
  return (
    <main className="container">
      <div className="clock">
        <h1>05:00</h1>
        <h4>Working</h4>
      </div>
      <div className="controls">
        <button className="fas fa-redo-alt control"></button>
        <button className="fas fa-play control"></button>
        <button className="fas fa-stop control"></button>
      </div>
      <div className="socials">
        <button id="twitter" className="fab fa-twitter social"></button>
        <button id="instagram" className="fab fa-instagram social"></button>
        <button id="github" className="fab fa-github social"></button>
      </div>
      <h1 className="author">Pomodoro clock by Isai Jesus</h1>
    </main>
  );
};

export default PomodoroPage;
