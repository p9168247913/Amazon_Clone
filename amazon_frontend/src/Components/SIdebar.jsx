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
    }, [data, urlBrands, order]);
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
                            <Flex key={Math.random()} mb="1rem" alignItems="flex-start">
                                <Checkbox onChange={handleChange} isChecked={urlBrands.includes(e)} value={e} size={"lg"} marginLeft="20px" borderColor="blue.500">
                                    {e}
                                </Checkbox>
                            </Flex>
                        );
                    })}

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
                    <RadioGroup defaultValue={order}>
                        <VStack spacing="24px">
                            <Radio borderColor="blue.500" onChange={handleSortPrice} name="order" value="asc" size="lg">
                                {/* <Text as="label" fontWeight="semibold"> */}
                                Low to High
                                {/* </Text> */}
                            </Radio>
                            <Radio borderColor="blue.500" onChange={handleSortPrice} name="order" value="desc" size="lg">
                                {/* <Text as="label" fontWeight="semibold"> */}
                                High to Low
                                {/* </Text> */}
                            </Radio>
                        </VStack>
                    </RadioGroup>
                </Box>
            </Box>
        </>
    );
};
