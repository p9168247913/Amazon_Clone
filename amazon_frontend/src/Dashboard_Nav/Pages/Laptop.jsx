import { Box, Card, Flex, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { getProduct } from "../../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { SIdebar } from "../../Components/SIdebar";
import { ProductsCard } from "../../Components/ProductsCard";

function Laptop() {
  const dispatch = useDispatch();

  const data = useSelector((store) => {
    return store.productReducer.products;
  });

  useEffect(() => {
    dispatch(getProduct("laptop"));
  }, []);

  return (
    // <div>
    //   <div className="sort_btns">
    //     <button>Sort by Low To High</button>
    //     <button>Sort by Low To High</button>
    //   </div>
    //   <div className="app_product">
    //     {data &&
    //       data.map((e) => {
    //         return (
    //           <div key={e._id}>
    //             <img src={e.imglink} alt={e.name} />
    //             <h4>{e.name}</h4>
    //             <h4>{e.brand}</h4>
    //             <h4>{`₹${e.MRP}`}</h4>
    //             <button className="buy">Buy Now</button>
    //           </div>
    //         );
    //       })}
    //   </div>
    //   ;
    // </div>
    <>
      <Flex marginTop={"40px"}>
        <SIdebar data={data} />

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
export default Laptop;
