import react, {useState} from "react"  
import {BrowserRouter, Route, Switch, Link} from "react-router-dom" 
import Twoots from "./Twoots"  
import Twoot from "./Twoot" 
import NewTwoot from "./NewTwoot"   
import EditTwoot from "./EditTwoot" 
import Nav from "./Nav" 
import data from "../data/post_data"


const App = (props) =>{   
    
    var[twoots, setTwoots] = useState(data)   

    const findMyTwoot = (id) =>{  
        return twoots.find(twoot => twoot._id == id) 
    } 

    const newTwootCB = (title,category,content) =>{    
        const newTwoot = {  
            _id: twoots[twoots.length - 1]._id + 1,
            "title":title, 
            "modified_date": Date.now().toLocaleString(), 
            "category":category,
            "content":content
        } 
        const updatedTwoots = [...twoots, newTwoot] 
         
        setTwoots(updatedTwoots)  
    }   

    const editTwootCB = (title,category,content,id) =>{    
        const editedTwoot = {  
            _id: id,
            "title":title, 
            "modified_date": Date.now().toLocaleString(), 
            "category":category,
            "content":content
        } 
        
        const targetTwoot = twoots.indexOf(twoots.find(twoot => twoot._id == id))

        const newTwoots= [...twoots, twoots.splice(targetTwoot,1,editedTwoot)]
        setTwoots(newTwoots)  
    } 

    const deleteTwootCB = (targetTwoot) =>{ 
      twoots.splice(twoots.indexOf(targetTwoot),1)  
    }

    return( 
        <div> 
            <h1>App</h1> 
                <BrowserRouter>   
                <Nav/> 
                <Switch> 
                <Route exact path="/new/twoot" render={(props) => <NewTwoot {...props} newTwootCB={newTwootCB} />}/>   
                <Route exact path="/edit/twoot/:id" render={(props) => <EditTwoot {...props} editTwootCB={editTwootCB} />}/>  
                <Route exact path="/twoot/:id" render={(props) => <Twoot {...props} twoot={findMyTwoot(props.match.params.id)} deleteTwootCB={deleteTwootCB}/>}/> 
                <Route exact path="/" render={(props) => <Twoots {...props} twoots={twoots} />}/>  
                </Switch> 
            </BrowserRouter> 
        </div>
    )
} 

export default App