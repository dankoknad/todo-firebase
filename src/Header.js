import React from 'react';
import logo from './logo.svg';
import logoFirebase from './firebase.png';

export default function Header() {
	return (
		<div className="App-header">
			<img src={logo} className="App-logo" alt="logo React" />
			<img src={logoFirebase} className="logo-firebase" alt="logo Firebase" />
			<h2>Welcome to React &amp; Firebase</h2>
			<div className="author">Made with <span className="text-danger">♥</span> by <a href="http://dankoknad.github.io/" target="_blank">Danko</a></div>
		</div>
	)
}