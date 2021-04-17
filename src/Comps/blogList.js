import {useState} from 'react';
 const BlogList = ({bloglist,title}) => {
    return ( <>
    <h1>{title}</h1>
        {
      bloglist.map((blog)=>(
        <div      
        // EACH element must have a unique key property :- react uses to track each item in DOM by key
        key={blog.id}
        className="blogs">
                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
                <h3>Writtern by :{blog.author}</h3>
            </div>
            ))
               }
    </> );
 }
  
 export default BlogList;