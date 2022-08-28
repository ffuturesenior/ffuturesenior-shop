import React, { useState } from "react";
import ProductSellStat from "../Components/productInfo/ProductSellStat";
import RequsestsToCurrent from '../Components/productInfo/RequestsToCurrent'
import {useParams} from 'react-router-dom'

const ProductInfo=()=>{
    const {id}=useParams()

    


    return(
        <div>
            <div style={{padding:'20px'}}>
                <div>
                    <ProductSellStat productId={id}/>
                </div>  
                <div>
                    <RequsestsToCurrent productId={id}/>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo