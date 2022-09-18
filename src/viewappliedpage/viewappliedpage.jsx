import React from 'react'
import { useEffect } from "react"
import { useContext } from "react"
import {Context} from "../context/context"
import { useState } from 'react'

import axios from "axios"
import Applyinfo from '../applyinfo/applyinfo'
import Topbar from '../components/topbar/topbar'

export default function View_applied() {
  
      const {user} = useContext(Context)
      const[applyinfo,setapplyinfo] = useState([])
      
      useEffect(()=>{
    const fetchposts = async() =>{
      const res = await axios.get(`https://revildo1.herokuapp.com/api/write/getapplied/${user.username}`)
        setapplyinfo(res.data)
    }
     fetchposts()
},[])
   const finalvalues = applyinfo
   
    return (
    <div className='app'>
        <Topbar/>
        <Applyinfo postedown = {finalvalues}/> 
         </div>
  );
}
