"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { IPuff } from '@/app/api/v1/products/route'
import { Button } from '@/components/ui/button'
import { SheetDemo } from '@/components/SheetHai'

import Searchers from '@/components/Searchers'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


const Page = () => {
  const [puff,setPuff]=useState<IPuff[]>([])
    const [brand, setBrand] = useState(""); // selected brand
  const [nicotine, setNicotine] = useState(""); // selected nicotine %

  const fetchPuff=async()=>{

  try {
       let url = "/api/products?";//
      if (brand) url += `company=${brand}&`;//
      if (nicotine) url += `nicotine=${nicotine}`;//

     const response = await axios.get("/api/v1/products")
     console.log(response)
     setPuff(response.data.products)
  } catch (error) {
    throw (error)
  }}
  useEffect(()=>{
    fetchPuff()
  },[brand,nicotine]);//
 
  
  return (
    <>
        <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/shop">shop</BreadcrumbLink>
          </BreadcrumbItem>
             <BreadcrumbSeparator />
              <BreadcrumbItem>
            <BreadcrumbLink href="/disposable">disposable</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
 <Searchers  />
    <div className='mx-20 my-10 flex flex-wrap gap-20  '>
    {
      puff.map((x)=>{
        return <div className='h-80 w-70 border-2 rounded-md shadow-[2px_2px_4px_2px_rgba(0,0,0,0.5)] p-2'>
          <div className='font-semibold bg-black/60 text-white w-max px-2 rounded'>{x.company} </div>
          <div  ><img src={x.img} alt="img"  className="w-30 h-45 object-cover" /></div>
          <div>{x.price}</div>
          <div>{x.model} </div>
          <div><SheetDemo  /></div>
          
              </div>
       
      })
      
      
    }
    </div>
    </>
  )
}

export default Page