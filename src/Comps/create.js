import {useState} from 'react';
import {useHistory} from 'react-router-dom';


const CreateBlog = () => {


    const history = useHistory();
    // declaring some states to manage the form input values 
    const [title, setTitle] =useState("");
    const [body, setbody] = useState("");
    const [author, setAuthor] = useState("");
    const [isPending,setPending] = useState(false);

    const handleSubmit = (evt) => {
        // Prevent form being refreshed every time button is clicked / submitted
        evt.preventDefault();

        // for POST request, we need not have to create id, JSON Server will automatically assign one 
        const newblog = {title,body,author};
        console.log(newblog);
        setPending(true);

        // pushing new data to server :- Post request
        fetch("http://localhost:8000/blogs",{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(newblog),
        })
        // since this is async function and returns a promie, we can pass then method to fire a function
        .then(()=>{
            setPending(false);
            // history.go(-1);
            history.push("/");
        })
    }

    return ( <div className="create">
        <form
        onSubmit={handleSubmit}
        >
            <h2>Add New Blog</h2>
            <label>Blog Title</label>
            <input required type="text" 
            onChange={(event)=>setTitle(event.target.value)}
            value={title}
            name="" id=""/>
            <label>Content</label>
            <textarea
            onChange={(event)=>setbody(event.target.value)}
            value={body}
            required></textarea>
            <label>Author</label>
            <select
            onChange={(event)=>setAuthor(event.target.value)}
            value={author}
            name="" id="">
                <option value="Abhishek">Abhishek</option>
                <option value="Moonwalker">Moonwalker</option>
            </select>
        {!isPending &&<button>Add Blog</button>}
        {isPending &&<button>Adding Blog ....</button>}
        
        </form>
    </div> 
    );
}
 
export default CreateBlog;