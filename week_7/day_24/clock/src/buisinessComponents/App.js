import '../styles/index.css'  
import React, {Component} from 'react';  
import Card from "./Card"

class App extends Component {  

    constructor(props){ 
        super(props)
    } 

    render(){ 
        return( 
            <div> 
                <Card/>
            </div>
        )
    }

}

export default App