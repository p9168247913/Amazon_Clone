import { useState,useEffect } from "react";
import axios from "axios";
import { SingleCartItem } from "../../Components/SingleCartItem";
import "./cart&product.css"

export const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    // useEffect(()=>{
    //     axios.get("https://atmazon.onrender.com/soundbar").then((res)=>{
    //         setCartItems(res.data);
    //     })
    // },[])
    const isAuth = true;
    const unAuth = () => {
        return (
            <div id="unAuth">
                <div>
                    <img src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" alt="No img found" />
                    <div>
                        <h2>Your Amazon Cart is empty</h2>
                        <p>Shop today's deals</p>
                        <div>
                            <button><p>Sign in to your account</p></button>
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
                        <button><b>Sign in</b></button>
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
                        <p>Check your Saved for later items or <span>continue shopping</span>.</p>
                    </div>
                    :
                    <div id="itemsInCart">
                        {cartItems.map(e=>{
                            return (
                                <SingleCartItem data={e} key={e._id} />
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
    return (
        <div id="cart">
            <h1>Cart</h1>
            {isAuth ? Auth() : unAuth()}
        </div>
    )
}