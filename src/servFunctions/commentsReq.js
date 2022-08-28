import axios from 'axios'
import {notifySucces,notifyError} from '../pages/AddProduct'

const url='http://localhost:5000/aboba'


///comment/getByPostId/:id

export async function getCommentsByPostIdReq(id,setFunc,setIsError,setIsLoading){
    try{
        setIsLoading(true)
        const res= await axios.get(`${url}/comment/getByPostId/${id}`)
        setFunc(res.data)
        //notifySucces()
        setIsLoading(false)
    }catch(e){
        notifyError()
        setIsError(false)
        alert(e.response.data.message)
    }
}


export async function createCommentReq(text,productId,setComments){
    try{
        const res= await axios.post(`${url}/comment`,{
            text:text,
            userId:localStorage.getItem('userID'),
            productId:productId
        })
        setComments(prev=>[...prev,{text:text,userId:localStorage.getItem('userID'),productId:productId}])
        notifySucces()
    }catch(e){
        notifyError()
        //alert(e.response.data.message)
    }
}


///comment/byProductId/:id


export async function deleteCommentsByPostIdReq(id){
    try{
        const res= await axios.delete(`${url}/comment/byProductId/${id}`)
    }catch(e){
    }
}
