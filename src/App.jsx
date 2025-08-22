import React from 'react';
import Navbar from './components/Navbar';
import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Banner from './components/home/banner';


function App() {

  return (
    <>
      <Navbar />
      <Banner/>
      </>
  );
}

export default App;
