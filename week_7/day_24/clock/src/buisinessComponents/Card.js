import '../styles/index.css'  
import React, {Component} from 'react'; 

class Card extends Component {  

    constructor(props){ 
        super(props) 
        const {givenName, houseNumber, surname,email,phoneNumber,street,suburb,state,postcode,country} = props
        this.state = {givenName, houseNumber, surname,email,phoneNumber,street,suburb,state,postcode,country} 
    }  

    bindToState(event, stateVal){
        this.setState({[stateVal]: event.target.value})
    }

    render(){  
        const {givenName, houseNumber, surname,email,phoneNumber,street,suburb,state,postcode,country} = this.props
        return( 
        <div>
        
        <div> 
        {/* <form>  */}
        <h1>Personal Details</h1>
        <input type="text" defaultValue={givenName} value={this.state.givenName} name="givenName" onChange={(event)=> this.bindToState(event, "givenName")}/>  

        <input type="text" defaultValue={surname} value={this.state.surname} name="surname" onChange={(event)=> this.bindToState(event, "surname")}/> 

        <input type="text" defaultValue={email} value={this.state.email} name="email" onChange={(event)=> this.bindToState(event, "email")} />  

        <input type="text" defaultValue={phoneNumber} value={this.state.phoneNumber} name="phoneNumber" onChange={(event)=> this.bindToState(event, "phoneNumber")} />  

        
        <h1>Address</h1>
        <input type="text" defaultValue={houseNumber} value={this.state.houseNumber} name="houseNumber" onChange={(event)=> this.bindToState(event, "houseNumber")}/> 

        <input type="text" defaultValue={street} name="street" value={this.state.street} onChange={(event)=> this.bindToState(event, "street")}/> 

        <input type="text" defaultValue={suburb} name="suburb" value={this.state.suburb} onChange={(event)=> this.bindToState(event, "suburb")}/> 

        <input type="text" defaultValue={state} name="state" value={this.state.state} onChange={(event)=> this.bindToState(event, "state")}/> 

        <input type="text" defaultValue={postcode} name="postcode" value={this.state.postcode} onChange={(event)=> this.bindToState(event, "postcode")}/>  

        <input type="text" defaultValue={country} name="country" value={this.state.country} onChange={(event)=> this.bindToState(event, "country")}/>   

        {/* <input type="submit" value="Submit"/> */}
        {/* </form>   */}
        </div>  

        <div> 
        <h1>Fancy details</h1>
        <input type="text" defaultValue={givenName} value={this.state.givenName} name="givenName" onChange={(event)=> this.bindToState(event, "givenName")}/>  

        <input type="text" defaultValue={surname} value={this.state.surname} name="surname" onChange={(event)=> this.bindToState(event, "surname")}/> 

        <input type="text" defaultValue={email} value={this.state.email} name="email" onChange={(event)=> this.bindToState(event, "email")} />  

        <input type="text" defaultValue={phoneNumber} value={this.state.phoneNumber} name="phoneNumber" onChange={(event)=> this.bindToState(event, "phoneNumber")} /> 

        <h1>Fancy address</h1> 
        <input type="text" defaultValue={houseNumber} value={this.state.houseNumber} name="houseNumber" onChange={(event)=> this.bindToState(event, "houseNumber")}/> 
           
        <input type="text" defaultValue={street} name="street" value={this.state.street} onChange={(event)=> this.bindToState(event, "street")}/> 
           
        <input type="text" defaultValue={suburb} name="suburb" value={this.state.suburb} onChange={(event)=> this.bindToState(event, "suburb")}/> 
           
        <input type="text" defaultValue={state} name="state" value={this.state.state} onChange={(event)=> this.bindToState(event, "state")}/> 
           
        <input type="text" defaultValue={postcode} name="postcode" value={this.state.postcode} onChange={(event)=> this.bindToState(event, "postcode")}/>  
          
        <input type="text" defaultValue={country} name="country" value={this.state.country} onChange={(event)=> this.bindToState(event, "country")}/>  

        </div>

        </div>
        )
    } 

}  

Card.defaultProps = { 
    givenName:"first Name", 
    houseNumber:"house num", 
    surname: "person",
    email: "person@person",
    phoneNumber: "000", 
    street: "fake",
    suburb: "the hood",
    state: "NSQ",
    postcode: "2311",
    country: "kazakhstan"
}

export default Card