import { Box, Button, Image, Input, Select, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link, json, useNavigate } from "react-router-dom";
// import { handelLogOut } from "../Redux/AuthReducer/action";
import { SearchIcon } from "@chakra-ui/icons";
import "./navbar.css";
import { useEffect, useState } from "react";
import { userLogout } from "../Redux/UserLogin/action";
// import { set } from "mongoose";
function Navbar() {
   const [text, setText] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isAuth } = useSelector(state => state.Loginreducer);
    const handelLogOut = () => {
        dispatch(userLogout(false))
    }

    const handelClinking = () =>{
        navigate(`/${text}`)
        // console.log(text);
        setText("")
    }
  
    return (
        <Box display={"flex"}
            width={"100%"}
            bgColor={'black'}
            color={"white"} >
            <Box alignItems={"center"} padding={"0.5%"} display={"flex"} width={["40%", "40%", "40%", "25%"]} justifyContent={"space-around"}>
                <Box width={"50%"}>
                    <Link to="/" width={"40%"}>
                        <Image
                            width={"100%"}
                            src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White2.png"
                            alt="amazon"
                        />
                    </Link>
                </Box>
                <Box width={"40%"} >
                    <Link >
                        <Box display={"flex"} justifyContent={"space-between"} height={"100%"} alignItems={"center"}>
                            <Box display={"flex"} width={"50%"} height={"100%"} padding={"10%"} >
                                <Image
                                    width={"200%"} height={"100%"}
                                    src="data:image/png;base64,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"
                                    alt="location"

                                />

                            </Box>
                            <Text textAlign={"center"} fontSize={['10px', '10px', '15px', '20px']}>Nagpur, India</Text>
                        </Box>
                    </Link>
                </Box>
                {/* categories Section start  point */}


            </Box >
            {/* categories Section End Part */}
            <Box padding={"0.5%"} display={"flex"} width={["40%", "40%", "40%", "45%"]} >

                {/* <Link id="searchBarr" width={"100%"}> */}
                <Box width={"95%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                    <Input  width={"90%"} height={"67%"} type={"search"} color={"white"} borderRightRadius={"none"} value={text} onChange={e=>setText((e.target.value).toLowerCase())} />
                    <SearchIcon padding={"0.8%"} bg={"#febd69"} height={"67%"} width={"10%"} borderRightRadius={"4px"}  onClick={handelClinking}/>
                </Box>
                {/* </Link> */}
            </Box>
            {/* SearchBar Functionality */}
            <Box display={"flex"} width={["40%", "40%", "40%", "30%"]} >

                <Box width={"90%"} display={"flex"} justifyContent={"space-around"} alignItems={"center"}>

                    {isAuth ?
                        <Link style={{ color: "white" }} onClick={() => handelLogOut()}>
                            <Text fontSize={['10px', '10px', '15px', '20px']}>Logout</Text>
                        </Link>
                        :
                        <Link to="/login" >
                            <Text fontSize={['10px', '10px', '15px', '20px']}>Login</Text>
                        </Link>
                    }
                    <Link to="https://amazonagoraadmin.netlify.app/" >
                        <Text fontSize={['10px', '10px', '15px', '20px']} marginLeft={"10px"}>Admin</Text>
                    </Link>

                    <Link to="/cart" >
                        <Box display={"flex"} alignItems={"center"} width={"45%"} justifyContent={"space-between"}>
                            <Image
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0tBS73GPTm5sRcq_9NrB5EPOleQM5bbEEUtn042wk4u2Fc6GcpXr8rRyfI1JjyGNR1fE&usqp=CAU"
                                style={{
                                    height: "100%",
                                    width: "25px",
                                    marginTop: "-10px",
                                    color: "white",
                                    background: "#131921",
                                }}
                                alt="cart"
                            />
                            <Text fontSize={['10px', '10px', '15px', '20px']}>Cart</Text>
                        </Box>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}
export default Navbar;
