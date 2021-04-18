import BlogList from "./blogList"
import useFetch from '../hooks/useFetch'
const Home = () => {
    const url = "http://localhost:8000/blogs";
    const {data: blogs,error,isPending} = useFetch(url);

    return ( 
        <div className="home">
            {error && <div className="error">{error}</div>}
            {isPending && <div>Loading  . . .</div>}
            {blogs &&  <BlogList bloglist={blogs} title="All Blogs!" />}
        {/* reusing blogs comp with diff filtered data */}
            {/* <BlogList bloglist={blogs.filter((blog) =>blog.author==="Abhishek")} title="Blogs by Abhishek"/> */}
        </div>  
     );
}
 
export default Home;