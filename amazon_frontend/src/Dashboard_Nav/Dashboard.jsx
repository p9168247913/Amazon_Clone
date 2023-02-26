import { Link } from "react-router-dom";
import "./Dashboard.css";
function Dashboard(){
    return(
      
        <div className="dash_Nav" >
       
<Link style={{color:"white", marginLeft:"15px"}} to="/" >All</Link>
<Link style={{color:"white", marginLeft:"15px"}} to="/laptop"  >Laptop</Link>
<Link style={{color:"white", marginLeft:"15px"}} to="/television"  >Television</Link>
<Link style={{color:"white", marginLeft:"15px"}} to="/appliances"  >Appliances</Link>
<Link style={{color:"white", marginLeft:"15px"}} to="/watch"  >Watch</Link>
<Link style={{color:"white", marginLeft:"15px"}} to="/soundbar"  >Soundbar</Link>
<div className="logo_tv"> 
        <img  style={{width:"300px"}} src="https://m.media-amazon.com/images/G/31/img17/Home/AmazonTV/Tanisha/JWM_SWM._CB613865137_.jpg" alt="" />
        </div>

        </div>
       
      
    )
}
export default Dashboard;