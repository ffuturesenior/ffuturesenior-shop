import React, { useEffect, useState } from "react";
import { getOnePostReq } from "../../servFunctions/productRequest";
import Avatar from "../ReUsable/Avatar";


const RequestIcon=({Aprove,p})=>{

    const [productData,setProductData]=useState({})
    const [isLoading,setIsLoading]=useState(false)
    const [isError,setIsError]=useState(false)
    useEffect(()=>{
        getOnePostReq(p.productId,setProductData,setIsLoading,setIsError)
    },[])


    return(
        <>
            {isLoading?
                <></>
            :
                <>
                    {isError?
                        <></>
                    :
                        <>
                        <div className='d-flex justify-content-between bg-secondary' style={{alignItems:'center',height:'60px',padding:'10px',margin:'5px 0px',borderRadius:'10px'}}>
                            <div style={{alignItems:'center'}} className='d-flex justify-content-between'><Avatar/>{p.BuyerName}</div>
                            <div>{productData.name} for {p.price}$.Count:x{p.count}</div>
                            <button onClick={()=>Aprove(p._id,p.price,p.productId)} type="button" class="btn btn-success">Approve</button>
                        </div> 
                        </>
                    }
                </>
            }
            
        </>
       
    )
}

export default  RequestIcon