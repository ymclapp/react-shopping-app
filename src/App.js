import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Nav from './components/Nav';
import Cart from './components/Cart';
import HomeScreen from './screens/HomeScreen';

import Header from './components/Header';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <div className="App">
        <Cart />
        <HomeScreen />
      </div>
    </>
  );
}

export default App;
