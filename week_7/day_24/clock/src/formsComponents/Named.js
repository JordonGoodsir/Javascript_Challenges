
import React,{Component} from "react" 

class Named extends Component{  
 constructor(props){ 
     super(props) 
     const {painter,painting} =props 
     this.state = {painter, painting}
 } 

 bindToState(event, stateVal){
    this.setState({[stateVal]: event.target.value})
}

 render(){  
     
    return(
     <div>  

         <div>   
             {this.state.painting} 
             {this.state.painter}
         </div> 

         <div> 
             <input  
             type="text"
             defaultValue="painter Name Here" 
             onChange={(event)=> this.bindToState(event, "painting")}
             />  

             <input  
             type="text"
             defaultValue="Painting Name Here" 
             onChange={(event)=> this.bindToState(event, "painter")}
             />
         </div> 

     </div>  
     )

 }
}  

Named.defaultProps={ 
    painter: "talented man",
    painting: "masterpiece"
}

export default Named