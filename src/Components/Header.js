import React from "react";
import {useHistory} from 'react-router-dom'

const Header=()=>{
    const router=useHistory()

    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" onClick={()=>router.push('/')} >ABOBA</a>
                    <div className="navbar d-flex flex-row" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button  class="btn btn-outline-primary" onClick={()=>router.push('/LoginPage')}>sign in</button>
                        </li>
                        <li className="nav-item">
                            <button  class="btn btn-outline-secondary" onClick={()=>router.push('/RegistrationPage')} >sign up</button>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header