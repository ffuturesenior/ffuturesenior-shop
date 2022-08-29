import axios from 'axios'
import {notifySucces,notifyError} from '../pages/ProductPage'

const url='https://shopserver-db-sync.herokuapp.com/aboba'



/*
    const Request=new mongoose.Schema({
        productId:{type:String,required:true},
        userId:{type:String,required:true},
        sellerId:type:String,required:true},
        price:{type:String,required:true},
        count:{type:String,required:true},
    })
*/

export async function createRequestToBuyReq(requestToBuyData){
    try{
        const res= await axios.post(`${url}/requests/`,requestToBuyData)
        notifySucces()
    }catch(e){
        notifyError()
    }
}

export async function getRequestsToBuyByUserIdReq(userID,setFunc,setIsLoading,setIsErr){
    try{
        setIsLoading(true)
        const res= await axios.get(`${url}/requests/byUserId/${userID}`)
        setFunc(res.data)
        setIsLoading(false)
    }catch(e){
        setIsErr(true)
        //notifyError()
    }
}

export async function approveRequestToBuyReq(id){
    try{
        const res2= await axios.delete(`${url}/requests/${id}`)
        //notifySucces()
    }catch(e){
        notifyError()
    }
}


export async function getRequestsToBuyByProductIdReq(productID,setFunc,setIsLoading,setIsErr){
    try{
        setIsLoading(true)
        const res= await axios.get(`${url}/requests/byProductId/${productID}`)
        setFunc(res.data)
        setIsLoading(false)
    }catch(e){
        setIsErr(true)
        //notifyError()
    }
}
