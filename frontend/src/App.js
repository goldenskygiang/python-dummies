import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage.js';
// import Practicepage from './pages/Practicepage.js';
// import AboutApp from './pages/AboutApp.js';


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
						{/* <Route path="/practice" exact component={Practicepage} />
						<Route path="/AboutApp" exact component={AboutApp} /> */}
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
