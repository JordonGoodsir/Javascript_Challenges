import faker from "faker"  
import Card from "./Card"
 


const Comment = (props) =>{ 
  return ( 
      <Card>
            <div className="comment">  
               <img alt="avatar" src={faker.image.avatar()}></img> 
            </div> 
            <div className="content">  
               <div className="author">{props.author}</div>
               <div className="text">{props.text}</div>
            </div>  
      </Card>
  )
    
} 

export default Comment