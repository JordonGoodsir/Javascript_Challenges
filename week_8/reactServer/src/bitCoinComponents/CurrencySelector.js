import React from 'react'  
import currencies from "../supported-currencies.json"

const CurrencySelector = (props) =>{ 
    return( 
        <div>  
            <span>Select your currency</span>
            <select value={props.currency} onChange={(event) => props.handleCurrencyChange(event.target.value)}>  
            {currencies.map((obj,index)=>{ 
                <option key={index} value={obj.currency}>{obj.country}</option>
            })}

            </select>
        </div>
    )
} 

export default CurrencySelector