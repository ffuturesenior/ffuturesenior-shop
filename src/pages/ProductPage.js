import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Comments from "../Components/productPage/Comments";
import { deletePostReq, getOnePostReq } from "../servFunctions/productRequest";
import { createRequestToBuyReq } from "../servFunctions/requestToBuyReuest";
import { ToastContainer, toast } from 'react-toastify';
import { addToBasketReq, checkBasketPostReq, deletefromBasketReq, deleteFromBasketReq } from "../servFunctions/basketPostReq";
import { deleteIncomeByProductByProductIdReq } from "../servFunctions/incomeByProductReq";
import { deleteCommentsByPostIdReq } from "../servFunctions/commentsReq";





export const notifySucces=()=>{
    toast.success('🦄 request sended!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export const notifyError=()=>{
    toast.error('🦄 error', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}



const ProductPage=()=>{
    const [isLoading,setIsLoading]=useState(false)
    const [isError,setIsError]=useState(false)
    const {id,userId}=useParams()
    const [productData,setProductData]=useState({})
    const formData=new FormData()
    const [inBasket,setInBasket]=useState(false)
    const router=useHistory()
    useEffect(()=>{
        getOnePostReq(id,setProductData,setIsLoading,setIsError)
        checkBasketPostReq(userId,id,setInBasket)
    },[])

    const buy=(e)=>{
        e.preventDefault()
        if(localStorage.getItem('userID')==false){
            notifyError()
        }else{
            formData.append('productId',id)
            formData.append('userId',localStorage.getItem('userID'))
            formData.append('price',productData.price)
            formData.append('count',1)
            formData.append('sellerId',userId)
            createRequestToBuyReq(formData)
            formData.delete('productId')
            formData.delete('userId')
            formData.delete('price')
            formData.delete('count')
            formData.delete('sellerId')
        }
        
    }

    const addToBasket=()=>{
        formData.append('userId',localStorage.getItem('userID'))
        formData.append('productId',id)
        addToBasketReq(formData,setInBasket)
        formData.delete('userId')
        formData.delete('productId')
    }

    const deleteFromBasket=()=>{
        deleteFromBasketReq(id,localStorage.getItem('userID'),setInBasket)
    }

    const deletePost=()=>{
        deletePostReq(id)
        deleteIncomeByProductByProductIdReq(id)
        deleteCommentsByPostIdReq(id)
        deletefromBasketReq(userId,id)
        router.push('/')

    }

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
                    <div style={{padding:'0px 10%'}}>
                        <div>
                            <h5 className="text-center">{productData.name}</h5>
                            <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:"200px",background:'gray',borderRadius:'5px'}}>image</div>
                            <div class="text-muted">
                                caption place holder
                            </div>
                            <div class='d-flex justify-content-between'>
                                <div>
                                    <button onClick={buy} class="btn btn-primary">{productData.price}$</button>
                                    {inBasket?
                                        <button onClick={deleteFromBasket} type="button" class="btn btn-danger">delete from basket</button>
                                    :
                                        <button onClick={addToBasket} type="button" class="btn btn-warning">ToBasket</button>
                                    }
                                </div>
                                <div>
                                    {localStorage.getItem('userID')==userId?
                                       <div><button onClick={deletePost} type="button" class="btn btn-danger">delete product</button><Link to={`/ProductInfo/${id}`}>productStat</Link></div> 
                                    :
                                        <></>
                                    }
                                </div>
                            </div>
                            <Comments productId={id}/>
                        </div>
                        
                    </div>
                    </>
                }
            </>
        }
            <ToastContainer/>
        </>
        
    )
}

export default ProductPage