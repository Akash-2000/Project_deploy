import React from 'react'
import { useState } from "react"
import axios from "axios";

export default function Ownereg() {
    const[username,setusername]= useState("")
  const[email,setemail]= useState("")
  const[password,setpassword]= useState("")
  const[orgnization,setorgnization]= useState("")
  const[confirmpassword,setconfirmpassword]=useState("")
  
  const handlesubmit = async (e) => {
    e.preventDefault()
      try{
       
        const res = await axios.post(`https://revildo1.herokuapp.com/api/ownerauth/register`,{
      username,
      email,
      password,
      orgnization
    });
    res.data /* && window.location.replace("/ownerlogin") */;
    console.log(res.data)
    }catch(error){
        console.log(error)
        
    }
     
  }
return (
        <div className="userreg login container-fluid d-flex align-items-center justify-content-center mt-5 bg w-50">
      <form className="loginform mt-5"  onSubmit={handlesubmit}>
        <span className="text-center h3">Owner Registration</span>
        <div className='mb-3 w-100'>
        
        <label className="form-label">Username</label>
        <input 
          type="text"
          className="logininput form-control"
          placeholder="Enter Username..."
          autoComplete='off'
          onChange={e=>setusername(e.target.value)}
        />

        </div>
        <div className='mb-3 w-100'>
        <label className='form-label'>Email</label>
        <input
          type="email"
          className="logininput form-control"
          placeholder="Enter Email..."
          autoComplete='off'
           onChange={e=>setemail(e.target.value)}
        />
        </div>
        <div className='mb-3 w-100'>
        <label className='form-label'>organization</label>
        <input
          type="text"
          className="logininput form-control"
          placeholder="Enter organization..."
          autoComplete='off'
          onChange={e=>setorgnization(e.target.value)}
        />
        </div>
        <div className='mb-3 w-100'>
        <label className='form-label'>Password</label>
        <input
          type="password"
          className="logininput form-control"
          placeholder="Enter Password"
          autoComplete='off'
         onChange={e=>setpassword(e.target.value)}
        />
        </div>
        <div className='mb-3 w-100'> 
        <label className='form-label'>Confirm password</label>
        <input
          type="password"
          className="logininput form-control"
          placeholder="confirm Password"
          autoComplete='off'
          onChange={e=>setconfirmpassword(e.target.value)}
        />
        {console.log(confirmpassword)}
        </div>
        <button  type="submitbutton"className=" btn btn-primary loginbutton" >
          Register
        </button>
      </form>
    </div>

  )
}