import React, { useContext } from 'react';
import { Context } from './Context/Context';

const MyComponent = () => {
	const { myText, setMyText } = useContext(Context);

	return (
		<div className="myComponent">
			<input
				type="text"
				placeholder="Enter Your Text"
				onChange={(e) => setMyText(e.target.value)}
			/>
		</div>
	);
};

export default MyComponent;
