import React from 'react'

function Bmiscore({bmino,bminame,changeweight,bmitypeColor}) {
   console.log(changeweight);
  return (
    <div className='text-center shadow rounded p-4'>
      <h4> YOUR BMI SCORE </h4>
      <h5 style={{color: bmitypeColor}}>{bminame}</h5>

      <div className='row justify-content-md-center'>
      <div className='p-3 my-2 alert fs-1 alert-primary col-sm-4' >{bmino}</div>
    </div>
    <div className='fs-3 fw-bold text-primary'>{bminame}</div>
    {changeweight.type==="positive"&&(
  <div className='fs-4'>YOU NEED TO LOSE<span className='fw-bold'>{changeweight.weight}kg</span></div>
)}

{changeweight.type==="negative"&&(
  <div className='fs-4'>YOU NEED TO GAIN<span className='fw-bold'>{changeweight.weight}kg</span></div>
)}

{changeweight.type==="normal"&&(
  <div className='fs-4'>YOU ARE NORMAL<span className='fw-bold'>{changeweight.weight}kg</span></div>
)}

    </div>
  )
}

export default Bmiscore
