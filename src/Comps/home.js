import BlogList from "./blogList"
import {useState,useEffect} from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState(null )    

    const handledelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(()=>{
        fetch("http://localhost:8000/blogs")
        .then((response) =>{ return response.json()})
        .then((data) =>setBlogs(data))
    },[])

    return ( 
        <div className="home">
            {blogs &&  <BlogList bloglist={blogs} title="All Blogs!" handleDelete={handledelete}/>}
        {/* reusing blogs comp with diff filtered data */}
            {/* <BlogList bloglist={blogs.filter((blog) =>blog.author==="Abhishek")} title="Blogs by Abhishek"/> */}
        </div>  
     );
}
 
export default Home;