"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { IPuff } from '../api/v1/route'

const page = () => {
  const [puff,setPuff]=useState<IPuff[]>([])
  const fetchPuff=async()=>{

  try {
     const response = await axios.get("/api/v1/products")
     console.log(response)
     setPuff(response.data.products)
  } catch (error) {
    throw (error)
  }}
  useEffect(()=>{
    fetchPuff()
  },[])
 
  
  return (
    <>
    {
      puff.map((x)=>{
        return <div>{x.company}</div>
      })
      
      
    }
    </>
  )
}

export default page