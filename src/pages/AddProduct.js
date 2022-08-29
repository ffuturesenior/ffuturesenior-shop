import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {createProductReq} from '../servFunctions/productRequest'

export const notifySucces=()=>{
        toast.success('🦄 added', {
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
    
const AddProduct=()=>{
    const formData=new FormData()
    
    const [newProduct,setNewProduct]=useState({
        name:"",
        brand:"",
        type:"",
        price:"",
        caption:""
    })

    
   
    

    
    const submit=(e)=>{
        e.preventDefault()
        if(isNaN(newProduct.price)||newProduct.price==''||localStorage.getItem('userID')==false){
            notifyError()
        }else{
           formData.append('name',newProduct.name)
           formData.append('brand',newProduct.brand)
           formData.append('type',newProduct.type)
           formData.append('price',newProduct.price)
           formData.append('textarea',newProduct.caption)
           formData.append('userId',localStorage.getItem('userID'))
           createProductReq(formData)
           formData.delete('name')
           formData.delete('brand')
           formData.delete('type')
           formData.delete('price')
           formData.delete('textarea')
           formData.delete('userId')
        } 
        
    }


    return(
        <div style={{padding:'10px'}}>
            <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-4">
                    <label for="validationCustom01" class="form-label">Product name</label>
                    <input type="text" class="form-control" id="validationCustom01" value={newProduct.name} onChange={(e)=>setNewProduct({...newProduct,name:e.target.value})} required/>
                    <div class="valid-feedback">
                    Looks good!
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Brand</label>
                    <select value={newProduct.brand} onChange={(e)=>setNewProduct({...newProduct,brand:e.target.value})} class="form-select" id="validationCustom04" required>
                        <option selected disabled value="">Choose...</option>
                        <option value='Apple'>Apple</option>
                        <option value='Samsung'>Samsung</option>
                        <option value='Xiaomi'>Xiaomi</option>
                        <option value='Lenovo'>Lenovo</option>
                        <option value='Intel'>Intel</option>
                        <option value='AMD'>AMD</option>
                        <option value='Nvidia'>Nvidia</option>
                        <option value='other'>other...</option>
                    </select>
                    <div class="invalid-feedback">
                        Please select a valid brand.
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Type</label>
                    <select value={newProduct.type} onChange={(e)=>setNewProduct({...newProduct,type:e.target.value})} class="form-select" id="validationCustom04" required>
                        <option selected disabled value="">Choose...</option>
                        <option value='Phone'>Phone</option>
                        <option value='Laptop'>Laptop</option>
                        <option value='Computer'>Computer</option>
                        <option value='Earphone'>Earphone</option>
                        <option value='Graphic Card'>Graphic Card</option>
                        <option value='Processor'>Processor</option>
                        <option value='other'>other...</option>
                    </select>
                    <div class="invalid-feedback">
                        Please select a valid brand.
                    </div>
                </div>
               
                <div class="col-md-4">
                    <label for="validationCustom01" class="form-label">Price</label>
                    <input value={newProduct.price} onChange={(e)=>setNewProduct({...newProduct,price:e.target.value})} type="text" class="form-control" id="validationCustom01"  required/>
                    <div class="valid-feedback">
                    Looks good!
                    </div>
                </div>
                <div class="mb-3">
                    <label for="validationTextarea" class="form-label">Textarea</label>
                    <textarea value={newProduct.caption} onChange={(e)=>setNewProduct({...newProduct,caption:e.target.value})} class="form-control" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                    <div class="invalid-feedback">
                    Please enter a message in the textarea.
                    </div>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" onClick={(e)=>submit(e)} type="submit">Submit form</button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    )
}

export default AddProduct