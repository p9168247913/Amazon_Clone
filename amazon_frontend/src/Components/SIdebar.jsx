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
import { useSearchParams } from "react-router-dom";

export const SIdebar = ({ data }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initState = searchParams.getAll("brand");
    const initOrder = searchParams.get("order");
    const [order, setOrder] = useState(initOrder || "");
    const [brands, setBrands] = useState([]);
    const [urlBrands, urlSetBrands] = useState(initState || []);
    const handleSortPrice = (e) => {
        setOrder(e.target.value);
        localStorage.setItem("sort", e.target.value)
    }
    const handleChange = (e) => {
        let value = e.target.value;
        let newBrands = [...urlBrands];
        if (newBrands.includes(value)) {
            newBrands.splice(newBrands.indexOf(value), 1);
        } else {
            newBrands.push(value);
        }
        urlSetBrands(newBrands);
    }
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

        let params = {
            brand: urlBrands,
        }

        order && (params.order = order)

        setSearchParams(params)
    }, [data, urlBrands, order, setSearchParams]);
    return (
        <>
            <Box
                // marginLeft={"20px"}
                width={["20%","15%","20%","20%"]}
                // h={"400px"}
                bg="gray.100"
                boxShadow="lg"
            >
                <Heading textAlign={"center"} fontSize={["13px", "13px", "20px","30px"]} margin={"auto"} marginTop={"20px"}  textColor={"cyan.800"}>
                    Filter
                </Heading>
                <Heading
                    textAlign={"center"}
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
                            <Flex key={Math.random()}  marginLeft={"0px"} alignItems="flex-start">
                                <Checkbox onChange={handleChange} isChecked={urlBrands.includes(e)} value={e} size={["medium","medium","lg"]} marginLeft="20px" borderColor="blue.500">
                                <Text fontSize={["10px", "10px", "20px","30px"]}>{e}</Text>
                                </Checkbox>
                            </Flex>
                        );
                    })}

                <Box width={["60px", "60px", "70px", "220px"]} textAlign={"center"} margin={"auto"} height="100vh" bg="gray.100">
                    <Heading
                        fontSize={["13px", "13px", "20px","30px"]}
                        textAlign="left"
                        textColor={"gray.500"}
                        mb="1.5rem"
                        marginTop={"30px"}
                    >
                        Sort By Price
                    </Heading>
                    <RadioGroup defaultValue={order} marginLeft={"none"}>
                        <VStack spacing="24px" marginLeft={"0px"}>
                            <Radio   borderColor="blue.500" onChange={handleSortPrice} name="order" value="asc" size={["40px","lg"]}>
                                {/* <Text as="label" fontWeight="semibold"> */}
                               <Text fontSize={["10px", "10px", "20px","30px"]}>Low to High</Text> 
                                {/* </Text> */}
                            </Radio>
                            <Radio borderColor="blue.500" onChange={handleSortPrice} name="order" value="desc" size="lg">
                                {/* <Text as="label" fontWeight="semibold"> */}
                               <Text fontSize={["10px", "10px", "20px","30px"]}> High to Low</Text>
                                {/* </Text> */}
                            </Radio>
                        </VStack>
                    </RadioGroup>
                </Box>
            </Box>
        </>
    );
};
