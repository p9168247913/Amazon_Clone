import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Text,
    useColorModeValue,
    Image,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
// import { login } from '../Redux/AuthReducer/action';
import { useLocation, useNavigate } from 'react-router-dom';
import { userlogindata } from '../Redux/UserLogin/action';

export const Login = () => {
    const toast = useToast()
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const { isAuth } = useSelector(state => state.Loginreducer);
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })

    const handelInputChange = (e) => {
        const { name, value } = e.target
        setUserInfo({ ...userInfo, [name]: value })
    }
    const handelSubmit = (e) => {
        e.preventDefault()
        dispatch(userlogindata(userInfo))
            .then((r) => {
                console.log(r)
                if (r.payload.token) {
                    toast({
                        position: "top",
                        title: r.payload.msg,
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    })
                    navigate("/")
                } else {
                    toast({
                        position:"top",
                        title:r.payload.msg,
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                      })
                    navigate("/signup")
                }
            })
        console.log(userInfo);
    }


    // useEffect(()=>{
    //     if(isAuth){
    //         navigate("/")
    //     }
    // },[isAuth])
    return (
        <div style={{width:"40%",borderRadius:"10px" ,boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset", width: "25%", margin: "2rem auto", padding: "2rem" }}>
            <form onSubmit={handelSubmit} style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="">Email</label>
                <input style={{ border: "1px solid black", borderRadius:"5px", padding: "10px", marginBottom: "10px" }} placeholder='Enter email...' type="email" name="email" required id="" value={userInfo.email} onChange={handelInputChange} />
                <label htmlFor="">Password</label>
                <input style={{ border: "1px solid black",borderRadius:"5px", padding: "10px", marginBottom: "10px" }} placeholder='Enter password...' type="password" name="password" required id="" value={userInfo.password} onChange={handelInputChange} />
                <input style={{ border: "1px solid black",borderRadius:"5px", padding: "10px", marginBottom: "10px", backgroundColor:'#fada5e' }}  type="submit" value="Sign In" />
            </form>
        </div>

    );
}