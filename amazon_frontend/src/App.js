import './App.css';

import Navbar from './Components/Navbar';
import Dashboard from './Dashboard_Nav/Dashboard';
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
      <AllRoutes/>


    </div>
  );
}

export default App;
