import { useState } from "react"

export const useCounter=()=>{
    const [count,setCount]=useState(1)
    const IncEvent=()=>{
        setCount((prev)=>prev+1)
    }
    const DecEvent=()=>{
        setCount((prev)=>prev-1)
    }
    return{count,IncEvent,DecEvent}
}