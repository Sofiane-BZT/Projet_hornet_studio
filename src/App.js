
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Header } from './components/header/Header';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          {/* <Route path="/about">
            <About />
          </Route> */}
        </Switch>
    </Router>
  
  </>
  )
}

export default App;
