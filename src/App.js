import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Press from "./components/Press";
import Contact from "./components/Contact";


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="menu" element={<Menu/>}/>
        <Route path="/press" element={<Press/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
