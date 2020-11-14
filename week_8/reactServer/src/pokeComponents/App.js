import {BrowserRouter, Route, Switch Link} from "react-router-dom"
import CategorySelection from "./CategorySelection"  
import Home from "./Home" 
import PokemonFetcher from "./PokemonFetcher"



function App() { 

  
    return (
    <div>   
        <h1>Pokemon Viewer</h1>   
       
        <BrowserRouter>   
        <ul> 
            <li><Link to="/">Home</Link></li>  
            <li><Link to="/pokemon/:name">Pokemon</Link></li> 

        </ul>
        <Switch> 
        <Route path="/" render={(props) => <Home {...props}/>}/> 
        <Route path="/pokemon/:name" render={(props) => <PokemonFetcher {...props}/>}/> 

        {/* <Route path="/pokemon/:name" render={(props) => <CategorySelection {...props} categories={categories}/>}/>  */}
        <Route component={NotFound}/>  
        </Switch>
        </BrowserRouter>
    </div>
    )
    }
    
    export default App