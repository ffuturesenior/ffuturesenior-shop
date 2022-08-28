import axios from 'axios'
import {notifySucces,notifyError} from '../pages/AddProduct'

const url='http://localhost:5000/aboba'



/*const BasketPost=new mongoose.Schema({
    userId:{type:String,required:true},
    productId:{type:String,required:true},
    
})*/


export async function addToBasketReq(BasketPostData,setInBasket){
    try{
        const res= await axios.post(`${url}/BasketPost/`,BasketPostData)
        notifySucces()
        setInBasket(true)
    }catch(e){
        notifyError()
        setInBasket(false)
        alert(e.response.data.message)
    }
}


export async function checkBasketPostReq(userId,productId,setFunc){
    try{
        const res= await axios.get(`${url}/BasketPost/checkPost/${userId}&${productId}`)
        setFunc(res.data)
       // notifySucces()
    }catch(e){
        //notifyError()
        alert(e.response.data.message)
    }
}

export async function deleteFromBasketReq(productId,setInBasket){
    try{
        const res= await axios.delete(`${url}/BasketPost/${productId}`)
        setInBasket(false)
        //notifySucces()
    }catch(e){
        //notifyError()
        setInBasket(true)
        alert(e.response.data.message)
    }
}

export async function getByUserIdBasketPostsReq(userId,setFunc,setIsLoading,setIsError){
    try{
        setIsLoading(true)
        const res= await axios.get(`${url}/BasketPost/getByUserId/${userId}`)
        setFunc(res.data)
        setIsLoading(false)
        //notifySucces()
    }catch(e){
        //notifyError()
        setIsError(true)
        alert(e.response.data.message)
    }
}



export async function deletefromBasketReq(userId,productId){
    try{
        const res= await axios.delete(`${url}/BasketPost/deleteBasketPost/${userId}&${productId}`)
    }catch(e){
        alert(e.response.data.message)
    }
}