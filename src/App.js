import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import Home from './Home/Home';
import Offices from './Offices/Offices';
import Our from "./Our People/Our";


let App = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/offices' element={<Offices />} />
        <Route path='our people' element={<Our />}/>
      </Routes>
  );
}

export default App;
