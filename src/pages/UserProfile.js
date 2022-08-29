import React, { useEffect, useState } from "react";
import Avatar from "../Components/ReUsable/Avatar";
import CardItem from "../Components/CardItem";
import { Link, useParams } from "react-router-dom";
import { getOneUserReq } from "../servFunctions/userRequests";
import { useDispatch, useSelector } from "react-redux";
import { setIsError, setIsLoading } from "../redux/reducers/componentReducer";
import { getPostsByUserIdReq } from "../servFunctions/productRequest";
const UserProfile=()=>{
    const {id}=useParams()
    const [userData,setUserData]=useState({})
    const dispatch=useDispatch()
    const [isLoading,setIsLoading]=useState(true)
    const [isError,setIsError]=useState(false)
    useEffect(()=>{
        getOneUserReq(id,setUserData,setIsLoading,setIsError)
        getPostsByUserIdReq(id,setItems,setIsLoading,setIsError)
    },[])

    const [items,setItems]=useState([])
    return(
        <div style={{padding:'0px 20px'}} className="d-flex flex-column">
            {isLoading?
                <div class="spinner-border m-5" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            :   
                <>
                    {isError?
                    <div class="alert alert-danger" role="alert">
                        error
                    </div>
                    :
                        <>
                        <div>
                            <div className="text-center"><h5>{userData.firstname} {userData.lastname}</h5></div>
                            <div className="d-flex justify-content-between align-items-center">
                                <Avatar isBig={true}/>
                                <Link to='/BasketPage'>basket</Link>
                            </div>
                            
                            <div class="text-muted">
                                {userData.caption}
                            </div>
                        </div>
                        <div style={{margin:"0px auto"}}>
                            <div style={{display:'grid',gridTemplateColumns:"repeat(auto-fit,286px)",gridTemplateRows:"repeat(auto-fit,auto)"}}>
                                {items.map(p=>
                                    <CardItem props={p}/>   
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

export default UserProfile