const CreateBlog = () => {
    return ( <div className="create">
        <form><h2>Add New Blog</h2>
            <label>Blog Title</label>
            <input required type="text" name="" id=""/>
            <label>Content</label>
            <textArea required></textArea>
            <label>Author</label>
            <select name="" id="">
                <option value="Abhishek">Abhishek</option>
                <option value="Moonwalker">Moonwalker</option>
            </select>
            <button>Add Blog</button>
        </form>
    
    </div> 
    );
}
 
export default CreateBlog;