import React, {Component} from "react" 
                    

class List extends Component {  

    constructor(props){ 
        super(props)  
        this.state = {list: []}
    } 

    addItem = (event) => { 
        event.preventDefault()  

        this.setState({list: this.state.list.push(event.target.listInput.value)})  
        this.setState({list: this.state.list}) 
         
        console.log(this.state.list)
    }   

    removeItem = (event) =>{  
        this.setState({list: this.state.list.pop()})  
        this.setState({list: this.state.list})

        console.log(this.state.list)
    }

    render(){
    return(  
        <div>  

        <div>
        <form onSubmit={this.addItem}>
        <input type="text" defaultValue="list item here" name="listInput"/>   
        <input type="submit" value="Submit"/>
        </form>  
        <button onClick={this.removeItem}>remove item</button>
        </div>  
          
        <div>   
        <p>{this.state.list}</p>
        </div>
    
        </div>
    ) 
    }
}

List.defaultProps ={ 
}

export default List