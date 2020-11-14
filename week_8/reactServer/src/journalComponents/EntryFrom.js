import React,{useState} from 'react'  
import {Link, withRouter,Redirect } from "react-router-dom" 

function EntryForm({category,addEntryCB,history}) {  
    const [entry,setEntry] = useState(null) 
    const [home,setHome] = useState(null)


    const onTextAreaChange = (event) =>{   
        setEntry(event.target.value) 
        
    } 

    const handleSubmit = (event) =>{ 
        event.preventDefault() 
        if(entry && entry > 0) { 
        addEntryCB({category, entry})  

        // 1 way of redirect
        // return history.push("/")
        }
    }

    return ( 
        {home && <Redirect to="/"/>}
    <form onSubmit={handleSubmit}>
    <div> 
        <textarea onChange={onTextAreaChange}></textarea>
    </div>
    <input type="submit" value="make entry"/>
    </form>
    )
    }
    
    export default withRouter(EntryForm)