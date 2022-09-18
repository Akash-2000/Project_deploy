import React from 'react'
import Topbar from '../components/topbar/topbar'
import Posts from '../components/posts/posts'
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"


export default function Ownerhome() {
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
    <div className='ownerhome'><h1 className='text-center'>Welcome back!</h1>
    < Topbar/>
    <Posts post={parameter}/>
    </div>
  )
}
