import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { connect } from 'react-redux';
import { IconContext } from "react-icons";

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Login from './containers/Auth/Login';
import Signup from './containers/Auth/Signup';


import './App.css';

class App extends Component {

  	render() {

		let routes = (
			<Switch>
				<Route path="/about" exact component={About} />
				<Route path="/login" exact component={Login} />
				<Route path="/register" exact component={Signup} />
				<Route path="/" component={Home} />
			</Switch>
		);

		return (
			<IconContext.Provider value={{ color: "rgb(191, 181, 216)",style: { verticalAlign: 'middle' } , className: "global-class-name" }}>
				<div className="App">
						<Layout>
							{routes}
						</Layout>
				</div>
			</IconContext.Provider>
		);
	}
}

export default App;
