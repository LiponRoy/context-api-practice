import React, { useContext } from 'react';
import { Context } from './Context/Context';

const ComponentTwo = () => {
	const { myText } = useContext(Context);

	return <div>ComponentTwo: {myText}</div>;
};

export default ComponentTwo;
