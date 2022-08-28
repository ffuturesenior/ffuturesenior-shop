import axios from 'axios'
//import {notifySucces,notifyError} from '../pages/AddProduct'

const url='http://localhost:5000/aboba'


/*
    const IncomeByDay=new mongoose.Schema({
        income:{type:String,required:true},
        date:{type:String,required:true},
        productId:{type:String,required:true},
        userId:{type:String,required:true}
    })
*/

export async function createIncomeByDayReq(incomebydayData){
    try{
        const res= await axios.post(`${url}/incomebyday/`,incomebydayData)
        //notifySucces()
    }catch(e){
        //notifyError()
        alert(e.response.data.message)
    }
}



export async function getIncomeByDayByUserIdReq(id,setFunc,setIsLoading,setIsError){
    try{
        setIsLoading(true)
        const res= await axios.get(`${url}/incomebyday/byUserId/${id}`)
        setFunc(res.data)
        setIsLoading(false)
    }catch(e){

        setIsError(true)
        alert(e.response.data.message)
    }
}