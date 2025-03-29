import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componenets/NavBar';
import Home from './pages/Home';
import ShopAll from './pages/ShopAll';
import Pitchers from './pages/Pitchers';
import Bottles from './pages/Bottles';
import LogIn from './pages/LogIn';
import Technology from './pages/Technology';
import WaterQuality from './pages/WaterQuality';
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopall" element={<ShopAll />} />
        <Route path="/pitchers" element={<Pitchers />} />
        <Route path="/bottles" element={<Bottles/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/Tech" element={<Technology/>} />
        <Route path="/water" element={<WaterQuality/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
