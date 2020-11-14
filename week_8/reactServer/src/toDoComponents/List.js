import React,{useState} from 'react' 


const List = () =>{   
    
    const [list,setList] = useState([])

    const addItem = (event) =>{  
        event.preventDefault()
        setList(list.push(event.target.toDo.value)) 
        setList(list) 
        console.log(list) 
    } 

    const displayList = () => {  
 
    // console.log(document.getElementById("list"))
    // document.getElementById("list").innerHTML = ""  
    return list.map((v, i) => {
        //    let li = document.createElement("li") 
        //    let liText = document.createTextNode(v) 
        //    li.appendChild(liText)   
           return React.createElement("li",{key: i}, v) 

        //    document.getElementById("list").appendChild(li)
        });   



      }

    return(  
        <div>   
            <form onSubmit={addItem}>  
            Add Item to your list
                <input type="text" name="toDo" /> 
                <input type="submit" value="submit" /> 
            </form> 

        <div id="list">    
        {
        list.map((v, i) => {
               return React.createElement("li",{key: i}, v) 
            })  
        }
        </div>
         
        </div> 
    )
} 

export default List