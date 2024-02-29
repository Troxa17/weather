import React from 'react'

const CurrentConditions = ({currentcondition}) => {
  return (
    <>
    <img style = {{width:150 ,textAlign:'center'}} src={currentcondition.icon}  /> <h3>{currentcondition.text}</h3>
    
    </>
  )
}

export default CurrentConditions