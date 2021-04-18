import NavBar from './Comps/nav';
import Home from './Comps/home';
import {BrowserRouter as Router , Route, Switch } from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className='App'>
    <NavBar/>
    <div className="content">
    <Switch>
    <Route path='/'>
      <Home/>
    </Route>
    </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
