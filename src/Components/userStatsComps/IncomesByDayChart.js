import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
import {CategoryScale} from 'chart.js'; 
import { registerables} from 'chart.js';
import { getIncomeByDayByUserIdReq } from '../../servFunctions/incomeByDayRequests';

const IncomesByDayChart=()=>{
    Chart.register(...registerables);

    const [isLoading,setIsLoading]=useState()
    const [isError,setIsError]=useState()
    const [incomes,setIncomes]=useState([
        {income:200,date:'1/2022'},
        {income:300,date:'1/2022'},
        {income:600,date:'1/2022'},
        {income:550,date:'1/2022'},
        {income:150,date:'1/2022'},
        {income:850,date:'2/2022'},
        {income:350,date:'2/2022'},
        {income:250,date:'2/2022'},
        {income:550,date:'3/2022'},
    ])


    useEffect(()=>{
        getIncomeByDayByUserIdReq(localStorage.getItem('userID'),setIncomes,setIsLoading,setIsError)
    },[])

    //console.log(sumIncomes)

    const data = {
        labels: incomes.map(p=>{return p.date}),
        datasets: [{
          label: 'income from all time',
          data: incomes.map(p=>{return p.income}),
          fill: true,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      };


    return(
        <div>
            {isLoading?
                <></>
            :
                <>
                    {isError?
                        <></>
                    :
                        <>
                            <Line height={300} width={900}
                                data={data}
                            />
                        </>
                    }
                </>
            }
        </div>
    )
}

export default IncomesByDayChart
