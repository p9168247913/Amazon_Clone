import { Link } from "react-router-dom";
import "./Dashboard.css";
import { Box, Text } from "@chakra-ui/react";
function Dashboard() {
    return (

        <Box  display={"flex"} justifyContent={"space-between"} alignItems={"center"} height={"35px"} width={"100%"} fontFamily={"Arial,sans-serif"} bg={"#232f3e"} color={"white"}>
            <Box width={['30%', "40%", "40%", "50%"]} display={"flex"}>
                <Link style={{ color: "white", marginLeft: "15px" }} to="/" > <Text fontSize={['5px', '10px', '15px', '20px']}>All</Text></Link>
                <Link style={{ color: "white", marginLeft: "15px" }} to="/laptop"  > <Text fontSize={['5px', '10px', '15px', '20px']}>Laptop</Text></Link>
                <Link style={{ color: "white", marginLeft: "15px" }} to="/television"  ><Text fontSize={['5px', '10px', '15px', '20px']}>Television</Text></Link>
                <Link style={{ color: "white", marginLeft: "15px" }} to="/appliances"  ><Text fontSize={['5px', '10px', '15px', '20px']}>Appliances</Text></Link>
                <Link style={{ color: "white", marginLeft: "15px" }} to="/watch"  ><Text fontSize={['5px', '10px', '15px', '20px']}>Watch</Text></Link>
                <Link style={{ color: "white", marginLeft: "15px" }} to="/soundbar"  ><Text fontSize={['5px', '10px', '15px', '20px']}>Soundbar</Text></Link>
            </Box>
            <Box  width={['30%', "40%", "40%", "50%"]} marginLeft={"40%"}>
                <img style={{ width: "300px" }} src="https://m.media-amazon.com/images/G/31/img17/Home/AmazonTV/Tanisha/JWM_SWM._CB613865137_.jpg" alt="" />
            </Box>
        </Box>
    )
}
export default Dashboard;