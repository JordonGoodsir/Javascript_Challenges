import React,{useState, useEffect} from 'react' 
import EntryFrom from "./EntryForm"
function NewEntry({match,categories, addEntryCB}) { 

    const selectedCategory = match.params ? match.params.id : -1 
    const category = categories[selectCategory] 
    const {errorMessage,setErrorMessage} = useState(null) 

    useEffect(()=>{ 
      category ? setErrorMessage(null) : setErrorMessage("invalid category")
    },[category])

    return (
    <div>
    <h1>New Entry for {category}</h1> 
    {errorMessage && <p>{errorMessage}</p>} 
    {category && <EntryForm addEntryCB={addEntryCB}/>}
    </div>
    )
    }
    
    export default NewEntry