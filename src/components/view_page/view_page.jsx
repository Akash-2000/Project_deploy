import React from 'react'
import { useEffect } from "react"
import { useContext } from "react"
import {Context} from "../../context/context"
import { useState } from 'react'
import Counts from "../countws_of_applied/counts"
import axios from "axios"
import Topbarfree from '../../topfreenav/topfreenav'
export default function View_pages() {
      const {user} = useContext(Context)
      const[userinfo,setuserinfo] = useState([])
        useEffect(()=>{
    const fetchposts = async() =>{
      const res = await axios.get(`https://revildo1.herokuapp.com/api/write/getinfo/${user.username}`)
      setuserinfo(res.data)
    }
     fetchposts()
},[])
   const finalvalues = userinfo

   
     return (
    <div className='app'>
          <Topbarfree />
        <Counts posted = {finalvalues}/>
         </div>
  );
}
