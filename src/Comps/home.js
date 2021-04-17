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
        id:1
        },
        {
        title:"My Sec Website", 
        body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ducimus voluptatem facilis. Doloremque consequatur ipsa ex tempore corrupti, veritatis nihil!",
        author:"Moonwalker",
        id:2
        },
        {
        title:"My Latest Website", 
        body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ducimus voluptatem facilis. Doloremque consequatur ipsa ex tempore corrupti, veritatis nihil!",
        author:"Moonwalker",
        id:3
        },
    ])    
    return ( 
        <div className="home">
            <BlogList
            bloglist={blogs}
            title="My Latest Website"
            />
        </div>  
     );
}
 
export default Home;