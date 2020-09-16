import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';
import './globals.css';
import { ToastProvider } from 'react-toast-notifications';

export default function App() {
	return (
		<ToastProvider>
			<Provider store={store}>
				<Routes />
			</Provider>
		</ToastProvider>
  );
}