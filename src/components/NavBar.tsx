"use client"
import { LogIn } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { ModeToggle } from './DarkMode'
import { useTheme } from 'next-themes'



const NavBar = () => {
    const { theme,setTheme } = useTheme()
  return (
    <div className='flex text-xl font-light px-12 py-4 items-center justify-between border-b-2 relative'>
  
    <div className='flex gap-5'>
       <Link href="/">Home</Link>
       <Link href="shop">Shop</Link>
       <Link href="about">About</Link>
    </div>
      <div className='absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
    {theme==="dark"?<Image src="/agWhite.png" alt="logo" height={40} width={100} />:<Image src="/ag.png" alt="logo" height={40} width={100} />}
        </div>  
     
     <div className='flex gap-5 items-center'>
        <input type="text" placeholder='   🔍︎  Search' className={`h-8 w-50  text-lg rounded-sm border-2 ${theme==="dark"?"text-white":"text-black"}` } />
        <div><ModeToggle/></div>
        <Link href="/login">Login</Link>  
     </div>
     </div>


  )
}

export default NavBar