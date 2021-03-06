import { useContext } from "react";
import SettingsContext from "../context/SettingsContext";
import { Link } from "react-router-dom";
import "../App.css";

const ConfigPage = () => {
  const { handleChange } = useContext(SettingsContext);

  return (
    <main className="container">
      <span className="fas fa-cog config-icon"></span>
      <div className="box-settings">
        <label className="instruction-settings" htmlFor="work">
          Time to work
        </label>
        <select id="work" name="work" onChange={handleChange}>
          <option value={15}>15 Minutes</option>
          <option value={20}>20 Minutes</option>
          <option value={25}>25 Minutes</option>
          <option value={30}>30 Minutes</option>
        </select>
      </div>
      <div className="box-settings">
        <label className="instruction-settings" htmlFor="rest">
          Time to rest
        </label>
        <select id="rest" name="rest" onChange={handleChange}>
          <option value={5}>5 Minutes</option>
          <option value={10}>10 Minutes</option>
          <option value={15}>15 Minutes</option>
          <option value={20}>20 Minutes</option>
        </select>
      </div>
      <input
        name="task"
        type="text"
        placeholder="Write what you have to do"
        onChange={handleChange}
        autoComplete="off"
      />
      <Link className="btn" to="/pomodoro">
        Go
      </Link>
    </main>
  );
};

export default ConfigPage;
