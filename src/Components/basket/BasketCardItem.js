import React, { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { getByUserIdBasketPostsReq } from "../../servFunctions/basketPostReq";
import { getOnePostReq } from "../../servFunctions/productRequest";

const BasketCardItem=({postId})=>{
    const isAuth=useSelector(state=>state.user.isAuth)
    const router=useHistory()
    const [props,setProps]=useState({
        brand: "Samsung",
        name: "a51",
        price: "400",
        textarea: "buy pls",
        type: "Phone",
        userId: "63023ab81105edef5787b258",
        __v: 0,
        __id: "6304e8bfac6b88ba128dc6a1",
    })
    const [isLoading,setIsLoading]=useState(true)
    const [isError,setIsError]=useState(false)


    useEffect(()=>{
        setIsLoading(true)
        getOnePostReq(postId,setProps,setIsLoading,setIsError)
    },[])

    return(
        <>
        {isLoading?
            <></>
        :
            <>
                {isError?
                <>
                err
                </>
                :
                <>
                    <div style={{width:"18rem",overflow:'hidden'}}>
                        <div class="card" style={{width: "18rem",overflow:'hidden'}}>
                            <div style={{height:"150px",background:'gray'}} ></div>
                            <div class="card-body">
                                <h5 class="card-title">{props.name}</h5>
                                <h6>brand:{props.brand}</h6>
                                <h6>type:{props.type}</h6>
                                <p class="text-muted">{props.textarea}</p>
                                {isAuth?
                                    <button onClick={()=>router.push(`/ProductPage/${props._id}&${props.userId}`)} class="btn btn-primary">{props.price}</button>
                                :
                                    <button  class="btn btn-primary">{props.price}</button>
                                }
                            </div>
                        </div>
                    </div>
                </>
                }
            </>
        }
            
        </>
        
    )
}

export default BasketCardItem