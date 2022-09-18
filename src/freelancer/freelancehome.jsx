import React from 'react' 
import Posts from '../components/posts/posts'
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import Topbarfree from '../topfreenav/topfreenav'
import { useLocation } from "react-router-dom"
export default function Freelancehome() {
     const [posts1,setposts1]=useState([])
  const {search} = useLocation()
  useEffect(()=>{
    const fetchposts = async() =>{
      const res = await axios.get(`https://revildo1.herokuapp.com/api/write${search}`)
      setposts1(res.data)
    }
    fetchposts()  
  },[search])
  const parameter=posts1
  return (
    <div className='ownerhome'><h1 className='text-center'>Welcome freelancer!</h1>
    <Topbarfree />
    <Posts post={parameter}/>
    </div>
  )
}