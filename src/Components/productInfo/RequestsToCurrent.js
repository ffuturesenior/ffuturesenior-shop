import React, { useEffect, useState } from 'react'
import Avatar from '../ReUsable/Avatar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { approveRequestToBuyReq, getRequestsToBuyByProductIdReq } from '../../servFunctions/requestToBuyReuest';
import { createIncomeByProductReq } from '../../servFunctions/incomeByProductReq';
import { createIncomeByDayReq } from '../../servFunctions/incomeByDayRequests';
import RequestIcon from '../userStatsComps/requestIcon';

export  const notify=()=>{
    toast.success('🦄 Approved!', {
        position: "bottom-right",
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
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

const RequsestsToCurrent=({productId})=>{

    const [requests,setRequests]=useState([
        {id:'1',productName:'a51',cost:"300",BuyerName:"ivan",count:'1'},
        {id:"2",productName:'a51',cost:"300",BuyerName:"petya",count:'1'},
        {id:"3",productName:'a51',cost:"300",BuyerName:"kolya",count:'1'},
        {id:'4',productName:'a51',cost:"300",BuyerName:"ptn pnh",count:'1'}
        
    ])
    const formData=new FormData()
    const [isLoading,setIsLoading]=useState(true)
    const [isError,setIsError]=useState(false)
    const date=new Date()
    useEffect(()=>{
        getRequestsToBuyByProductIdReq(productId,setRequests,setIsLoading,setIsError)
    },[])


    const notify=()=>{
        toast.success('🦄 Approved!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

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
            setRequests(requests.filter(p=>{
                if(id!=p._id) return p
            })) 
            approveRequestToBuyReq(id)
        }
        
    }

    return(
        <>
        {isLoading?
            <>l</>        
        :
            <>
                {isError?
                    <>err</>
                :
                    <div style={{height:'200px',overflowY:"auto"}}>
                    {requests.map(p=>
                        <RequestIcon key={p._id} p={p} Aprove={Aprove}/>
                    )}
                    <ToastContainer/>
                    </div>
                }
            </>
        }
        
        </>
        
    )
}

export default RequsestsToCurrent