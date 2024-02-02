import { useState } from 'react';

import './App.css';
import { Context } from './Context/Context';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import MyComponent from './ComponentThree';

function App() {
	const [myText, setMyText] = useState('');

	return (
		<>
			<Context.Provider value={{ myText, setMyText }}>
				<ComponentOne />
				<ComponentTwo />
				<MyComponent />
			</Context.Provider>
		</>
	);
}

export default App;
