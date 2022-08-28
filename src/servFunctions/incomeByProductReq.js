import axios from 'axios'
import {notifySucces,notifyError} from '../pages/AddProduct'

const url='http://localhost:5000/aboba'


export async function createIncomeByProductReq(incomebyProductData){
    try{
        const res= await axios.post(`${url}/incomebyProduct/`,incomebyProductData)
        notifySucces()
    }catch(e){
        notifyError()
        alert(e.response.data.message)
    }
}



export async function getIncomeByProductByProductIdReq(id,setFunc,setIsLoading,setIsError){
    try{
        setIsLoading(true)
        const res= await axios.get(`${url}/incomebyProduct/ByProductId/${id}`)
        setFunc(res.data)
        setIsLoading(false)
    }catch(e){

        setIsError(true)
        alert(e.response.data.message)
    }
}



export async function deleteIncomeByProductByProductIdReq(id){
    try{
        const res= await axios.delete(`${url}/incomebyProduct/byProductId/${id}`)
    }catch(e){
    }
}
