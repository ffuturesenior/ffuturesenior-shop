import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
import {CategoryScale} from 'chart.js'; 
import { registerables} from 'chart.js';
import { getOnePostReq } from '../../servFunctions/productRequest';
import { getIncomeByProductByProductIdReq } from '../../servFunctions/incomeByProductReq';

const ProductSellStat=({productId})=>{
    Chart.register(...registerables);
    const [productData,setProductData]=useState({
        name:"",
    })

    const [productInfo,setProductInfo]=useState({})
    const [isLoading,setIsLoading]=useState(false)
    const [isError,setIsError]=useState(false)

    useEffect(()=>{
        getOnePostReq(productId,setProductData,setIsLoading,setIsError)
        getIncomeByProductByProductIdReq(productId,setIncomes,setIsLoading,setIsError)
    },[])

    const [incomes,setIncomes]=useState([
        {income:200,date:'1/2022'},
        {income:300,date:'2/2022'},
        {income:600,date:'3/2022'},
        {income:550,date:'4/2022'},
        {income:150,date:'5/2022'},
        {income:850,date:'6/2022'},
        {income:350,date:'7/2022'},
        {income:250,date:'8/2022'},
        {income:550,date:'9/2022'},
    ])

    const data = {
        labels: incomes.map(p=>{return p.date}),
        datasets: [{
          label: `income from ${productData.name}`,
          data: incomes.map(p=>{return p.income}),
          fill: true,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      };


    return(
        <div>
            <>
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
            </>
            
        </div>
    )
}

export default ProductSellStat
