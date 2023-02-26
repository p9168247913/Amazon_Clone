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
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login } from '../Redux/AuthReducer/action';
import { useLocation, useNavigate } from 'react-router-dom';

export const Login = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState("eve.holt@reqres.in")
    const [pass, setPass] = useState("cityslicka");
    const handleLogin = () => {
        let data = {
            email,
            password: pass
        }
        dispatch(login(data)).then(() => {
            if (location.state === null) {
                navigate("/", { replace: true });
            } else {
                navigate(location.state, { replace: true });
            }
        });
    }
    return (
        <Flex
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                < Image width={"130px"} m={"auto"} mb={"-40px"} mt={"-40px"} src='https://i.ibb.co/PhgTtJL/amazon.png' alt='https://i.ibb.co/PhgTtJL/amazon.png' />
                <Stack align={'center'}>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Text fontSize={"4xl"} mb={"4"}>Sign in</Text>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password <Link fontWeight={"normal"} color={'blue.400'}>Forgot password?</Link></FormLabel>
                            <Input type="password" value={pass} onChange={e => setPass(e.target.value)} />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                            </Stack>
                            <Button
                                onClick={handleLogin}
                                bg={'linear-gradient(to bottom,#f7dfa5,#f0c14b)'}
                                color={'black'}
                                _hover={{
                                    bg: 'linear-gradient(to bottom,#f7cb64,#ebb223)',
                                }}>
                                Sign in
                            </Button>
                            <Text color={'gray.600'} >
                                By continuing, you agree to Amazon's <Link fontWeight={"normal"} color={"blue.400"}>Conditions of Use</Link> and <Link fontWeight={"normal"} color={"blue.400"}>Privacy Notice</Link>.
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}