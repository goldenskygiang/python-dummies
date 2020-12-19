import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage.js";
import Problemset from "./pages/Problemset.js";
import Quizzes from "./pages/Quizzes.js";
import QuizzesContent from "./pages/QuizzesContent.js"
import ProblemContent from "./pages/ProblemContent.js"
import Submit from "./pages/Submit.js"


class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/Problemset" exact component={Problemset} />
            <Route path="/Quizzes" exact component={Quizzes} />
            <Route path="/Quizzes/:id" exact component={QuizzesContent} />
            <Route path="/Problemset/:id" exact component={ProblemContent} />
            <Route path="/Submit/:id" exact component={Submit} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
