import React from 'react'

const Day = ({day}) => {
  return (
    <div className="col-lg-4 day">
        <p style={{color:'#f4f4f9'}}>{day.date}</p>
        <img src={day.day.condition.icon}  />
        <h3 style={{color:'#ffffff'}}>{day.day.maxtemp_c}&#176;c</h3>
    </div>
  )
}

export default Day  