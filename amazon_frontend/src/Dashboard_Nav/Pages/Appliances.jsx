import { Box, Card, Flex, Grid, Text, Button, Sidebar } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { ProductsCard } from "../../Components/ProductsCard";
import { SIdebar } from "../../Components/SIdebar";
import { getBrands, getProduct } from "../../Redux/AppReducer/action";

function Appliancaes() {
    const [showSidebar, setShowSidebar] = useState(false)
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const [urlBrands, setUrlBrands] = useState([]);
    const dispatch = useDispatch();
    const data = useSelector((store) => {
        return store.productReducer.products;
    });
    const loading = useSelector(store => store.productReducer.isLoading);
    const error = useSelector(store => store.productReducer.isError);

    const paramsObj = {
        params: {
            brand: searchParams.getAll("brand"),
            _sort: searchParams.get("order") && "MRP",
            _order: searchParams.get("order")
        }
    }


    console.log("urlBrands is", urlBrands);
    useEffect(() => {
        dispatch(getProduct("appliance", paramsObj));
        getBrands("appliance", setUrlBrands);
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
    return (
        <>
            <Flex >
                <SIdebar width="10%" data={urlBrands} />
                <Box
                    // border={"2px solid green"}
                    // ml={"50px"}
                    width={"90%"}
                    boxShadow="lg"
                >
                    <Grid gap={"10px"} m={"auto"} templateColumns={["repeat(1,1fr)", "repeat(1,1fr)", "repeat(2,1fr)", "repeat(4, 1fr)"]}>
                        {data &&
                            data.map((el) => {
                                return (
                                    <Card
                                        mt={"26px"}
                                        _hover={{
                                            boxShadow: "2xl",
                                        }}
                                        key={el.id}
                                        marginLeft={"40px"}
                                    >
                                        <ProductsCard
                                            id={el._id}
                                            image={el.imglink}
                                            name={el.name}
                                            price={el.MRP}
                                            brand={el.brand}
                                            category="appliance"
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
export default Appliancaes;
