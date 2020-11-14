import react from "react"  
import Twoot from "./Twoot"

const Twoots = ({twoots}) =>{ 
    return( 
        <div> 
            {twoots.map((v) =>{ 
                return <Twoot twoot={v}/>
            })}
        </div>
    )
} 

export default Twoots