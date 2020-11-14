import React, {Component} from 'react';
import '../styles/index.css' 

const ColorSelector = (props) =>{  

    const{changeHandlerCb,hex} = props 
        
    const changeHandler = (event) =>{ 
        changeHandlerCb(event.target.value)
    } 

    return( 
        <input type="color" value={hex} onChange={changeHandler} />
    )
}

// class ColorSelector extends Component{   

//     constructor(props){ 
//         super(props)  
//         this.state = {hex: this.props.hex} 
//     }

//     handleChange = (event) => { 
//         console.log(event.target.value) 
//         this.setState({hex: event.target.value}) 
//     }

//     render(){  
        
//         return(  
//             <input type="color" value={this.state.hex} onChange={this.handleChange}/>
//         )
//     }
// } 

export default ColorSelector