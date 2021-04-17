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
           
        </div>  
     );
}
 
export default Home;