import React from "react";
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'

const CardItem=({props})=>{
    const isAuth=useSelector(state=>state.user.isAuth)
    const router=useHistory()
    return(
        <div style={{width:"18rem",overflow:'hidden'}}>
          <div class="card" style={{width: "18rem",overflow:'hidden'}}>
            <div style={{height:"150px",background:'gray'}} ></div>
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <h6>brand:{props.brand}</h6>
                <h6>type:{props.type}</h6>
                <p class="text-muted">{props.textarea}</p>
                {isAuth?
                    <button onClick={()=>router.push(`/ProductPage/${props._id}&${props.userId}`)} class="btn btn-primary">{props.price}</button>
                :
                    <button  class="btn btn-primary">{props.price}</button>
                }
            </div>
        </div>
        </div>
    )
}

export default CardItem