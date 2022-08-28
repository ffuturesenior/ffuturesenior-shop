import React from "react";


const Avatar=({isBig})=>{

    return(
        <>
        {isBig?
            <div className="bg-light" style={{borderRadius:'90px',border:'1px solid black',height:"80px",width:'80px'}}>
                    
            </div>
        :
            <div className="bg-light" style={{borderRadius:'90px',border:'1px solid black',height:"40px",width:'40px'}}>
                
            </div>
        }
            
        </>
        
    )
}

export default Avatar