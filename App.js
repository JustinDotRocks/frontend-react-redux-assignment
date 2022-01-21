import React from 'react';
import { Counter } from './components/counter/Counter';
import AntDesignCounterClassComponent from './components/counter/AntDesignCounterClassComponent';

import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				<Counter />
				<AntDesignCounterClassComponent />
				{/* <p>
					Edit <code>src/App.js</code> and save to reload.
				</p> */}
			</header>
		</div>
	);
}

export default App;
