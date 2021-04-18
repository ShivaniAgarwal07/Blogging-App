import {useState} from 'react';
const CreateBlog = () => {

    // declaring some states to manage the form input values 
    const [title, setTitle] =useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");

    return ( <div className="create">
        <form><h2>Add New Blog</h2>
            <label>Blog Title</label>
            <input required type="text" 
            onChange={(event)=>setTitle(event.target.value)}
            value={title}
            name="" id=""/>
            <label>Content</label>
            <textArea
            onChange={(event)=>setContent(event.target.value)}
            value={content}
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