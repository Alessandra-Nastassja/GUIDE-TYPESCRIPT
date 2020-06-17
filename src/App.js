import React from 'react';
import './App.scss';

import Home from './components/home/home';
import Menu from './components/menu/menu';
import Header from './components/header/header';

function App() {
  return (
    <section className="container">
      <Menu />
      <main>
        <Header />
        <Home />
      </main>
    </section>
  );
}

export default App;
