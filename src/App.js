import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import './globals.css';
import Landing from './pages/Landing';

function App() {
  return (
    <Provider store={store}>
      <Landing />
    </Provider>
  );
}

export default App;
