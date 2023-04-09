import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Flickity from "react-flickity-component";
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
} from "@chakra-ui/react";
import "./SinglePages.css";
// import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { getSingleProduct, setCart } from "../../Redux/AppReducer/action";
import axios from "axios";

export function SinglePages({category}) {
    const { id } = useParams();
    console.log("id is", id);
    const [product, setProduct] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        axios.get(`https://amazon-x3fk.onrender.com/${category}/${id}`).then(res => {
            // console.log("res is", res.data);
            setProduct(res.data[0]);
        }).catch(err => {
            console.log(err);
        })
    }, []);
    const sendproduct = () => {
        dispatch(setCart(product));
    };    
    https://amazon-x3fk.onrender.com

    // console.log(product);

    return (
        <Container maxW={"7xl"}>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}
            >
                <Flex>
                    <Flickity
                        className={"carousel"} // default ''
                        elementType={"div"} // default 'div'
                        options={{
                            initialIndex: 0,
                            autoPlay: true,
                            pauseAutoPlayOnHover: true,
                        }} // takes flickity options {}
                        // disableImagesLoaded={false} // default false
                        reloadOnUpdate // default false
                        static // default false
                    >
                        <Image
                            rounded={"md"}
                            alt={"product image"}
                            src={ product.img1}
                            fit={"cover"}
                            align={"center"}
                            w={"100%"}
                            h={{ base: "100%", sm: "400px", lg: "500px" }}
                        />
                        <Image
                            rounded={"md"}
                            alt={"product image"}
                            src={product.imglink || product.img2}
                            fit={"cover"}
                            align={"center"}
                            w={"100%"}
                            h={{ base: "100%", sm: "400px", lg: "500px" }}
                        />
                        <Image
                            rounded={"md"}
                            alt={"product image"}
                            src={product.img3 || product.imglink}
                            fit={"cover"}
                            align={"center"}
                            w={"100%"}
                            h={{ base: "100%", sm: "400px", lg: "500px" }}
                        />
                    </Flickity>
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }}>
                    <Box as={"header"}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                        >
                            {product.brand}
                        </Heading>
                        <Text
                            color={useColorModeValue("gray.900", "gray.400")}
                            fontWeight={300}
                            fontSize={"2xl"}
                        >
                            {product.MRPx}
                        </Text>
                    </Box>

                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={"column"}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue("gray.200", "gray.600")}
                            />
                        }
                    >
                        <VStack spacing={{ base: 4, sm: 6 }}>
                            <Text
                                color={useColorModeValue("gray.500", "gray.400")}
                                fontSize={"2xl"}
                                fontWeight={"300"}
                            >
                                {product.name}
                            </Text>
                            <Text fontSize={"lg"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                                aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                                maxime modi nam officiis porro, quae, quisquam quos
                                reprehenderit velit? Natus, totam.
                            </Text>
                        </VStack>
                        <Box>
                            <Text
                                fontSize={{ base: "16px", lg: "18px" }}
                                color={useColorModeValue("yellow.500", "yellow.300")}
                                fontWeight={"500"}
                                textTransform={"uppercase"}
                                mb={"4"}
                            >
                                Features
                            </Text>

                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                                <List spacing={2}>
                                    <ListItem>Chronograph</ListItem>
                                    <ListItem>Master Chronometer Certified</ListItem>{" "}
                                    <ListItem>Tachymeter</ListItem>
                                </List>
                                <List spacing={2}>
                                    <ListItem>Anti‑magnetic</ListItem>
                                    <ListItem>Chronometer</ListItem>
                                    <ListItem>Small seconds</ListItem>
                                </List>
                            </SimpleGrid>
                        </Box>
                        <Box>
                            <Text
                                fontSize={{ base: "16px", lg: "18px" }}
                                color={useColorModeValue("yellow.500", "yellow.300")}
                                fontWeight={"500"}
                                textTransform={"uppercase"}
                                mb={"4"}
                            >
                                Product Details
                            </Text>

                            <List spacing={2}>
                                <ListItem>
                                    <Text as={"span"} fontWeight={"bold"}>
                                        Between lugs:
                                    </Text>{" "}
                                    20 mm
                                </ListItem>
                                <ListItem>
                                    <Text as={"span"} fontWeight={"bold"}>
                                        Bracelet:
                                    </Text>{" "}
                                    leather strap
                                </ListItem>
                                <ListItem>
                                    <Text as={"span"} fontWeight={"bold"}>
                                        Case:
                                    </Text>{" "}
                                    Steel
                                </ListItem>
                                <ListItem>
                                    <Text as={"span"} fontWeight={"bold"}>
                                        Case diameter:
                                    </Text>{" "}
                                    42 mm
                                </ListItem>
                                <ListItem>
                                    <Text as={"span"} fontWeight={"bold"}>
                                        Dial color:
                                    </Text>{" "}
                                    Black
                                </ListItem>
                                <ListItem>
                                    <Text as={"span"} fontWeight={"bold"}>
                                        Crystal:
                                    </Text>{" "}
                                    Domed, scratch‑resistant sapphire crystal with anti‑reflective
                                    treatment inside
                                </ListItem>
                                <ListItem>
                                    <Text as={"span"} fontWeight={"bold"}>
                                        Water resistance:
                                    </Text>{" "}
                                    5 bar (50 metres / 167 feet){" "}
                                </ListItem>
                            </List>
                        </Box>
                    </Stack>

                    <Button
                        rounded={"none"}
                        onClick={sendproduct}
                        w={"full"}
                        mt={8}
                        size={"lg"}
                        py={"7"}
                        bg={useColorModeValue("gray.900", "gray.50")}
                        color={useColorModeValue("white", "gray.900")}
                        textTransform={"uppercase"}
                        _hover={{
                            transform: "translateY(2px)",
                            boxShadow: "lg",
                        }}
                    >
                        Add to cart
                    </Button>

                    <Stack direction="row" alignItems="center" justifyContent={"center"}>
                        <MdLocalShipping />
                        <Text>2-3 business days delivery</Text>
                    </Stack>
                </Stack>
            </SimpleGrid>
        </Container>
    );
}
