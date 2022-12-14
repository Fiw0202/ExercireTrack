import "./NewExercire.css";
const NewExercire = () => {
  return (
    <div className="add-excerice">
      <h1>New Exercire</h1>
      <div className="newex-form">
        <div className="section-form">
          <p>Activity</p>
          <p>Date</p>
          <p>Time</p>
          <p>Number of sets</p>
          <p>Distance</p>
          <p>Calories Burned</p>
        </div>
        <div className="input-action">
          <input type="text" placeholder="Activity"></input>
          <input type="date"></input>
          <input type="time" placeholder="Activity"></input>
          <input type="text" placeholder="Optional"></input>
          <input type="text" placeholder="Optional"></input>
          <input type="text" placeholder="Optional"></input>
        </div>
      </div>
      <button type="submit" className="btn-save">Save</button>
    </div>
  );
};

export default NewExercire;
