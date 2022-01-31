import '../App.css';

const HomePage = () => {
  return (
    <main className="container">
      <h1 className="title-home">Control your work and rest times with the <span>pomodoro technique.</span></h1>
      <img className="img-home" src="/images/clock.png" alt="Pomodoro Clock"/>
      <h3 className="instruction-home">Choose your work times and shorter break times to be more efficient.</h3>
      <button className="btn">Start</button>
    </main>
  );
};

export default HomePage;
