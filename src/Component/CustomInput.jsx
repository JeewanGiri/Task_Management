import React from 'react'
import '../App.css'
const CustomInput = (props) => {
  return (
    <>
   <div className='inputWrapper'>
    <label>{props.label}</label>
    <input className='inputForm' value={props.value} placeholder={props.placeHolder} onChange={props.change}/>
   </div>
       
    </>
  )
}

export default CustomInput
