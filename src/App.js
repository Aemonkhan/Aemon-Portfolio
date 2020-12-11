import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import FormContact from './ProtfolioForm/FormContact';
import NavBar from './pages/NavBar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
     <Router>
   <NavBar />
   <Switch>
          <Route path="/project">
            <Projects />
          </Route>
          <Route path="/contacts">
            <Contacts/>
          </Route>
          <Route path="/formContact">
            <FormContact/>
          </Route> 
          <Route path="/">
            <Home />
          </Route>
        </Switch>
     </Router>
   
    </>
  );
}

export default App;
