import {useState} from 'react';
const CreateBlog = () => {

    // declaring some states to manage the form input values 
    const [title, setTitle] =useState("");
    const [body, setbody] = useState("");
    const [author, setAuthor] = useState("");


    const handleSubmit = (evt) => {
        // Prevent form being refreshed every time button is clicked / submitted
        evt.preventDefault();

        // for POST request, we need not have to create id, JSON Server will automatically assign one 
        const newblog = {title,body,author};
        console.log(newblog);
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
            <textArea
            onChange={(event)=>setbody(event.target.value)}
            value={body}
            required></textArea>
            <label>Author</label>
            <select
            onChange={(event)=>setAuthor(event.target.value)}
            value={author}
            name="" id="">
                <option value="Abhishek">Abhishek</option>
                <option value="Moonwalker">Moonwalker</option>
            </select>
            <button>Add Blog</button>
        </form>
    </div> 
    );
}
 
export default CreateBlog;