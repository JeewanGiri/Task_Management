import React from 'react'
import '../App.css'
import CustomButton from './CustomButton'
const Card = (props) => {
  return (
    <>
      <div className='Card' style={{backgroundColor:props.complete===true && '#402a23',color:props.complete===true && 'white'}}>
      <h2>{props.id}</h2>
      <h3>{props.title}</h3>
      <p>{props.des}</p>
      <div className='btnWrapper'>
    <CustomButton color='white' bg='#1877F2' name='Complete' click={props.update}/>
    <CustomButton color='white' bg='red' name='Delete' value={props.value} click={props.delete}/>
</div>
      </div>
    </>
  )
}

export default Card
