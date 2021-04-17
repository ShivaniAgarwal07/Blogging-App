import Emoji from 'a11y-react-emoji'

const BlogList = ({bloglist,title,handleDelete}) => {
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
                <button
                onClick={() =>handleDelete(blog.id)}
                >
                   <Emoji
                   symbol="❌"
                   label="Delete"
                   ></Emoji> 
                </button>
            </div>
            ))
               }
    </> );
 }
  
 export default BlogList;