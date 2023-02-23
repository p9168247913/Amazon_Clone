
import './App.css';
import { Cart } from './Pages/Cart_&_Payment/Cart';
import { Footer } from './Components/Footer';

import Navbar from './Components/Navbar';
import Dashboard from './Dashboard_Nav/Dashboard';
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
      <AllRoutes/>
        <Cart/>
      <Footer />
    </div>
  );
}

export default App;
