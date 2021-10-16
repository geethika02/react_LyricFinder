import React,{Component} from "react";
// import { BrowseRouter as Router,Route,Switch } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";
import {Provider} from "./context";
import './App.css';

class App extends Component {
  render(){
  return (
    <Provider>
    <Router>
    <React.Fragment>
      <Navbar/>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route exact path="/lyrics/track/:id" component={Lyrics}/>
        </Switch>
      </div>
  </React.Fragment>
    </Router>
    </Provider>
  );
}
}

export default App;
