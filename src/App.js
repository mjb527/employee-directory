// packages
import React from 'react';

// styles
import './App.css';

// components
import Table from './components/table';
import Footer from './components/footer';
import Header from './components/header';
import Controls from './components/controls'


function App() {
  return (
    <div>
      <Header />
      <Controls />
      <Table />
      <Footer />
    </div>
  );
}


export default App;
