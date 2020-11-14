import react from "react"  
import {Link} from "react-router-dom"


const Nav = () =>{ 
    return( 
        <div> 
            <Link to="/">Home</Link> <br/>
            <Link to="/new/twoot">New Twoot</Link>
        </div>
    )
} 

export default Nav