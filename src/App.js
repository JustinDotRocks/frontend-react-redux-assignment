import React from 'react';
import { Counter } from './components/counter/Counter';
import AntDesignCounterClassComponent from './components/counter/AntDesignCounterClassComponent';

import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Counter />
				<AntDesignCounterClassComponent />
			</header>
		</div>
	);
}

export default App;
