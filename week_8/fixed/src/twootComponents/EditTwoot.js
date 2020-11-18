import react from "react"  


const EditTwoot = (props) =>{   
    const {editTwootCB,history} = props 

    const sendEdit = (event) =>{ 
        event.preventDefault() 
        const title = event.target.title.value 
        const category = event.target.category.value 
        const content = event.target.content.value  
        editTwootCB(title,category,content, props.match.params.id) 
        history.push('/')
    } 

    return( 
        <div> 
        <h1>Edit</h1> 
        <form onSubmit={sendEdit}> 
            <label>Title</label>  
            <input type="text" name="title"/>
            <label>Category</label> 
            <input type="text" name="category"/> 
            <label>Content</label> 
            <textarea name="content"/> 
            <input type="submit" value="New Twoot"/> 
        </form>
    </div>
    )
} 

export default EditTwoot