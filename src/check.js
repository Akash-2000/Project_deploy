import React from 'react'
import { Link } from "react-router-dom";
export default function Check() {
    return (
    <div className="container">
        <div className='row text-center'><h1>Login as </h1></div>
        <form >
           <div className='row mt-5 '><center><button className='btn btn-primary  btn-block w-25'> <Link className="link" to="/ownerlogin">BUSINESS OWNER</Link></button></center></div>
         <div className='row mt-5'> <center><button className='btn btn-primary  w-25'><Link className="link" to="/userlogin">FREELANCER</Link></button></center></div>
        </form>
    </div>
  )
}