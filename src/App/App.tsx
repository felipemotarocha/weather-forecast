import * as React from 'react';

import { Container } from './App.styles';

import { default as HomePage } from '../pages/home/home.container';

const App: React.FunctionComponent = () => {
	return (
		<Container>
			<HomePage />
		</Container>
	);
};

export default App;
