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

export const ProductsCard = ({ id, image, price, brand, name }) => {
  return (
    <Flex
      spacing={4}
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Flex direction="column" justifyContent="space-between" height="100%">
        <Box>
          <Image
            src={image}
            width={"200px"}
            margin="auto"
            height={"150px"}
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
          <Button
            background={"cyan.400"}
            size={"lg"}
            _hover={{
              transform: "scale(1.2)",
              color: "black",
              background: "darkturquoise",
            }}
          >
            View
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};
