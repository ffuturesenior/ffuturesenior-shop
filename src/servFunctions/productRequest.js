import axios from 'axios'
import {notifySucces} from '../pages/AddProduct'

const url='http://localhost:5000/aboba'


/*    
    const Product=new mongoose.Schema({
        name:{type:String,required:true},
        brand:{type:String,required:true},
        type:{type:String,required:true},
        price:{type:String,required:false},
        textarea:{type:String,required:true},
    })
*/

export async function createProductReq(productData){
    try{
        const res= await axios.post(`${url}/products/`,productData)
        notifySucces()
    }catch(e){
        alert(e.response.data.message)
    }
}

export async function getAllPostsReq(setFunc,setIsLoading,setIsError,length){
    try{
        setIsLoading(true)
        const res= await axios.get(`${url}/products/`)
        setFunc(res.data)
        setIsLoading(false)
    }catch(e){
        setIsError(true)
        alert(e.response.data.message)
    }
}

export async function getOnePostReq(id,setFunc,setIsLoading,setIsError){
    try{
        setIsLoading(true)
        const res= await axios.get(`${url}/products/${id}`)
        setFunc(res.data)
        setIsLoading(false)
    }catch(e){
        setIsError(true)
        alert(e.response.data.message)
    }
}


export async function getPostsByUserIdReq(id,setFunc,setIsLoading,setIsError){
    try{
        setIsLoading(true)
        const res= await axios.get(`${url}/product/byUserId/${id}`)
        setFunc(res.data)
        setIsLoading(false)
    }catch(e){
        setIsError(true)
        alert(e.response.data.message)
    }
}


export async function getPostsByCategoryReq(type,brand,setFunc,setIsLoading,setIsError){
    try{
        setIsLoading(true)
        const res= await axios.get(`${url}/product/byCategories/${type}&${brand}`)
        setFunc( res.data)
        setIsLoading(false)
    }catch(e){
        setIsError(true)
        alert(e.response.data.message)
    }
}



export async function deletePostReq(id){
    try{
        const res= await axios.delete(`${url}/products/${id}`)
    }catch(e){
        alert(e.response.data.message)
    }
}

///BasketPost/deleteBasketPost/:userId&:productId





