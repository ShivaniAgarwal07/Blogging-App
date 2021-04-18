import NavBar from './Comps/nav';
import Home from './Comps/home';
import CreateBlog from './Comps/create';
import {BrowserRouter as Router , Route, Switch } from 'react-router-dom'
import BlogDetails from './Comps/blogDetails';
function App() {
  return (
    <Router>
    <div className='App'>
    <NavBar/>
    <div className="content">
    <Switch>
 {/* Route 1 Home Comp*/}
    <Route exact path='/'>
      <Home/>
    </Route>

    {/* Route 2 : CreateBlog Comp */}
    <Route exact path='/create'>
      <CreateBlog/>
    </Route>

     {/* Route 3 : BlogDetails Comp */}
     <Route exact path='/details:id'>
      <BlogDetails/>
    </Route>
    </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
