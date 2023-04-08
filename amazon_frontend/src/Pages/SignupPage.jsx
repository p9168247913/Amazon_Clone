import { FormControl, FormErrorMessage, Checkbox, Input, Select, Button, Spinner, useToast, Box, FormLabel } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import "../Components/style.css"
import usersignupaction from '../Redux/UserSignup/action'
import { Link, useNavigate } from 'react-router-dom'
// import { useAuth0 } from "@auth0/auth0-react";
const SignupPage = () => {
  const init = {
    email: "",
    password: "",
    name: "",
  
  }
  // const { user,loginWithRedirect } = useAuth0();
  const [data, setData] = useState(init)
  const toast = useToast()
  const dispatch = useDispatch()

 const navigate =useNavigate()
  const handleChange = (e) => {
    const { name } = e.target
    let  val = e.target.value
    setData({ ...data, [name]: val })
  }
  const onSubmit = (e,data) => {
    e.preventDefault()
      dispatch(usersignupaction(data))
      .then((res)=>{
        console.log(res)
        if(res.payload.user){
          toast({
            position:"top",
            title: 'Account created succesfully',
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
          setData(init)
          navigate("/login")
        } else{
          toast({
            position:"top",
            title:res.payload.msg,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
          setData(init)
          navigate("/login")
        }
      
      })
      .catch((err)=>{
        toast({
          position:"top",
          title: err,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
        setData(init)

      })
   

 
  }

  // if(isloading){
  //   return <form className='form'>
  //       <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' margin="auto"/>
    
  //   </form>
  // }

  return (<Box width={["95%","95%","40%","40%"]} margin="auto" marginTop={["15%","15%","5%","5%"]} padding="2%">
    <form className='form' onSubmit={(e) => onSubmit(e,data)}>
      <h1>Create account here</h1>
      <FormLabel>Name</FormLabel>
        <Input name='name' value={data.name} onChange={handleChange} className='input' type='text' placeholder="Enter your name" />
        <FormLabel>Email</FormLabel>
        <Input name="email" value={data.email} onChange={handleChange} className='input' type='email' placeholder="Enter your email" />
       
        <FormLabel>Password</FormLabel>
        <Input name="password" value={data.password} onChange={handleChange} className='input' type='password' placeholder="Enter your password" />
      <Button colorScheme='teal'type='submit' marginTop="3%">
        Submit
      </Button>
      <Box className='divlogin' marginTop="3%">
        <Button>Continue with Google</Button>
      <p>Already a user <Link to="/login" color='navy-blue'>Login here</Link></p>
      </Box>
    </form>

  </Box>
  )

}
export { SignupPage }