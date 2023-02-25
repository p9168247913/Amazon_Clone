import { Checkbox, Select, Text } from "@chakra-ui/react";
import { useState } from "react";
import "./SingleCartItem.css"

export const SingleCartItem = ({ data, setCartTotal, current, handleDelete, index }) => {
    const [prevQuantity, setPrevQuantity] = useState(1);
    const [check, setCheck] = useState(false);
    const [itemTotal, setItemTotal] = useState(data.MRP);
    const quantityChange = (e) => {
        // quantity operation
        if (check === true) {
            setCheck(false);
            let cartData = { ...current };
            cartData.count--;
            cartData.total = cartData.total - (prevQuantity * data.MRP);
            setCartTotal(cartData);
        }
        let newData = 0;
        newData = data.MRP * (+e.target.value);
        setItemTotal(newData);
        setPrevQuantity(e.target.value);
    }
    const handleChange = (e) => {
        const newData = { ...current };
        if (e.target.checked) {
            // addition
            setCheck(true);
            newData.count++;
            newData.total = +newData.total + itemTotal;
        } else {
            // subtraction
            setCheck(false);
            newData.count--;
            newData.total = +newData.total - itemTotal;
        }
        setCartTotal(newData);
    }
    return (
        <div className="singleCartItem">
            <Checkbox isChecked={check} value={data.MRP} onChange={(e) => {
                handleChange(e);
            }}></Checkbox>
            <img src={data.imglink} alt={data.imglink} />
            <div>
                <Text fontSize={"xl"}>{data.name}</Text>
                <Text color={"green"} fontSize={"s"} >In stock</Text>
                <img src="https://i.ibb.co/J5fqdc4/untitled-1-282.png" alt="https://i.ibb.co/J5fqdc4/untitled-1-282.png" />
                <div>
                    <Select variant="filled" size={"sm"} onChange={(e) => quantityChange(e)}>
                        <option value={1}>Qty: 1</option>
                        <option value={2}>Qty: 2</option>
                        <option value={3}>Qty: 3</option>
                        <option value={4}>Qty: 4</option>
                        <option value={5}>Qty: 5</option>
                    </Select>
                    <p>|</p>
                    <Text className="delsave" onClick={()=>handleDelete(index)} color={"teal"}>Delete</Text>
                    <p>|</p>
                    <Text className="delsave" color={"teal"} >Save for later</Text>
                </div>
            </div>
            <Text align={"right"} as={"b"}>{data.MRPx}</Text>
        </div>
    )
}