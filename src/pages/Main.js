import React, { useEffect, useState } from "react";
import CardItem from "../Components/CardItem";
import SideBar from "../Components/SideBar";
import { getAllPostsReq } from "../servFunctions/productRequest";

const Main=()=>{
    const [items,setItems]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    const [isError,setIsError]=useState(false)
    useEffect(()=>{
        getAllPostsReq(setItems,setIsLoading,setIsError)
    },[])

    return(
        <>
            {isLoading?
                <>
                    <div class="spinner-border m-5" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </>
            :
                <>
                    {isError?
                        <>
                            <div class="alert alert-danger" role="alert">
                                error
                            </div>
                        </>
                    :
                        <>
                            <div style={{height:"100%",display:'grid',gridTemplateColumns:"20% 1fr",gridTemplateRows:"100%"}} >
                                <div  style={{backgroundColor:'#222d32'}}>
                                    <SideBar items={items} setItems={setItems} setIsLoading={setIsLoading} setIsError={setIsError}/>
                                </div>
                                <div style={{height:'692px',overflowY:'auto'}}>
                                    <div style={{display:'grid',gridTemplateColumns:"repeat(auto-fit,286px)",gridTemplateRows:"repeat(auto-fit,auto)"}}>
                                        {items.map(p=>
                                            <CardItem props={p}/>   
                                        )} 
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

export default Main