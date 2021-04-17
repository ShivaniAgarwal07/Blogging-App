import BlogList from "./blogList"
import {useState} from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {
        title:"My New Website", 
        body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ducimus voluptatem facilis. Doloremque consequatur ipsa ex tempore corrupti, veritatis nihil!",
        author:"Moonwalker",
        id:1
        },
        {
        title:"My T Website", 
        body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ducimus voluptatem facilis. Doloremque consequatur ipsa ex tempore corrupti, veritatis nihil!",
        author:"Moonwalker",
        id:2
        },
        {
        title:"My Sec Website", 
        body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ducimus voluptatem facilis. Doloremque consequatur ipsa ex tempore corrupti, veritatis nihil!",
        author:"Abhishek",
        id:3
        },
        {
        title:"My Latest Website", 
        body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ducimus voluptatem facilis. Doloremque consequatur ipsa ex tempore corrupti, veritatis nihil!",
        author:"Abhishek",
        id:4
        },
    ])    

    const handledelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    return ( 
        <div className="home">
            <BlogList bloglist={blogs} title="All Blogs!" handleDelete={handledelete}/>
        
        {/* reusing blogs comp with diff filtered data */}
            {/* <BlogList bloglist={blogs.filter((blog) =>blog.author==="Abhishek")} title="Blogs by Abhishek"/> */}
        </div>  
     );
}
 
export default Home;