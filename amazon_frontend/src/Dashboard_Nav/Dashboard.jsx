import { Link } from "react-router-dom";
import "./Dashboard.css";
function Dashboard(){
    return(
        <div className="dash">
          
<Link style={{color:"black"}} to="/" >All</Link>
<Link style={{color:"black"}} to="/laptop"  >Laptop</Link>
<Link style={{color:"black"}} to="/television"  >Television</Link>
<Link style={{color:"black"}} to="/appliances"  >Appliances</Link>
<Link style={{color:"black"}} to="/watch"  >Watch</Link>
<Link style={{color:"black"}} to="/soundbar"  >Soundbar</Link>


        </div>
    )
}
export default Dashboard;