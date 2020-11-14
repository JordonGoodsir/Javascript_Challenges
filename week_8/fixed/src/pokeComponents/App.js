import {BrowserRouter, Route, Switch, Link} from "react-router-dom"
import Home from "./Home" 
import PokemonFetcher from "./PokemonFetcher"


function App() { 

    return (
    <div>   
        <h1>Pokemon Viewer</h1>   
       
        <BrowserRouter>   
        <ul> 
            <li><Link to="/">Home</Link></li>  
            <li><Link to="/pokemon/charmander">Pokemon</Link></li> 

        </ul>
        <Switch> 
        <Route exact path="/" render={(props) => <Home {...props}/>}/> 
        <Route path="/pokemon/:name" render={(props) => <PokemonFetcher {...props}/>}/> 
        </Switch>
        </BrowserRouter>
    </div>
    )
    }
    
    export default App
