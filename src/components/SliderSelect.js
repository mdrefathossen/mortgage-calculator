import React from 'react'
import { SliderComponent } from './common/SliderComponent'

export const SliderSelect = () => {
  return (
    <div>
        <SliderComponent defaultValue={3000} min={1000} max={10000} amount={3500} unit="$" label="Hello Evryone"/>
        
    </div>
  )
}
