import React from 'react'

export default function Applied_persons({final_value}) {
console.log(final_value)
  return (
    <div className='mt-5'>
      <center>
      <div className='card w-50'>
        <div className="card-body">
          <div className="card-title"><b>Person Name :</b><span>{final_value.name}</span></div>
          <div className="card-title"><b>Qaulification:</b><span>{final_value.qualifcation}</span></div>
          <div className="card-title"><b>Applied For:</b><span>{final_value.applied_for}</span></div>
                      </div>
          </div>
        </center>
    </div>
  )
}
