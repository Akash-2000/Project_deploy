import React from 'react'

export default function Applied({finaluser}) {
  return (
    <div className='mt-5'>
      <center>
    <div  className='card w-50'>
      
      <div className='card-body'>
        <div className='card-title'><b>Project Title:</b> <span>{finaluser.job_title}</span></div>
        <div className='card-title'><b>Organization Name:</b><span>{finaluser.organization}</span></div>
      
    </div>
    </div>
    </center>
    </div>
  )
}
