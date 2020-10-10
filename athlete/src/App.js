import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import AthleteInfo from "./components/AthleteInfo";
import Athlete from "./components/Athlete";
import Header from "./components/Header";
import {Provider} from "./context";
import AddAthlete from "./components/AddAthlete";
import {BrowserRouter as Router, Route, Switch}  from "react-router-dom";
import Info from "./components/pages/Info";
import UpdateAthlete from "./components/UpdateAthlete";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={AthleteInfo}/>
              <Route exact path="/athlete/add" component={AddAthlete}/>
              <Route exact path="/athlete/update/:id" component={UpdateAthlete}/>
              <Route exact path="/info" component={Info}/>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

