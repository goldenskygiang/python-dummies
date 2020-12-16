import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage.js';
import Problemset from './pages/Problemset.js';
import Quizzes from './pages/Quizzes.js';


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
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
