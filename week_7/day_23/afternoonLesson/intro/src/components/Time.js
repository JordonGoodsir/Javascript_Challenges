import React, { useState } from "react"

const Time = () =>{    
    let time = new Date().toLocaleTimeString() 
    const [Ctime,setCtime] =  useState(time) 
    const updateTime=()=>{ 
        let time = new Date().toLocaleTimeString() 
        setCtime(time)
    } 

    setInterval(updateTime,1000)

    return <h1>the time is {time}</h1>
}  

export default Time