import {
  Box,
  Checkbox,
  Flex,
  FormLabel,
  Heading,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";

export const SIdebar = ({ data }) => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    const obj = {};
    data.map((e) => {
      if (e.brand) {
        obj[e.brand] = 1;
      }
    });
    const brandArr = [];
    for (let key in obj) {
      brandArr.push(key);
    }
    setBrands(brandArr);
  }, [data]);
  return (
    <>
      <Box
        // marginLeft={"20px"}
        width={"260px"}
        // h={"400px"}
        bg="gray.100"
        boxShadow="lg"
      >
        <Heading marginTop={"20px"} fontSize="2xl" textColor={"cyan.800"}>
          Filter
        </Heading>
        <Heading
          textAlign={"left"}
          marginTop="10px"
          marginBottom={"10px"}
          fontSize={"xl"}
          textColor={"gray.500"}
        >
          Brands
        </Heading>
        {brands.length > 0 &&
          brands.map((e) => {
            return (
              <Flex mb="1rem" alignItems="flex-start">
                {/* <label style={{ marginLeft: "50px" }}> {e}</label> */}

                <Checkbox size={"lg"} marginLeft="20px" borderColor="blue.500">
                  {e}
                </Checkbox>

                {/* <Text marginLeft={"20px"} marginRight="30px" fontSize="20px">
                  {e}
                </Text> */}
              </Flex>
            );
          })}

        {/* <Box mb={4}>
          <FormLabel htmlFor="sort">
            <Heading fontSize={"lg"} textColor={"gray.500"} mb="0.5rem">
              Sort By Price
            </Heading>
          </FormLabel>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input type="radio" />
            <label
              style={{
                display: "inline-block",
                width: "150px",
                textAlign: "right",
                paddingRight: "10px",
              }}
            >
              Low to High
            </label>
            <input type="radio" />
            <label
              style={{
                display: "inline-block",
                width: "150px",
                textAlign: "right",
                paddingRight: "13px",
              }}
            >
              High to Low
            </label>
          </div>
        </Box> */}

        <Box width="250px" height="100vh" bg="gray.100">
          <Heading
            fontSize={"xl"}
            textAlign="left"
            textColor={"gray.500"}
            mb="1.5rem"
            marginTop={"30px"}
          >
            Sort By Price
          </Heading>
          <RadioGroup>
            <VStack spacing="24px">
              <Radio borderColor="blue.500" value="lowToHigh" size="lg">
                <Text as="label" fontWeight="semibold">
                  Low to High
                </Text>
              </Radio>
              <Radio borderColor="blue.500" value="highToLow" size="lg">
                <Text as="label" fontWeight="semibold">
                  High to Low
                </Text>
              </Radio>
            </VStack>
          </RadioGroup>
        </Box>
      </Box>
    </>
  );
};
