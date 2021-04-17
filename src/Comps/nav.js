// emmet -> sfc + tab
// a stateless functional component
const NavBar = () => {
    return (
 <nav className='navbar'>
        <h2>Nav</h2>
        <div className="links">
            <a href="/">Home</a>
            <a href="">New Blog</a>
        </div>
    </nav> 
    );
}
 
export default NavBar;