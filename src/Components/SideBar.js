import React, { useEffect, useState } from "react";
import { getPostsByCategoryReq } from "../servFunctions/productRequest";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SideBar=({items,setItems,setIsLoading,setIsError})=>{
    const [type,setType]=useState('')
    const [brand,setBrand]=useState('')

    const notify=()=>{
        toast.error('🦄 input all selects!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    useEffect(()=>{
        localStorage.setItem('type',type)
        localStorage.setItem('brand',brand)
        setBrand(localStorage.getItem('brand'))
        setType(localStorage.getItem('type'))
    },[brand,type])

    const search=(e)=>{
        e.preventDefault()
        if(type==''||brand==''){
            notify()
        }else{
            getPostsByCategoryReq(localStorage.getItem('type',type),localStorage.getItem('brand',brand),setItems,setIsLoading,setIsError,items.length)
        }
       
    }

    return(
            <div style={{backgroundColor:'#222d32',padding:'5px'}}>
                <div className="d-flex flex-column">
                    <select value={brand} onChange={e=>setBrand(e.target.value)} class="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Choose type</option>
                        <option value='Phone'>Phone</option>
                        <option value='Laptop'>Laptop</option>
                        <option value='Computer'>Computer</option>
                        <option value='Earphone'>Earphone</option>
                        <option value='Graphic Card'>Graphic Card</option>
                        <option value='Processor'>Processor</option>
                        <option value='other'>other...</option>
                    </select>
                    <br/>
                    <select value={type} onChange={e=>setType(e.target.value)} class="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Choose brand</option>
                        <option value='Apple'>Apple</option>
                        <option value='Samsung'>Samsung</option>
                        <option value='Xiaomi'>Xiaomi</option>
                        <option value='Lenovo'>Lenovo</option>
                        <option value='Intel'>Intel</option>
                        <option value='AMD'>AMD</option>
                        <option value='Nvidia'>Nvidia</option>
                        <option value='other'>other...</option>
                    </select>
                    <br/>
                </div>
                <button type="button" onClick={search} class="btn btn-success">Search</button>
                <ToastContainer/>
            </div>
    )
}

export default SideBar