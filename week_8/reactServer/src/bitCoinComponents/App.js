import React,{useEffect,useState} from 'react' 
import CurrencySelector from "./CurrencySelector" 
import DisplayData from "./DisplayData" 


const App = () =>{   
    const defaultCurrency = "AUD"
    const [currency, setCurrency] = useState(defaultCurrency)  
    const [bitcoinData, setbitcoinData] = useState({})

 
    const currencyChangeHandler = (newCurrency) =>{ 
      setCurrency(newCurrency)
    } 

    useEffect(() =>{ 
        // const data = {"today": "ye"} 
        // setbitcoinData(data)  
        const bitcoinApi = "https://api.coindesk.com/v1/bpi/historical/close.json"
        fetch(`${bitcoinApi}?currency=${currency}`) 
        .then(response=>response.json()) 
        .then(data=> setbitcoinData(data.bpi)) 
        .catch(error=>error)
    },[currency])  

    return( 
        <div>  
            Bitcoin Index
            <CurrencySelector currency={currency} handleCurrencyChange={currencyChangeHandler}/> 
            <DisplayData data={bitcoinData}/>
        </div>
    )
} 

export default App