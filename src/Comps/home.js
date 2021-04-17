import {useState} from 'react';

const Home = () => {
   
    // using array of blogs for our page
    const [blogs, setBlogs] = useState([
        {
        title:"My New Website", 
        body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ducimus voluptatem facilis. Doloremque consequatur ipsa ex tempore corrupti, veritatis nihil!",
        author:"Moonwalker",
        id:1
        },
        {
        title:"My New Website", 
        body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ducimus voluptatem facilis. Doloremque consequatur ipsa ex tempore corrupti, veritatis nihil!",
        author:"Moonwalker",
        id:1
        },
        {
        title:"My New Website", 
        body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ducimus voluptatem facilis. Doloremque consequatur ipsa ex tempore corrupti, veritatis nihil!",
        author:"Moonwalker",
        id:2
        },
        {
        title:"My New Website", 
        body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ducimus voluptatem facilis. Doloremque consequatur ipsa ex tempore corrupti, veritatis nihil!",
        author:"Moonwalker",
        id:3
        },
    ])

    return ( 
        <div className="home">
           {/* using map() to iterate through blogs array to view  */}
           {
            blogs.map((blog)=>(
        <div 
        
        // EACH element must have a unique key property :- react uses to track each item in DOM by key
        key={blog.id}
        className="blogs">
                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
                <h3>{blog.author}</h3>
            </div>
            ))
           }
        </div>  
     );
}
 
export default Home;