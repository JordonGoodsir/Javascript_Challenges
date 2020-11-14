import React,{useState} from 'react'  
import {Link} from "react-router-dom"

function Home({entries}) {
    return (
    <div>
    <h1>Home</h1> 
    <li><Link to="/category">Category</Link></li> 
    {entries.map((v,i)=>{ 
        return <div key={i}><h2>{v.category}</h2><h2>{v.entry}</h2></div>
    })}
    </div>
    )
    }
    
    export default Home