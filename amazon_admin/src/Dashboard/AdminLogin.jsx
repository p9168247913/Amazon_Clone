import { useState } from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { Link  } from "react-router-dom"


import {useNavigate} from "react-router-dom"
import "./Admin.css"


export default function AdminLogin() {
    const [text, setText] = useState({
        email : "",
        password:""
    })
    const handelChangeInput  =(e)=>{
        setText({...text,[e.target.type]:e.target.value})
    }
    const navigate = useNavigate()
    const handelSubmit = ()=>{
        if(text.email === "amazon@gmail.com" && text.password === "12345"){
            //send dashboard
            alert("Welcome Admin!")
            navigate("/telivision")
            
        }else if(text.email === "amazon@gmail.com" && text.password !== "12345"){
            alert("Incorrect Password")
            //password wrong
        }else if(text.email !== "amazon@gmail.com" && text.password === "12345"){
            //email wrong
            alert("Incorrect Email")
        }else{
            //all this are wrong
           
        }
    }

    return (
        <Flex
            
        // border={"1px solid red"}
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
            >
            <Stack style={{border: "1px solid red",borderRadius:"10px", width:" 40%" , boxShadow: "0 0 10px gray"}}  spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to Admin Account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        Create New Account <Link to="/signup" style={{ textDecoration: 'none', color: 'blue' }} >Signup</Link>
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    // border={"1px solid red"}
                    style={{margin:"auto", width:"90%", marginTop: "20px"}}
                    p={8}>
                    <Stack  spacing={4}>
                        <FormControl id="email" style={{display: "flex", justifyContent:"space-around"}}>
                            <FormLabel>Email address :-</FormLabel>
                            <Input placeholder="Email" style={{height: "25px",borderRadius: "5px", width: "40%"}} type="email" value={text.email} onChange={handelChangeInput}/>
                        </FormControl>
                        <FormControl id="password" style={{display: "flex", justifyContent:"space-around", marginBottom:"30px"}}>
                            <FormLabel style={{marginTop:"20px"}}>Password :-</FormLabel>
                            <Input placeholder="Password" style={{marginLeft: "28px",height: "25px",borderRadius: "5px", width: "40%", marginTop:"20px"}} type="password" value={text.password} onChange={handelChangeInput}/>
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-around'} >
                                <Checkbox >Remember me</Checkbox>
                                <Link color={'blue.400'}>Forgot password?</Link>
                            </Stack>
                            <Button style={{backgroundColor: "black", height: "30px", width:"40%", color:"white", borderRadius: "5px", margin: "auto", marginTop:"30px"}}
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }} onClick = {handelSubmit}>
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>

        // <div className="main">
        //     <h1><u>Sign-In to Admin Account</u></h1>
        //     <div className='signup'>
        //         <h4>Create New Account</h4>
        //         <h4><u>Signup</u></h4>
        //     </div>
        //     <div className='inp1'>
        //         <label htmlFor="">Email Address</label>
        //         <input type="email"  placeholder='Enter Email' value={text.email} onChange={handelChangeInput} /><br />
        //     </div>
        //     <div className='inp2'>
        //         <label htmlFor="">Password</label>
        //         <input type="email" placeholder='Enter Password' value={text.password} onChange={handelChangeInput}/>
        //     </div>
        //     <div>
        //         <input type="checkbox" />
        //         <p>Remember Me</p>
        //     </div>
        //     <p>Forgot password?</p>
        //     <button onClick = {handelSubmit}>SignIn</button>
        //  </div>
    );
}