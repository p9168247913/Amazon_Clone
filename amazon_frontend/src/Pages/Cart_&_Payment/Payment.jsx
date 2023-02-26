import { Box, Button, IconButton, Image, Radio, RadioGroup, Slide, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"
import styled from "styled-components";

export const Payment = () => {
    const [params] = useSearchParams();
    const navigate = useNavigate();
    const [timer, setTimer] = useState(5);
    const [disabled, setDisabled] = useState(false);
    const price = + params.get("cost");
    const [address, setAddress] = useState(false);
    const [payment, setPayment] = useState(true);
    const [transaction, setTransaction] = useState(true);
    const { isOpen, onToggle } = useDisclosure();
    const redirect = () => {
        let time = 5;
        const int = setInterval(() => {
            time--;
            setTimer(prev => prev - 1);
            if (time === 0) {
                clearInterval(int);
                navigate("/");
            }
        }, 1000)
    }
    const handleClick = () => {
        if (!payment) {
            onToggle();
            setDisabled(true);
            setTimeout(() => {
                setTransaction(false);
                redirect();
            }, 3000)
            return;
        }
        setAddress(!address);
        setPayment(!payment);
    }

    const Icon = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" style={{ fill: "#999999" }} width="20px" viewBox="0 0 448 512">
                <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
            </svg>
        )
    }
    const PaymentNav = () => {
        return (
            <div id="paynav">
                <Image width={"100px"} src="https://i.ibb.co/PhgTtJL/amazon.png" alt="https://i.ibb.co/PhgTtJL/amazon.png" />
                <Text fontSize={"3xl"} >Checkout</Text>
                <IconButton aria-label="lockIcon" icon={<Icon />} colorScheme="gray" background={"white"} />
            </div>
        )
    }
    const PaymentBody = () => {
        return (
            <div id="paybody">
                <div>
                    {address ?
                        <div>
                            <Text fontWeight={"bold"} fontSize={"xl"} >1 Delivery Address</Text>
                        </div>
                        :
                        <div>
                            <Text fontWeight={"bold"} fontSize={"xl"} color="red.500">1 Select a delivery address</Text>
                            <DIV>
                                <Text borderBottom={"1px solid rgb(198, 198, 198)"} fontWeight={"bold"} fontSize={"xl"}>Most recently used</Text>
                                <RadioGroup mt={"20px"}>
                                    <Stack>
                                        <Radio value="1" ><b>Devansh Sharma</b> 3B, suraj marg, devgarh, KOTA, RAJASTHAN, 302163, India, Phone number: 8834895235</Radio>
                                        <Radio value="2" ><b>Shankar Sharma</b> 445/1008, nandi colony, hanumangarh, AJMER, RAJASTHAN, 301108, India, Phone number: 6687988980</Radio>
                                        <Radio value="3" ><b>Pinki Srinivas</b> 88A, sunshine road, devra, JODHPUR, RAJASTHAN, 300145, India, Phone number: 9878675323</Radio>
                                    </Stack>
                                </RadioGroup>
                                <Button isDisabled={disabled} borderBottom={"1px solid rgb(198, 198, 198)"} height={"30px"} mt={"20px"} onClick={handleClick} colorScheme={"yellow"} backgroundColor={"#ffd814"}>Use this address</Button>
                            </DIV>
                        </div>
                    }
                    {payment ?
                        <div>
                            <Text fontWeight={"bold"} fontSize={"xl"} >2 Payment method</Text>
                        </div>
                        :
                        <div>
                            <Text fontWeight={"bold"} fontSize={"xl"} color="red.500">2 Select a payment method</Text>
                            <DIV>
                                <Text borderBottom={"1px solid rgb(198, 198, 198)"} fontWeight={"bold"} fontSize={"xl"}>Available payment methods</Text>
                                <RadioGroup>
                                    <Stack>
                                        <Radio value="1">Pay with Debit/Credit/ATM Cards<br />You can save your cards as per new RBI guidelines.
                                        </Radio>
                                        <Radio value="2">Net Banking</Radio>
                                        <Radio value="3">Other UPI Apps</Radio>
                                        <Radio value="4">EMI</Radio>
                                        <Radio value="5">Cash On Delivery/Pay On Delivery<br />Scan & Pay using Amazon app. Cash, UPI, Cards also accepted.
                                        </Radio>
                                    </Stack>
                                </RadioGroup>
                                <Button isDisabled={disabled} borderBottom={"1px solid rgb(198, 198, 198)"} height={"30px"} mt={"20px"} onClick={handleClick} colorScheme={"yellow"} backgroundColor={"#ffd814"}>Use this payment method</Button>
                            </DIV>
                        </div>
                    }
                </div>
                <div>
                    <Button isDisabled={disabled} onClick={handleClick} colorScheme={"yellow"} backgroundColor={"#ffd814"}>{payment && "Use this address"}{address && "Use this payment method"}</Button>
                    <Text borderBottom={"1px solid rgb(198, 198, 198)"} fontSize={"xs"} align="center">Choose an address to continue checking out. You will still have a chance to review and edit your order before it is final.</Text>
                    <Text mb={"20px"} fontSize={"xl"} fontWeight="bold">Order Summary</Text>
                    <span className="finalPricing"><Text>Items:</Text><Text align={"right"}>{`₹${price}`}</Text></span>
                    <span style={{ borderBottom: "1px solid rgb(198, 198, 198)" }} className="finalPricing"><Text>Delivery:</Text><Text align={"right"}>{"₹0.00"}</Text></span>
                    <span style={{ borderBottom: "1px solid rgb(198, 198, 198)" }} className="finalPricing"><Text fontWeight={"bold"} fontSize={"xl"} color="red.500">Order Total:</Text><Text fontWeight={"bold"} fontSize={"xl"} color="red.500" align={"right"}>{`₹${price}`}</Text></span>
                </div>
            </div>
        )
    }
    return (
        <div id="payment">
            <PaymentNav />
            <PaymentBody />
            <Slide direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
                <Box
                    textAlign={"center"}
                    p='40px'
                    color='black'
                    mt='4'
                    bg='white'
                    rounded='md'
                    shadow='md'
                >
                    {transaction && <img width={"70px"} style={{ margin: "auto" }} src="https://i.ibb.co/qsjnNhd/Spin-1-1s-200px.gif" alt="https://i.ibb.co/qsjnNhd/Spin-1-1s-200px.gif" />}
                    <Text fontSize={"2xl"} fontWeight={"bold"}>{transaction ? "Please Wait... Your transaction is in progress" : `Transaction Successful...Redirecting in ${timer} seconds`}</Text>
                </Box>
            </Slide>
        </div>
    )
}

const DIV = styled.div`
    border: 1px solid grey;
    padding: 20px;
    border-radius: 15px;
    margin-bottom: 15px;
`