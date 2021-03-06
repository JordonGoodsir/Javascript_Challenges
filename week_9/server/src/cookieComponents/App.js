import React, {useReducer,useEffect} from 'react';  
// import {BrowserRouter, Route} from 'react-router-dom'
import Page from './Page'; 
import stateReducer from '../cookieConfig/stateReducer'
import {StateContext} from '../cookieConfig/store'
import '../styles/index.css';   


const App = () =>{   
    const initialState = {
        cookieCount:0, 
        cookiePerSec: 1
      } 

    const [store, dispatch] = useReducer(stateReducer,initialState) 
    const {cookieCount,cookiePerSec} = store 

    const add = () => { 
      dispatch({ 
          type:"setCookieCount", 
          data: cookieCount + 1
      })
   }    

//   const addPerSecond = () => {   
//     dispatch({ 
//         type:"setCookiePerSec", 
//         data: cookiePerSec + 1
//     })
//   } 
 
useEffect(() => { 
    const interval = setInterval(() => add(), 1000);
    // setInterval(add,1000)  
    return () => clearInterval(interval)
});  


    return(   
     <Page>  
       <div className="d-flex align-items-center">
       <div className="d-flex flex-column align-items-center p-5">
       <img onClick={add} className="cookie m-4" alt="cookie" src ="cookie.png"></img>
       <h1>{cookieCount}</h1>   
       </div>    
       
       <div className="d-flex align-items-center flex-column"> 
       <h1>upgrades?</h1>  
       Cost: 1<button>Destory Choc Chip</button> 
       cost: N/A 
       Current:  
       <button>+1 Cookie Per Second</button> 
       </div>   
       </div>
      </Page>    
    )
}

// class App extends Component { 
//   constructor(props){ 
//       super(props)   
//       this.state = {count: 0}  

//       this.cookiePerSecond = 1  

//       this.upgradePerSecond = this.upgradePerSecond.bind(this)
//       this.add = this.add.bind(this) 
//       this.minus = this.minus.bind(this)
//   }   

//   addPerSecond() {  
//       this.setState({count: this.state.count + this.cookiePerSecond})
//   } 

//   add(){ 
//       this.setState({count: this.state.count + 1})
//   } 

//   minus(){ 
//       this.setState({count: this.state.count - 1})
//   }   

//   upgradePerSecond(){ 
//       return this.cookiePerSecond ++ 
//   }

//   componentDidMount() { 
//      this.addId = setInterval(() => this.addPerSecond(), 1000)
//   } 

//   componentWillUnmount() {
//       clearInterval(this.addId);
//     }

//   render(){   
//      return(  
//      <Page>  
//        <div className="d-flex align-items-center">
//        <div className="d-flex flex-column align-items-center p-5">
//        <img onClick={this.add} className="cookie m-4" alt="cookie" src ="cookie.png"></img>
//        <h1>{this.state.count}</h1>   
//        </div>    
       
//        <div className="d-flex align-items-center flex-column"> 
//        <h1>upgrades?</h1>  
//        Cost: 1<button onClick={this.minus}>Destory Choc Chip</button> 
//        cost: N/A 
//        Current: {this.cookiePerSecond}  
//        <button onClick={this.upgradePerSecond}>+1 Cookie Per Second</button> 
//        </div>   
//        </div>
//       </Page>  

//      )
//   }
// }

export default App
