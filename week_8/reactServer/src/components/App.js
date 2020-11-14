import React,{Component} from 'react';


class App extends Component{ 

constructor(props){ 
  super(props)
} 

claculate = (event)=>{  
  event.preventDefault()   
  let bill = Number(event.target.bill.value) 
  let tip = Number(event.target.tip.value)

  document.getElementById("total").innerHTML = bill + tip
} 

// default pass 123456789

  render(){ 
    return(
    <div>   
      <form onSubmit={this.claculate}> 
      <p>bill amount</p>
      <input type="text" name="bill" />   
      <p>tip amount</p>
      <input type="text" name="tip" />  
      <input type="submit" name="submit" /> 
      </form> 
      <p id="total"></p>
    </div>   

      )

  }

}

export default App;
