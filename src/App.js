import { Home } from '@material-ui/icons';
import React,{Component} from 'react';
import './App.css';
import Main from './containers/Main';
import MapContainer from './containers/MapContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
class App extends Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route path="/map">
            <MapContainer />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
    </Router>
      );
  }
}

export default App;
