// import Homepage from "./Components/Home/Homepage"
import Navbar from "./Components/Navbar"
import {Footer} from "./Components/Footer"
import Dashboard from "./Dashboard_Nav/Dashboard";
import { AllRoutes } from "./Routes/AllRoutes";
// import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Navbar/>
      <Dashboard/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
