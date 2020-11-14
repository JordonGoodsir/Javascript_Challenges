// import {BrowserRouter, Route, Switch, Link} from "react-router-dom" 
// import React, {useState, useEffect} from 'react';
// import blogData from "../data/post_data" 
// import BlogPosts from "./BlogPosts"
// import BlogPost from "./BlogPost"; 
// import Nav from "./Nav"


// function App() {  

//     const [blogPosts, setBlogPosts] = useState([]) 

//     useEffect(()=>{ 
//         setBlogPosts(blogData)
//     },[]) 

//     const getPostFromId = (id) =>{  
//         return blogData.find(post => post._id == match.params.id)
//     }

//     return (
//     <div>   
//        me app  
//        <Nav></Nav>
//        <BrowserRouter>   
//        <Route exact to="/posts/new" render={(props) => <NewBlogPost {...props} />} />        
//        <Route exact to="/post/:id" render={(props) => <BlogPost {...props} post={getPostFromId(props.match.params.id)}/>}/>
//        <Route exact to="/" render={(props) => <BlogPosts {...props} posts={blogData}/>}/>
//        </BrowserRouter>
//     </div>
//     )
//     }
    
//     export default App