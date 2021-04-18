const CreateBlog = () => {
    return ( <div className="create">
        <h2>Add New Blog</h2>
        <form>
            <label>Blog Title</label>
            <input required type="text" name="" id=""/>
            <label>Content</label>
            <textArea required></textArea>
            <label>Author</label>
            <select name="" id="">
                <option value="Abhishek">Abhishek</option>
                <option value="Moonwalker">Moonwalker</option>
            </select>
        </form>
    
    </div> 
    );
}
 
export default CreateBlog;