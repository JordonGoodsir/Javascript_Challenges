
import React, {Component} from 'react'; 
import Canvas from "./Canvas" 
import Named from "./Named"

import '../styles/index.css' 

class App extends Component {  
    render(){ 
        return( 
            <div> 
                <h1>forms work</h1> 
                <Canvas /> 
                <Named/>
            </div>
        )
    }

}

export default App