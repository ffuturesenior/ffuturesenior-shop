import React, { useEffect, useState } from "react";
import { getOneUserReq } from "../../servFunctions/userRequests";
import Avatar from "../ReUsable/Avatar";


const Comment=({userId,text})=>{

    const [userData,setUserData]=useState()
    const [isLoading,setIsLoading]=useState(true)
    const [isError,setIsError]=useState(false)


    useEffect(()=>{
        getOneUserReq(userId,setUserData,setIsLoading,setIsError)
    },[])

    return(
        <>
        {isLoading?
            <></>
        :
            <>
                {isError?
                    <>err</>
                :
                    <>
                        <div className='d-flex justify-content-between bg-secondary' style={{alignItems:'center',height:'80px',padding:'10px',margin:'5px 0px',borderRadius:'10px'}}>
                            <div className='d-flex'>
                                <div style={{alignItems:'center'}}><Avatar/>{userData.firstname}</div>
                                <p style={{wordBreak:' break-all'}}>{text}</p>
                            </div>
                        </div>
                    </>
                }
            </>
        }


         
        </>
    )
}

export default Comment