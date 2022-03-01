import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Nav from './components/Nav';
import Cart from './components/Cart';
import HomeScreen from './screens/HomeScreen';

import Home from './pages/Home';

function App() {
  return (
    <>
    <Home />
    <div className="App">
      <Nav />
      <Cart />
      <HomeScreen />
    </div>
    </>
  );
}

export default App;
