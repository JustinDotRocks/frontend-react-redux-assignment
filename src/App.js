import React from 'react';
import { Counter } from './components/counter/Counter';
import './App.css';
import AntDesignCounter from './components/counter/AntDesignCounter';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				<Counter />
				<AntDesignCounter />
				{/* <p>
					Edit <code>src/App.js</code> and save to reload.
				</p> */}
			</header>
		</div>
	);
}

export default App;
