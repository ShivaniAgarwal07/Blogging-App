import {Link} from 'react-router-dom';

const NotFound = () => {
    return ( <div className="notFound">
        <h2>AW Snap ! Looks like you are looking for something that doesn't exist !
        </h2>
        <Link to={"/"}>Back to Home</Link>
    </div> );
}
 
export default NotFound;