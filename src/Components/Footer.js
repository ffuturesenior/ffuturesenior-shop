import React from "react";
import { Link, useHistory } from "react-router-dom";
import {useSelector} from 'react-redux'


const  Footer=()=>{
    
    const router=useHistory()

    const isAuth=useSelector(state=>state.user.isAuth)

    return(
        <div>
            {isAuth?
                <ul class="nav justify-content-center bg-light">
                    <li class="nav-item">
                        <Link to='/AddProduct' class="nav-link active" aria-current="page" href="#">Add_product</Link>
                    </li>
                    <li class="nav-item">
                        <Link to={`/UserProfilePage/${localStorage.getItem('userID')}`} class="nav-link" href="#">User_Profile</Link>
                    </li>
                    <li class="nav-item">
                        <Link to={`/SellStats/${localStorage.getItem('userID')}`} class="nav-link" href="#">Sell_Stats</Link>
                    </li>
                </ul>
            :
            <ul class="nav justify-content-center bg-light">
                <li class="nav-item">
                    you not logged in
                </li>
            </ul>
            }
            
        </div>
    )
}

export default Footer