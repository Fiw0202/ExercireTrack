
import Register from '../Register/Register';
import Login from '../Login/Login'
import './App.css';
import Piechart from '../Piechart/Piechart';
function App() {
  return (
    <div className="App">
      <Login /> 
      <Register />
      <Piechart/>
    </div>
  );
}

export default App