const ConfigPage = () => {
  return (
    <main>
      <span className="fas fa-cog"></span>
      <div>
        <label htmlFor="work">Time to work</label>
        <select id="work">
          <option value="15">15 Minutes</option>
          <option value="20">20 Minutes</option>
          <option value="25">25 Minutes</option>
          <option value="30">30 Minutes</option>
        </select>
      </div>
      <input type="text" placeholder="Write a task to do"/>
      <div>
        <label htmlFor="rest">Time to rest</label>
        <select id="rest">
          <option value="15">5 Minutes</option>
          <option value="20">10 Minutes</option>
          <option value="25">15 Minutes</option>
          <option value="30">20 Minutes</option>
        </select>
      </div>
      <button>Go</button>
    </main>
  );
};

export default ConfigPage;
