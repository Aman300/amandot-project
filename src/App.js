import React from 'react'
import './App.css';

import {BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Navbar from './component/navbar'
import Home from './component/home'
import Portofolio from './component/portofolio'
import Edit from './component/edit'
import About from './component/about'
import Footer from './component/footer'
import Service from './component/Service'
import Sign from './component/auth/sign'
import Signup from './component/auth/signup'



function App() {

  return (

    <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/portofolio" element={<Portofolio />} />
      <Route exact path="/edit/:id" element={<Edit />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/Service" element={<Service />} />
      <Route exact path="/sign" element={<Sign />} />
      <Route exact path="/signup" element={<Signup />} />
    </Routes>
    <Footer/>
</Router>

  );
}

export default App;
