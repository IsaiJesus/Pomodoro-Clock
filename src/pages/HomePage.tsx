import { Link } from 'react-router-dom';
import '../App.css';

const HomePage = () => {
  return (
    <main className="container">
      <h1 className="title-home">Control your work and rest times with the pomodoro technique.</h1>
      <h3 className="instruction-home">Choose your work times and rest times to be more efficient.</h3>
      <img className="img-home" src="/images/clock.png" alt="Pomodoro Clock"/>
      <Link className="btn" to="/settings">Start</Link>
    </main>
  );
};

export default HomePage;
