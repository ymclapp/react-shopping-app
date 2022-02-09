import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Nav from './components/Nav';
import Cart from './components/Cart';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div className="App">
      <Nav />
      <Cart />
      <HomeScreen />
    </div>
  );
}

export default App;
