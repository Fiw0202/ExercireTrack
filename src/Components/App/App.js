import "./App.css";
import Piechart from "../Piechart/Piechart";
import MyProfile from "../MyProfile/MyProfile"
import Register from '../Register/Register';
import Login from '../Login/Login'
import NewExercire from "../NewExercire/NewExercire";
function App() {
  return (
    <div className="App">
      {/*<MyProfile/>*/}
      <NewExercire/>
      <Login /> 
      <Register />
      <Piechart/>
    </div>
  );
}
export default App