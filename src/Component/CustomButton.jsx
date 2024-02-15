import React from 'react'
import '../App.css'
const CustomButton = (props) => {
  return (
    <>
     <button className='btn' onClick={props.click}
     style={{backgroundColor:props.bg,color:props.color}}>
     {props.name}</button>
    </>
  )
}

export default CustomButton
