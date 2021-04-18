import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
 <nav className='navbar'>
        <h2>Nav</h2>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create"
            style={{
                color:"white",
                borderRadius:"8px",
                backgroundColor:"#f1356d"
            }}
            >New Blog</Link>
        </div>
    </nav> 
    );
}
 
export default NavBar;