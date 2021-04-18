import {useParams} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
const BlogDetails = () => {
    
    const url = "http://localhost:8000/blogs/";
    const {id} = useParams();
   const {data: blogs,error,isPending}= useFetch(url + id);
    console.log(blogs);
    return ( 
            <div className="blogdetails">
            {error && <div className="error">{error}</div>}
            {isPending && <div>Loading  . . .</div>}
            {blogs &&  <article>
                <h2>{blogs.title}</h2>
                <p>{blogs.body}</p>
                <h3>{blogs.author}</h3>
               </article>}

        </div>  
     );
}
 
export default BlogDetails;