import React, { useEffect, useState } from "react";
import BasketCardItem from "../Components/basket/BasketCardItem";
import CardItem from "../Components/CardItem";
import { getByUserIdBasketPostsReq } from "../servFunctions/basketPostReq";

const BascketPage=()=>{
    const [isLoading,setIsLoading]=useState(true)
    const [isError,setIsError]=useState(false)
    const [basketPosts,setBasketPosts]=useState([])

    useEffect(()=>{
        getByUserIdBasketPostsReq(localStorage.getItem('userID'),setBasketPosts,setIsLoading,setIsError)
    },[])

    return(
        <div>
            {isLoading?
                <></>
            :
                <>
                    {isError?
                        <></>
                    :
                        <>
                        <div style={{margin:"0px auto"}}>
                            <div style={{display:'grid',gridTemplateColumns:"repeat(auto-fit,286px)",gridTemplateRows:"repeat(auto-fit,auto)"}}>
                                {basketPosts.map((p)=>
                                    <BasketCardItem postId={p.productId}/>
                                )}
                            </div>
                        </div>            
                        
                        </>
                    }
                </>
            }
            
        </div>
    )
}

export default BascketPage