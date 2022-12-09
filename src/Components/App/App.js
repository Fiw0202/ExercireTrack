
import "./App.css";
import Piechart from "../Piechart/Piechart";
import MyProfile from "../MyProfile/MyProfile";
import Register from '../Register/Register';
import Login from '../Login/Login'
import Piechart from '../Piechart/Piechart';
function App() {
  return (
    <div className="App">
      {/*<MyProfile/>*/}
      <Login /> 
      <Register />
      <Piechart/>
    </div>
  );
}
export default App