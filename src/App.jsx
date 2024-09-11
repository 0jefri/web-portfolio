import React from 'react';
import Layout from './components/Layout';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';

function App() {
	return (
		<>
			<Layout>
				<Header />
				<Dashboard />
			</Layout>
		</>
	);
}

export default App;
