import react from "react" 

const NewTwoot = ({newTwootCB, history}) =>{  

    const send = (event) =>{ 
        event.preventDefault() 
        const title = event.target.title.value 
        const category = event.target.category.value 
        const content = event.target.content.value  
        newTwootCB(title,category,content) 
        history.push('/')
    } 

  

    return( 
        <div> 
            <h1>New Twoot</h1> 
            <form onSubmit={send}> 
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

export default NewTwoot