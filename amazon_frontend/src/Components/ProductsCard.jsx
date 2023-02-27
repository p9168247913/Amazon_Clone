import React from "react";
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
    Card,
    Flex,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

export const ProductsCard = ({ id, image, price, brand, name }) => {
    return (
        <Flex
            spacing={4}
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
        >
            <Flex direction="column" padding={"20px"} justifyContent="space-between" height="100%">
                <Box>
                    <Image
                        src={image}
                        margin="auto"
                        alt={id}
                    />
                </Box>
                <Box>
                    {/* <Text fontWeight="semibold" marginTop={2}>
        {name}
      </Text> */}
                </Box>
                <Box>
                    <Text fontWeight="semibold" marginTop={2}>
                        {brand}
                    </Text>
                </Box>
                <Box>
                    <Text fontWeight="semibold" marginTop={2}>
                        Price: {price}
                    </Text>
                    <Text
                        fontWeight="semibold"
                        marginTop={2}
                        maxW="200px"
                        overflow="hidden"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        height="80px"
                    >
                        {name}
                    </Text>
                </Box>
                <Box mt="auto">
                    <Link to={`/${id}`}>
                        <Button
                            background={"cyan.400"}
                            width={"100%"}
                            _hover={{
                                transform: "scale(1.1)",
                                color: "black",
                            }}
                        >
                            View
                        </Button>
                    </Link>
                </Box>
            </Flex>
        </Flex>
    );
};
