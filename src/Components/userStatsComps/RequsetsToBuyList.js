import React, { useEffect, useState } from 'react'
import Avatar from '../ReUsable/Avatar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { approveRequestToBuyReq, getRequestsToBuyByUserIdReq } from '../../servFunctions/requestToBuyReuest';
import RequestIcon from './requestIcon';
import { createIncomeByDayReq } from '../../servFunctions/incomeByDayRequests';
import { createIncomeByProductReq } from '../../servFunctions/incomeByProductReq';

export  const notify=()=>{
    toast.success('🦄 Approved!', {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}


export  const notifyError=()=>{
    toast.error('🦄 error!', {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

const RequestsToBuyList=()=>{
    const formData=new FormData()
    const [requests,setRequests]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    const [isErr,setIsErr]=useState(false)
    const date=new Date()
    useEffect(()=>{
        getRequestsToBuyByUserIdReq(localStorage.getItem('userID'),setRequests,setIsLoading,setIsErr)
    },[])


    const Aprove=(id,price,productId)=>{
        if(localStorage.getItem('userID')==false){
            notifyError()
        }else{
        formData.append('income',price)
        formData.append('date',`${date.getDate()}/${date.getMonth()+1}`)
        formData.append('productId',productId)
        formData.append('userId',localStorage.getItem('userID'))
        createIncomeByDayReq(formData)
        formData.delete('userId')
        createIncomeByProductReq(formData)
        formData.delete('income')
        formData.delete('date')
        formData.delete('productId')
        setRequests(requests.filter(p=>{
            if(id!=p._id) return p
        })) 
            approveRequestToBuyReq(id)
        }
        
    }

    return(
        <>
        {isLoading?
            <></>
        :
            <>
                {isErr?
                    <></>
                :
                    <div style={{height:'200px',overflowY:"auto"}}>
                    {requests.map(p=>
                        <RequestIcon p={p} Aprove={Aprove}/>
                    )}
                    <ToastContainer/>
                    </div>
                }
            </>
        }
       
        </>
        
    )
}

export default RequestsToBuyList