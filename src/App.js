import React from 'react';
import './App.css';

import Nav from './components/Nav';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div className="App">
      <Nav />
      <HomeScreen />
    </div>
  );
}

export default App;
