import React, { useEffect, useState } from "react";
import { createCommentReq, getCommentsByPostIdReq } from "../../servFunctions/commentsReq";
import Avatar from "../ReUsable/Avatar";
import Comment from "./Comment";


/*
const Comments=new mongoose.Schema({
    text:{type:String,required:true},
    userId:{type:String,required:true},
    productId:{type:String,required:true},
    
})



*/



const Comments=({productId})=>{
    const [text,setText]=useState('')
    const formData=new FormData()
    const [comments,setComments]=useState([
    ])

    const [isLoading,setIsLoading]=useState(true)
    const [isError,setIsError]=useState(false)


    useEffect(()=>{
        getCommentsByPostIdReq(productId,setComments,setIsError,setIsLoading)
    },[])

    const send=()=>{

        formData.append('text',text)
        formData.append('userId',localStorage.getItem('userID'))
        formData.append('productId',productId)
        createCommentReq(text,productId,setComments)
        formData.delete('text')
        formData.delete('userId')
        formData.delete('productId')
    }

    return(
        <div>
            <h4 className="text-center">Comments</h4>
            <div className="d-flex">
                <input value={text} onChange={(e)=>setText(e.target.value)}/><button onClick={send} type="button" class="btn btn-outline-primary">leave comment</button>
            </div>
            
            {comments.map(p=>
                <Comment key={p._id} userId={p.userId} text={p.text}/>
            )}
        </div>
    )
}

export default Comments