import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { postDataAPI } from '../../AllAPIFect';
import "./addProduct.css";

const initialData = {
  id: "",
  name: "",
  imglink: "",
  MRP: "",
  MRPx: "",
  brand: "",
  dealprice: "",
  dealpricex: "",
  discount: "",
  discountx: "",
  saveprice: "",
  savepricex: "",
  cashback: "",
  img1: "",
  img2: "",
  img3: "",
}

const AddProduct = () => {
  const [productInfo, setProductInfo] = useState(initialData)
  const {product} = useParams()

  const handelInputChange = (e) =>{
    const {name, value} = e.target
    setProductInfo({...productInfo, [name] : value})
  }


  const handleSubmit =  (e) =>{
    e.preventDefault();
    postDataAPI(product, productInfo)
    console.log(productInfo)
    setProductInfo(initialData)

  }
  return (
    <div className='main-div'>
      <h1 ><u>ADD PRODUCT</u></h1>
      <form onSubmit={handleSubmit}>
        <div className='one-div'>
          <input onChange={handelInputChange} value={productInfo.id} type="text" placeholder='PRODUCT ID' name="id" id="" /><br />
        </div>
        <div className='one-div'>
          <input onChange={handelInputChange} value={productInfo.name} type="text" placeholder='NAME' name="name" id="" /><br />
        </div>
        <div className='one-div'>
          <input onChange={handelInputChange} value={productInfo.imglink} type="text" placeholder='PRODUCT IMAGE' name="imglink" id="" /><br />
        </div>
        <div className='one-div'>
          <input onChange={handelInputChange}value={productInfo.brand} type="text" placeholder='BRAND' name="brand" id="" /><br />
        </div>
        <div className='three-div'>
          <input onChange={handelInputChange} value={productInfo.MRP} type="text" placeholder='MRP' name="MRP" id="" /><br />
          <input onChange={handelInputChange} value={productInfo.MRPx} type="text" placeholder='MRP-X' name="MRPx" id="" /><br />
        </div>
        <div className='three-div'>
          <input onChange={handelInputChange} value={productInfo.dealprice} type="text" placeholder='DEAL PRICE' name="dealprice" id="" /><br />
          <input onChange={handelInputChange} value={productInfo.dealpricex} type="text" placeholder='DEAL PRICE-X' name="dealpricex" id="" /><br />
        </div>
        <div className='three-div'>
          <input onChange={handelInputChange} value={productInfo.discount} type="text" placeholder='DISCOUNT' name="discount" id="" /><br />
          <input onChange={handelInputChange} value={productInfo.discountx} type="text" placeholder='DISCOUNT-X' name="discountx" id="" /><br />
        </div>
        <div className='three-div'>
          <input onChange={handelInputChange} value={productInfo.saveprice} type="text" placeholder='SAVE PRICE' name="saveprice" id="" /><br />
          <input onChange={handelInputChange} value={productInfo.savepricex} type="text" placeholder='SAVE PRICE-X' name="savepricex" id="" /><br />
        </div >
        <div className='one-div'>
          <input onChange={handelInputChange} value={productInfo.cashback} type="text" placeholder='CASHBACK' name="cashback" id="" /><br />
        </div>
        <div className='one-div'>
          <input onChange={handelInputChange} value={productInfo.img1} type="text" placeholder='IMAGE-1' name="img1" id="" /><br />
        </div>
        <div className='one-div'>
          <input onChange={handelInputChange} value={productInfo.img2} type="text" placeholder='IMAGE-2' name="img2" id="" /><br />
        </div>
        <div className='one-div'> 
          <input onChange={handelInputChange} value={productInfo.img3} type="text" placeholder='IMAGE-3' name="img3" id="" />
        </div><br /><br />
        <button  style={{background: "black", color:"White", fontWeight:"bolder"}} className='button' ><Link to={`/${product}`}> ADD</Link></button>
      </form>
    </div>
  )
}

export default AddProduct