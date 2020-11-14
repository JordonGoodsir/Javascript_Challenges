// import React, {useState} from "react" 


// const NewBlogPost = () =>{  

//   const initialFormState = { 
//       title: "", 
//       category: "", 
//       conetent: ""
//   } 

//   const [formState, setFormState] = useState(initialFormState) 

//   const handleChange= (event) => {   

//     const {name, value} =  event.target 

//     setFormState({...formState,[name]:value})


//   }

//     return (  
//         <div> 
//            <h1>NewBlogPost</h1> 
//            <form id="newPostForm">  
//                <label>Title</label>
//                <input type="text" name="title" onChange={handleChange}/> 
//                <label>Category</label>
//                <input type="text" name="category" onChange={handleChange}/> 
//                <label>Content</label>
//                <textarea form="newPostForm" name="content" onChange={handleChange}/> 
//                <input type="submit" value="New Post"/> 
//            </form>
//         </div>

//     )
// }  

// export default NewBlogPost