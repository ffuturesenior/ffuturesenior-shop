import React, { useState } from "react";
import { registrate } from "../servFunctions/userRequests";
import {useDispatch} from 'react-redux'

const RegistrationPage=()=>{

    const [newAcc,setNewAcc]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:""
    })


    const dispatch=useDispatch()


    const submit=(e)=>{
        e.preventDefault(true)
        registrate(newAcc)
    }



    return(
        <div>
            <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-4">
                    <label for="validationCustom01" class="form-label">First name</label>
                    <input value={newAcc.firstname} onChange={(e)=>setNewAcc({...newAcc,firstname:e.target.value})} type="text" class="form-control" id="validationCustom01"  required/>
                    <div class="valid-feedback">
                    Looks good!
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Last name</label>
                    <input value={newAcc.lastname} onChange={(e)=>setNewAcc({...newAcc,lastname:e.target.value})} type="text" class="form-control" id="validationCustom02"  required/>
                    <div class="valid-feedback">
                    Looks good!
                    </div>
                </div>
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
    )
}

export default RegistrationPage