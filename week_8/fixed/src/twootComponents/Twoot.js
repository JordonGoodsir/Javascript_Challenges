import react from "react" 
import {Link, useParams} from "react-router-dom" 

const Twoot = (props) =>{    

    const {twoot,deleteTwootCB,history} = props 
    const {title,category,modified_date,content} = twoot 

    const {id} = useParams()  

    const homeRedirect = (event) =>{  
        deleteTwootCB(twoot)
        history.push('/') 
    }
    
    return( 
        <div>   
            <h1>{title}</h1>  
           <h3>{category}</h3> 
           <h3>{modified_date.toLocaleString()}</h3> 
           <p>{content}</p>    
           
        {!id ? "" : <button onClick={homeRedirect}>Delete Twoot</button>} 
        {!id ? "" : <Link to={`/edit/twoot/${twoot._id}`}>Edit Twoot</Link>}
        {id ? "" : <Link to={`/twoot/${twoot._id}`}>View Twoot</Link>}

        </div>
    )
} 

export default Twoot