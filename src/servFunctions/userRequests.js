import axios from 'axios'
import { login } from '../redux/reducers/userReducer'

const url='http://localhost:5000/aboba'

/*
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true},
    caption:{type:String,required:false},
    password:{type:String,required:false},
*/

export async function registrate(userData){
    try{
        if(!userData.email||!userData.lastname||!userData.firstname||!userData.password){
            return res.status(400).alert("bad request")
        }
        const res= await axios.post(`${url}/users/registrate`,{
            lastname:userData.lastname,
            firstname:userData.firstname,
            email:userData.email,
            password:userData.password,
            caption:"",
        })
        alert("created")
    }catch(e){
        alert(e.response.data.message)
    }
}



export const loginReq=(userData)=>{
    return async dispatch=>{
        try{
            if(!userData.email||!userData.password){
                return res.status(400).alert("bad request")
            }
            const res= await axios.post(`${url}/users/login`,{
                email:userData.email,
                password:userData.password,
            })
            dispatch(login(res.data))
            localStorage.setItem('userID',res.data._id)
            //console.log(res)
            alert("logined")
        }catch(e){
           // alert(e.response.data.message)
        }       
    }
}

export const rehost=()=>{
    return async dispatch=>{
        try{
            console.log(localStorage.getItem('userID'))
            const res= await axios.get(`${url}/users/auth/${localStorage.getItem('userID')}`)
            dispatch(login(res.data))
            localStorage.setItem('userID',res.data._id)
            //alert("logined")
        }catch(e){
            console.log(e)
            localStorage.removeItem('userID')
        }       
    }

}

export const getOneUserReq=async (id,setFunc,setIsLoading,setIsError)=>{
        try{
            setIsLoading(true)
            const res= await axios.get(`${url}/users/${id}`)
            //setFunc(res.data)
            console.log('getOneUserReq')
            setIsLoading(false)
        }catch(e){
            setIsError(true)
            console.log(e)
        }       
}