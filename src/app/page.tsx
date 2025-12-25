"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { useTheme } from 'next-themes'

const page = () => {
     const{theme}={useTheme}
     const [mounted, setMounted] = React.useState(false)

React.useEffect(() => {
  setMounted(true)
}, [])

if (!mounted) return null

  return (
    <div>
      <div className='flex justify-center items-center'>
             <Image src={theme === "dark" ? "/antiqueog.png" : "/ogblack.png"} alt="img" height={450} width={550}  />
              {/* <Image src="/antiqueog.png" alt="img" height={450} width={550}/> */}


     
      

      </div>
      
       

    </div>
  )
}

export default page