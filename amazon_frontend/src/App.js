import './App.css';
import { Footer } from './Components/Footer';
import Navbar from './Components/Navbar';
import Dashboard from './Dashboard_Nav/Dashboard';
import { AllRoutes } from './Routes/AllRoutes';
import { SIdebar } from './Components/SIdebar';
function App() {
    return (
        <div className="App">
            <Navbar />
            <Dashboard />
            <AllRoutes />
            <Footer />
        </div>
    );
}

export default App;
