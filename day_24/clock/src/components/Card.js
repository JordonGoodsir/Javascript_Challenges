import react from "react" 

const styles = { 
    backgroundColor = "blue"
}

const Card = (props) =>{
return( 
    <div style={styles}> 
        {props.children}
    </div>
) 
}