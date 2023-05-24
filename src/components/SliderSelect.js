import React from 'react'
import { SliderComponent } from './common/SliderComponent'

export const SliderSelect = ({data,setData}) => {
  const bank_limit = 10000;
  
  return (
    <div>
        <SliderComponent 
          amount={data.homeValue} 
          defaultValue={data.homeValue} 
          value={data.homeValue}
          min={1000} 
          max={bank_limit} 
          
          unit="$" 
          step={100}
          label="Home Value"
          onChange={(e,value) =>  setData({
            ...data,
            homeValue: value,
            downPayment: value * 0.2,
            loanAmount: value * 0.8

          })}
          
        />
           <SliderComponent 
          defaultValue={data.downPayment} 
          min={0} 
          max={data.homeValue} 
          amount={data.downPayment} 
          value={data.downPayment}
          unit="$" 
          step={100}
          label="Down Payment"
          onChange={(e,value) => setData({
            ...data,
            downPayment: value,
            loanAmount: data.homeValue - value

          })}
          
        />
           <SliderComponent 
          defaultValue={data.loanAmount} 
          min={1000} 
          max={data.homeValue} 
          amount={data.loanAmount} 
          value={data.loanAmount}
          unit="$" 
          step={100}
          label="Loan Amount"
          onChange={(e,value) => setData({
            ...data,
            loanAmount: value,
            downPayment: data.homeValue - value,

          })}
          
        />
           <SliderComponent 
          defaultValue={data.interestRate} 
          min={2} 
          max={18} 
          amount={data.interestRate} 
          value={data.interestRate}
          unit="%" 
          step={0.5}
          label="Interest Rate"
          onChange={(e,value) => setData({
            ...data,
            interestRate:value
          })}
          
        />
        
    </div>
  )
}
