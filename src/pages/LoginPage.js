import React,{useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import { logout } from "../redux/reducers/userReducer";
import { loginReq } from "../servFunctions/userRequests";

const LoginPage=()=>{

    const dispatch=useDispatch()
    const isAuth=useSelector(state=>state.user.isAuth)
    console.log(useSelector(state=>state.user.user))
    const [newAcc,setNewAcc]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:""
    })


    const submit=(e)=>{
        e.preventDefault()
        dispatch(loginReq(newAcc))
    }

    return(
        <div>
            {isAuth?
                <div>
                    <div class="col-12">
                            <button class="btn btn-danger" onClick={()=>dispatch(logout())} type="submit">logout</button>
                        </div>
                </div>
            :
                <div>
                    <form class="row g-3 needs-validation" novalidate>
                        <div class="col-md-4">
                            <label for="validationCustomUsername" class="form-label">Email</label>
                            <div class="input-group has-validation">
                            <span class="input-group-text" id="inputGroupPrepend">@</span>
                            <input value={newAcc.email} onChange={(e)=>setNewAcc({...newAcc,email:e.target.value})} type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                            <div class="invalid-feedback">
                                Please choose a email.
                            </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label for="validationCustom03" class="form-label">Password</label>
                            <input value={newAcc.password} onChange={(e)=>setNewAcc({...newAcc,password:e.target.value})} type="text" class="form-control" id="validationCustom03" required/>
                            <div class="invalid-feedback">
                            Please provide a valid city.
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                            <label class="form-check-label" for="invalidCheck">
                                Agree to terms and conditions
                            </label>
                            <div class="invalid-feedback">
                                You must agree before submitting.
                            </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-primary" onClick={submit} type="submit">Submit form</button>
                        </div>
                    </form>
            </div>
            }
           
        </div>
    )
}

export default LoginPage