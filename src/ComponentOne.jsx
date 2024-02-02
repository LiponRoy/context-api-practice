import React, { useContext } from 'react';
import { Context } from './Context/Context';

const ComponentOne = () => {
	const { myText } = useContext(Context);
	return <div>ComponentOne: {myText}</div>;
};

export default ComponentOne;
