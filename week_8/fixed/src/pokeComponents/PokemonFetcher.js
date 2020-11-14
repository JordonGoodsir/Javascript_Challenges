import react,{useState} from "react"

const PokemonFetcher = (props) =>{  

    const [foundPokemon, setFoundPokemon] = useState("") 
 
    
    const pokemon = props.match.params.name
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`) 
    .then(res => res.json()) 
    .then(data =>{ 
        console.log(data.name) 
        setFoundPokemon(data.sprites.front_default)
    }) 
    .catch(error => console.log(error)) 
    
    return( 
        <div> 
            <p>fetched pokemon: {props.match.params.name}</p> 
            <img src={foundPokemon}/>
        </div>
    )
}

export default PokemonFetcher