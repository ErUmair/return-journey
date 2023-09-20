import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import GreenLightRedLight from './components/GreenLightRedLight';
import Header from './components/Header';
import GmaeRule from './Pages/GmaeRule';
import LeaderBoard from './Pages/LeaderBoard'
import { Routes, Route } from "react-router-dom";

function App() {
 
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<GreenLightRedLight />} />
        <Route path="/game-rule" element={<GmaeRule />} />
        <Route path="/leader-board" element={<LeaderBoard/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
