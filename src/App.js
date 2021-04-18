import NavBar from './Comps/nav';
import Home from './Comps/home';
import CreateBlog from './Comps/create';
import {BrowserRouter as Router , Route, Switch } from 'react-router-dom'
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
    </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
