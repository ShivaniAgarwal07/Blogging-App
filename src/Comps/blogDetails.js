import {useParams, useHistory} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Emoji from 'a11y-react-emoji'

const BlogDetails = () => {
    
    const history = useHistory();
    const url = "http://localhost:8000/blogs/";
    const {id} = useParams();
   const {data: blogs,error,isPending}= useFetch(url + id);

    const handleDelete = () =>{
        // a delete request to JSON Server
        fetch("http://localhost:8000/blogs/" + id,{
            method: "DELETE",
        }).then(() =>{
            history.push("/")
        })
    }
   return ( 
            <div className="blogdetails">
            {error && <div className="error">{error}</div>}
            {isPending && <div>Loading  . . .</div>}
            {blogs &&  <article>
                <h2>{blogs.title}</h2>
                <p>{blogs.body}</p>
                <h3>{blogs.author}</h3>
               </article>}
               <button>
                   <Emoji
                   onClick={handleDelete}
                   symbol="❌"
                   label="Delete"
                   ></Emoji> 
                </button>
        </div>  
     );
}
 
export default BlogDetails;