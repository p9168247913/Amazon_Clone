import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sideBar.css";
// import grid from "../icons/grid.svg"


const SideBar = () => {
	const [isExpanded, setExpendState] = useState(true);
	const menuItems = [
		{
			id:1,
			text: "Dashboard",
			to:"/",
			icon:"https://cdn-icons-png.flaticon.com/512/9147/9147067.png",
			
		},
		{	
			id:2,
			text: "Admin Profile",
			to:"/adminProfile",
			
		},
		{
			id:3,
			text: "Add Products",
			to:"/addProduct",
		
		},
		{	
			id:6,
			text: "File Manager",
			to:"/fileManager",
			
		},
		{
			id:9,
			text: "Settings",
			to:"/settings",
			icon: "icons/settings.svg",
		},
	];
	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					
						<div className="nav-brand" >
							<h2 >AGORA SHOP</h2>
						</div>
				</div>
				<div className="nav-menu">
					
					<h2><Link to='/telivision'>TELEVISION</Link></h2>
					<h2><Link to='/laptop'>LAPTOP</Link></h2>
					<h2><Link to='/appliance'>APPLIANCE</Link></h2>
					<h2><Link to='/watch'>WATCH</Link></h2>
					<h2><Link to='/soundbar'>SOUNDBAR</Link></h2>
					

				</div>
			</div>
			
		</div>
	);
};

export default SideBar;












	
	/* <div className="nav-footer">
				{isExpanded && (
					<div className="nav-details">
						<img
							className="nav-footer-avatar"
							src="icons/admin-avatar.svg"
							alt=""
							srcset=""
						/>
						<div className="nav-footer-info">
							<p className="nav-footer-user-name">M Showkat</p>
							<p className="nav-footer-user-position">store admin</p>
						</div>
					</div>
				)}
				<img className="logout-icon" src="icons/logout.svg" alt="" srcset="" />
			</div> */