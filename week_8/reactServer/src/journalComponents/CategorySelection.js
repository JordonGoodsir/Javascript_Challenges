import React,{useState} from 'react'  
import {Link} from "react-router-dom"


function CategorySelection({categories}) { 
    return (
    <div>
    <h1>Category Selection</h1> 
    <ul> 
        {categories.map((v,i)=>{ 
          return( 
              <li key={i}><Link to={`/entry/new/${i}`}>{v}<Link></li>
          )
        })}
    </ul>
    </div>
    )
    }
    
    export default CategorySelection