import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import RepositoriesList from './components/RepositoriesList';
import { store } from './state/store';

function App() {
  return (
    <Provider store={store} >
      <div>
        <h1>Search for a Package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
}

export default App;
