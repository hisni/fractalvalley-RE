import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { connect } from 'react-redux';
import { IconContext } from "react-icons";
import Home from './containers/HomePage/Home';
import Layout from './hoc/Layout/Layout';

import './App.css';

class App extends Component {

  	render() {

		let routes = (
			<Switch>
				{/* <Route path="/about" exact component={About} /> */}
				<Route path="/" component={Home} />
			</Switch>
		);

		return (
			<IconContext.Provider value={{ color: "rgb(3, 78, 41)",style: { verticalAlign: 'middle' } , className: "global-class-name" }}>
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
