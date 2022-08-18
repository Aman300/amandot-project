import React from 'react'
import './App.css';

import {BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Navbar from './component/navbar'
import Home from './component/home'
import List from './component/list'
import Edit from './component/edit'
import About from './component/about'
import Footer from './component/footer'
import Service from './component/Service'



function App() {

  return (

    <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/list" element={<List />} />
      <Route exact path="/edit/:id" element={<Edit />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/Service" element={<Service />} />
    </Routes>
    <Footer/>
</Router>

  );
}

export default App;
