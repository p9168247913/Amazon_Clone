import logo from './logo.svg';
import './App.css';
import { AllRoutes } from './Pages/AllRoutes';
import {Link} from "react-router-dom"

function App() {
  // const navigate = useNavigate()
  // const goToAdminLogin = () =>{
  //   return <Navigate  />
  // }
  return (
    <div className="App">
      <AllRoutes />
     </div>
  );
}

export default App;
