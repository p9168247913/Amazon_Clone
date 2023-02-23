import { Box, Card, Flex, Grid } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductsCard } from "../../Components/ProductsCard";
import { SIdebar } from "../../Components/SIdebar";
import { getProduct } from "../../Redux/AppReducer/action";

function Television() {
  //   const [data, setData] = useState([]);

  // console.log(data);
  // const getData = () => {
  //   return fetch(`https://atmazon.onrender.com/telivision`).then((res) =>
  //     res.json()
  //   );
  // };

  // useEffect(() => {
  //   getData().then((res) => setData(res));
  // }, []);

  const dispatch = useDispatch();

  const data = useSelector((store) => {
    return store.productReducer.products;
  });

  useEffect(() => {
    dispatch(getProduct("telivision"));
  }, []);

  return (
    <>
      <Flex marginTop={"40px"}>
        <SIdebar />

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
                    key={el.id}
                    marginLeft={"40px"}
                  >
                    <ProductsCard
                      id={el.id}
                      image={el.imglink}
                      name={el.name}
                      price={el.MRP}
                      brand={el.brand}
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
export default Television;
