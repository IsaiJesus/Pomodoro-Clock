const PomodoroPage = () => {
  return (
    <main>
      <div>
        <div>
          <h2>05:00</h2>
          <p>minutes</p>
        </div>
        <h4>Working</h4>
      </div>
      <div>
        <button className="fas fa-redo-alt"></button>
        <button className="fas fa-play"></button>
        <button className="fas fa-stop"></button>
      </div>
      <div>
        <button className="fab fa-twitter"></button>
        <button className="fab fa-instagram"></button>
        <button className="fab fa-github"></button>
      </div>
    </main>
  );
};

export default PomodoroPage;
