import "./App.css";
import Piechart from "../Piechart/Piechart";
import MyProfile from "../MyProfile/MyProfile"
import Register from '../Register/Register';
import Login from '../Login/Login'
import NewExercire from "../NewExercire/NewExercire";
import ActivitySum from "../ActivitySum/ActivitySum";
function App() {
  return (
    <div className="App">
      <ActivitySum/>
      {/*<MyProfile/>*/}
      <NewExercire/>
      <Login /> 
      <Register />
      <Piechart/>
    </div>
  );
}
export default App