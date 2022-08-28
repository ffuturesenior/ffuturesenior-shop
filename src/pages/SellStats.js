import React, { useState } from "react";
import IncomesByDayChart from "../Components/userStatsComps/IncomesByDayChart";
import RequestsToBuyList from "../Components/userStatsComps/RequsetsToBuyList";

const SellStats=()=>{

    
    return(
        <div style={{padding:'20px'}}>
            <div>
                <IncomesByDayChart/>
            </div>  
            <div>
                <RequestsToBuyList/>
            </div>
        </div>
    )
}

export default SellStats