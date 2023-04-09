import { Box, Card, Flex, Grid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { getBrands, getProduct } from "../../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { SIdebar } from "../../Components/SIdebar";
import { ProductsCard } from "../../Components/ProductsCard";
import { useLocation, useSearchParams } from "react-router-dom";

function Laptop() {
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const [urlBrands, setUrlBrands] = useState([]);
    const dispatch = useDispatch();
    const data = useSelector((store) => {
        return store.productReducer.products;
    });
    const loading = useSelector(store => store.productReducer.isLoading);
    const error = useSelector(store => store.productReducer.isError);

    const sort = localStorage.getItem("sort") || null
    // function sort() {

    // }

    // function setData(order) {
    //     // if(filtering.length ===0 ){
    //     const sorted = [...ringData].sort((a, b) => {
    //         if (order === "ascending") {
    //             console.log("hello asc");
    //             return a.MRP - b.MRP;
    //         } else {
    //             console.log("hello desc");
    //             return b.MRP - a.MRP;
    //         }
    //     });
    //     setRing(sorted);
    //     setSortOrder(order);
    // }

    const paramsObj = {
        params: {
            brand: searchParams.getAll("brand"),
            _sort: searchParams.get("order") && "MRP",
            _order: searchParams.get("order")
        }
    }
    useEffect(() => {
        dispatch(getProduct("laptop", paramsObj));
        getBrands("laptop", setUrlBrands);
    }, [location.search]);
    if (loading) {
        return (
            <div style={{ textAlign: "center", margin: "300px" }}>
                <img style={{ margin: "auto" }} width={"100px"} src="https://i.ibb.co/3mVT24P/137894-loading.gif" alt="https://i.ibb.co/3mVT24P/137894-loading.gif" />
                <Text fontSize={"4xl"}>Loading Products.....</Text>
            </div>
        )
    }
    if (error) {
        return (
            <div style={{ textAlign: "center", margin: "300px", marginTop: "100px" }}>
                <img style={{ margin: "auto" }} width={"400px"} src="https://i.ibb.co/L6pZv8q/106720-404-page.gif" alt="https://i.ibb.co/L6pZv8q/106720-404-page.gif" />
                <Text fontSize={"4xl"}>Something went wrong!</Text>
            </div>
        )
    }
    console.log("urlBrands is", urlBrands);
    return (
        <>
            <Flex marginTop={"40px"}>
                <SIdebar data={urlBrands} />

                <Box
                    // border={"2px solid green"}
                    ml={"50px"}
                    width={"75%"}
                    boxShadow="lg"
                >
                    <Grid gap={"20px"} m={"auto"} templateColumns="repeat(4, 1fr)">
                        {data &&
                            data.map((el) => {
                                return (
                                    <Card
                                        mt={"26px"}
                                        _hover={{
                                            boxShadow: "2xl",
                                        }}
                                        key={el}
                                        marginLeft={"40px"}
                                    >
                                        <ProductsCard
                                            id={el._id}
                                            image={el.imglink}
                                            name={el.name}
                                            price={el.MRP}
                                            brand={el.brand}
                                            category="laptop"
                                        />
                                    </Card>
                                );
                            })}
                    </Grid>
                </Box>
            </Flex>
        </>
    );
}
export default Laptop;
