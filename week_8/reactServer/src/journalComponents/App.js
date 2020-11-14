import React,{useState} from 'react'  
import Home from "./Home" 
import CategorySelection from "./CategorySelection" 
import NewEntry from "./NewEntry"  
import NotFound from "./NotFound" 
import {BrowserRouter, Route, Switch Link} from "react-router-dom"



function App() { 
    const defaultCategories = ["Web Dev","Code","Other"] 

    const [categories, setCategories] = useState(defaultCategories) 
    const [entries, setEntries] = setState([]) 


    addEntryCB = (entry) =>{   
        const updatedEntries = [...entries,entry]
        setEntries(updatedEntries)
    }

    return (
    <div>   
        <h1>Journal</h1>   
       
        <BrowserRouter>   
        <ul> 
            <li><Link to="/">Home</Link></li> 
            {/* <li><Link to="/category">Category</Link></li> 
            <li><Link to="/entry/new">New Entry</Link></li> */}
        </ul>
        <Switch>
        <Route path="/category" render={(props) => <CategorySelection {...props} categories={categories}/>}/> 
        <Route path="/entry/new/:id" render={(props) => <NewEntry {...props} categories={categories} addEntryCB={addEntryCB}/>}/> 
        <Route exact path="/" render={(props) => <Home {...props} entries={entries}/>}/>  
        <Route component={NotFound}/>  
        </Switch>
        </BrowserRouter>
    </div>
    )
    }
    
    export default App