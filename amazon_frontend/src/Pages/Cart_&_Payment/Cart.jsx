import { useState } from "react";
import { SingleCartItem } from "../../Components/SingleCartItem";
import "./cart&product.css"
import { Box, Button, Checkbox, Collapse, Text, useDisclosure } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../../Redux/AppReducer/action";

export const Cart = () => {
    const navigate = useNavigate();
    const [cartTotal, setCartTotal] = useState({ count: 0, total: 0 });
    const cartItems = useSelector(store => store.productReducer.cart);
    const dispatch = useDispatch();
    const { isOpen, onToggle } = useDisclosure()
    const handlePurchasing = (amount) => {
        navigate(`/pay?cost=${amount}`);
    }
    const isAuth = useSelector(store => store.authReducer.isAuth);
    const handleDelete = (index) => {
        let items = [...cartItems];
        items.splice(index, 1);
        dispatch(deleteCart(items));
    }
    const unAuth = () => {
        return (
            <div id="unAuth">
                <div>
                    <img src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" alt="No img found" />
                    <div>
                        <h2>Your Amazon Cart is empty</h2>
                        <p>Shop today's deals</p>
                        <div>
                            <Link to="/login"><button><p>Sign in to your account</p></button></Link>
                            <button><p>Sign up now</p></button>
                        </div>
                    </div>
                </div>
                <div></div>
                <p className="commonPara">
                    The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.<br />
                    Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.
                </p>
                <div>
                    <div>
                        <p>See personalized recommendations</p>
                        <Link to="/login"><button><b>Sign in</b></button></Link>
                        <p>New customer? <span>Start here</span></p>
                    </div>
                </div>
            </div>
        )
    }
    const Auth = () => {
        return (
            <div id="auth">
                {
                    cartItems.length === 0 ?
                        <div id="emptyCart">
                            <p>Your Amazon Cart is empty.</p>
                            <p>Check your Saved for later items or <Link to={"/"}>continue shopping</Link>.</p>
                        </div>
                        :
                        <div id="itemsInCart">
                            <div>
                                <Text fontSize={"3xl"}>Shopping Cart</Text>
                                <div>
                                    <div>
                                        <Text>No items selected.</Text>
                                        <Text color={"#0d788b"} onClick={() => { console.log("Selecting all items") }}>Select all items</Text>
                                    </div>
                                    <Text>Price</Text>
                                </div>
                                {cartItems.map(e => {
                                    if (e.MRP) {
                                        return (
                                            <SingleCartItem handleDelete={handleDelete} index={cartItems.indexOf(e)} current={cartTotal} setCartTotal={setCartTotal} data={e} key={e._id} />
                                        )
                                    }
                                })}
                                <div>
                                    {cartTotal.count > 0 ? <Text align={"right"} fontSize={"xl"}>Subtotal ({cartTotal.count} items): {cartTotal.total}</Text> :
                                        <Text align={"right"} fontSize={"xl"}>No items selected</Text>}
                                </div>
                            </div>
                            <div>
                                {cartTotal.count > 0 ?
                                    <>
                                        <Text fontSize={"xl"}>Subtotal ({cartTotal.count} items): {cartTotal.total}</Text>
                                        <Checkbox>This order contains a gift</Checkbox>
                                    </>
                                    :
                                    <Text fontSize={"xl"}>No items selected</Text>}
                                <Button onClick={cartTotal.count > 0 ? () => handlePurchasing(cartTotal.total) : () => onToggle()} width={"100%"} colorScheme={"yellow"} background={"#fdd407"}>Proceed to Buy</Button>
                                <Collapse in={isOpen} animateOpacity>
                                    <Box
                                        padding="10px"
                                        textAlign="center"
                                        color='white'
                                        mt='4'
                                        bg='red'
                                        rounded='md'
                                        shadow='md'
                                    >
                                        <Text fontWeight="medium">Please select at least 1 item</Text>
                                    </Box>
                                </Collapse>
                            </div>
                        </div>
                }
            </div>
        )
    }
    return (
        <div id="cart">
            {isAuth ? Auth() : unAuth()}
        </div>
    )
}