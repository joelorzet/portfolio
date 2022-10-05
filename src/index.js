import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NextUIProvider } from '@nextui-org/react';
import theme from './theme/theme.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<NextUIProvider theme={theme}>
			<App />
		</NextUIProvider>
	</React.StrictMode>
);
