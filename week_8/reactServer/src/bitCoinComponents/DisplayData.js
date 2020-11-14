import React from 'react' 

const DisplayData = ({data}) =>{ 
    return( 
        <div>   
            {data.map((date)=>{  
                <div key={date}>Date: {date} | Value: {data[date]}</div>
            })}
        </div>
    )
} 

export default DisplayData