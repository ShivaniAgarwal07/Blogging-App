import {useParams} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import BlogList from "./blogList"
const BlogDetails = () => {
    
    // const url = "http://localhost:8000/blogs/details/";
    const {id} = useParams();
    const {data:blogs,error,isPending} = useFetch("http://localhost:8000/blogs/details/"+id);
    return ( 
        // <div className="blogdetails">
            <div className="home">
            {error && <div className="error">{error}</div>}
            {isPending && <div>Loading  . . .</div>}
            {blogs &&  <article>
                <h2>{blogs.title}</h2>
                <p>{blogs.body}</p>
                </article>}
        </div>  
        // </div>
     );
}
 
export default BlogDetails;