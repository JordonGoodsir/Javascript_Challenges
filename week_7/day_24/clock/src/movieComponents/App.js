import React, {Component} from 'react'; 
import '../styles/index.css'   
import LoggedIn from "./LoggedIn" 
import LoggedOut from "./LoggedOut"


class App extends Component { 
constructor(props){ 
    super(props) 
    this.state = {user: false} 
    this.movies = ["movie"]  
    this.loginIn = this.loginIn.bind(this) 
    this.loginOut = this.loginOut.bind(this)

}  

loginIn(){ 
    this.setState({user: true})  
    console.log(this.movies)
} 

loginOut(){ 
    this.setState({user: false}) 
} 

render(){  

return( 
<div>
<button onClick={this.state.user ? this.loginOut : this.loginIn}>{this.state.user ? "Logout" : "Login"}</button>  
{this.state.user ? <LoggedIn/> : <LoggedOut/>}
</div>

)
} 

}



export default App