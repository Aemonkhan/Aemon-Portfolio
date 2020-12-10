import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import NavBar from './pages/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div >
     <Router>
   <NavBar />
   <Switch>
          <Route path="/project">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contacts/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
